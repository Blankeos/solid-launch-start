import { IconLoading } from '@/assets/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PageRoutes } from '@/constants/page-routes';
import { useAuthContext } from '@/stores/auth.context';
import { A } from '@solidjs/router';
import { createMemo, For, Show, VoidProps } from 'solid-js';
import { toast } from 'solid-sonner';

type VerticalNavProps = {};

export default function VerticalNav(props: VoidProps<VerticalNavProps>) {
  const { user, loading, logout } = useAuthContext();

  const navLinks = createMemo<{ name: string; href: PageRoutes; visible: boolean }[]>(() => {
    return [
      {
        name: 'Home',
        href: PageRoutes.Home,
        visible: true,
      },
      {
        name: 'About',
        href: PageRoutes.About,
        visible: true,
      },
    ];
  });

  return (
    <nav class="flex h-20 items-center justify-between gap-x-5 px-8">
      <A class="flex items-center gap-x-2" href={PageRoutes.Home}>
        <img class="h-16 w-16" src="/icon-logo.svg" />
        <span>Solid Launch Start</span>
      </A>

      <ul class="flex items-center gap-x-5">
        <For each={navLinks()}>
          {({ name, href, visible }) => (
            <Show when={visible}>
              <li>
                <A href={href}>{name}</A>
              </li>
            </Show>
          )}
        </For>

        <Show when={loading()}>
          <IconLoading />
        </Show>

        <Show when={!user() && !loading()}>
          <li>
            <A href={PageRoutes.SignIn}>Sign In</A>
          </li>
          <li>
            <A href={PageRoutes.SignUp}>Sign Up</A>
          </li>
        </Show>

        <Show when={user() && !loading()}>
          <li>
            <button
              onClick={() => {
                logout();
                toast.success('Logged out!');
              }}
            >
              Logout
            </button>
          </li>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div
                class="h-12 w-12 flex-shrink-0 rounded-full"
                style={{
                  'background-position': 'center',
                  'background-size': 'cover',
                  'background-image': `url(https://thicc-uwu.mywaifulist.moe/waifus/satoru-gojo-sorcery-fight/bOnNB0cwHheCCRGzjHLSolqabo41HxX9Wv33kfW7.jpg?class=thumbnail)`,
                }}
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem as={A} href={PageRoutes.Dashboard}>
                Dashboard
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Show>
      </ul>
    </nav>
  );
}
