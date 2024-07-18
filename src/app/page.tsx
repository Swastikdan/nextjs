import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">Home Page</h1>
      <div className="mb-4">With Uploadthing, Auth Js and Prisma</div>
      <div>
        {session ? (
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
            className="mb-4"
          >
            <button
              type="submit"
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              Sign Out
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              'use server';
              await signIn();
            }}
            className="mb-4"
          >
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>
        )}

        {session && session.user && (
          <pre className="mb-10 rounded bg-gray-100 p-4">
            {JSON.stringify(session.user || {}, null, 2)}
          </pre>
        )}
      </div>
      <Link
        href="/example-uploader"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Upload
      </Link>
    </div>
  );
}
