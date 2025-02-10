'use client';

import { signIn } from '@/actions/signIn';



export function SignIn ({
  redirectUrl,
}: {
  redirectUrl: string;
}) {
  return (
    <form
      action={async () => signIn(redirectUrl)}
    >
      <button type='submit'>
        Sign in
      </button>
    </form>
  );
};
