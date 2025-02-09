import { SignIn } from '@/components/SignIn';



export const runtime = 'edge';

export default function LoginPage () {
  return (
    <div className='p-5'>
      <SignIn
        onClick={async () => {
          'use server';
          await new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });
          console.log('sign in');
        }}
      />
    </div>
  );
}
