'use server';


export const signIn = async (redirectUrl: string) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  console.log('sign in', redirectUrl);
};
