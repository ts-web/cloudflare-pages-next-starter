import { SignIn } from '@/components/SignIn';



export const runtime = 'edge';

export default function LoginPage () {
  return (
    <div className='p-5'>
      <SignIn redirectUrl='/account' />
    </div>
  );
}
