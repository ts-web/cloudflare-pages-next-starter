


export function SignIn ({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <form
      action={onClick}
    >
      <button type='submit'>
        Sign in
      </button>
    </form>
  );
};
