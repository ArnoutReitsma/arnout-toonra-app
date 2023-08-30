import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="font-extrabold text-4xl text-white"><p>WELCOME TO THE TOONRA PAGE</p></div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/music">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Music{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Listen to some of my finest electronic music composition work. Inspired by dupstep, drum and bass and melodic bass.
          </p>
        </Link>
      </div>
    </main>
  );
}