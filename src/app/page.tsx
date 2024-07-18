import Link from 'next/link';

export default async function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">Home Page</h1>
      <div className="mb-4">With Uploadthing</div>

      <Link
        href="/example-uploader"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Upload
      </Link>
    </div>
  );
}
