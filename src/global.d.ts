/// <reference types="@solidjs/start/env" />

// @ts-ignore
declare global {
  // @ts-ignore
  declare module 'solid-js' {
    namespace JSX {
      /** Extend directives for `use-*` syntax. */
      interface Directives {
        form: (node: HTMLFormElement) => void;
      }
    }
  }
}
