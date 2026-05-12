import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Discuss
      </h1>
      <div className="flex flex-row justify-center gap-3 w-2/5">
        <Link className="w-20 border p-2 rounded-md text-center" href="/login">Login</Link>
        <Link className="w-20 border p-2 rounded-md text-center" href="/register">Register</Link>
      </div>
    </div>
  );
}