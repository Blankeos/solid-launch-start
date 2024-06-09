import { cache } from '@solidjs/router';
import { getRequestEvent } from 'solid-js/web';
import { initTRPCSSRClient } from '../trpc-ssr-client';

export const getUser = cache(async () => {
  'use server';
  const event = getRequestEvent();

  const trpcClient = initTRPCSSRClient(event?.request.headers!, event?.response.headers!);

  const result = await trpcClient.currentUser.query();

  return {
    user: result.user ?? null,
  };
}, 'data');
