


export function SignIn ({
  redirectUrl,
}: {
  redirectUrl: string;
}) {
  return (
    <form
      action={async () => {
        'use server';
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });
        console.log('sign in', redirectUrl);
      }}
    >
      <button type='submit'>
        Sign in
      </button>
    </form>
  );
};
