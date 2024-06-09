import type { APIEvent } from "@solidjs/start/server";
import { Session, User } from 'lucia';

export const createContext = async (event: APIEvent) => {
  return {
    /** API Event from SolidStart */
    event: event,

    // The following will be set by the middlewares. 
    user: null as User | null,
    session: null as Session | null
  };
};
