import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

export default function useSpotify() {
  const { status, data: session } = useSession();

  useEffect(() => {
    if (session) {
      //
    }
  }, []);

  return null;
}
