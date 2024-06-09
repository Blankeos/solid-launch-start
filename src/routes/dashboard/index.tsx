import ProtectedRoute from '@/components/common/protected-route';
import { useWindowSize } from '@/hooks/use-window-size';
import { useAuthContext } from '@/stores/auth.context';

// SSR DATA LOADING: I can't get this to work
// import { initTRPCSSRClient } from '@/lib/trpc-ssr-client';
// import { cache, createAsync } from '@solidjs/router';
// import { getRequestEvent } from 'solid-js/web';

// const getUser = cache(async () => {
//   'use server';
//   const event = getRequestEvent();

//   const trpcClient = initTRPCSSRClient(event?.request.headers!, event?.response.headers!);

//   const result = await trpcClient.currentUser.query();

//   return {
//     user: result.user ?? null,
//   };
// }, '23123');

// export const route = {
//   load: () => getUser(),
// };

export default function DashboardPage(props: any) {
  // SSR DATA LOADING: I can't get this to work.
  // const users = createAsync(() => getUser());

  const { user } = useAuthContext();

  const { height, width } = useWindowSize();

  return (
    <ProtectedRoute>
      <div class="flex flex-col gap-y-4">
        Dashboard: {user()?.username}
        <div>
          Window Size: {width()} x {height()}
        </div>
      </div>
    </ProtectedRoute>
  );
}
