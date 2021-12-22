import { Session } from 'next-auth';

declare module 'next-auth' {
  export interface Session {
    user: {
      accessToken: string;
    };
  }
}
