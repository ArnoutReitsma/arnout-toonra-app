/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="font-extrabold text-4xl dark:text-white text-black">
        <p>WELCOME TO THE TOONRA PAGE</p>
      </div>
      <div className="md:w-1/2 space-y-4 mt-3">
        <p>
          Hello, I'm Arnout Reitsma, a passionate full-stack developer from
          Utrecht with over 6 years of experience. Specializing in AngularJS,
          Blazor, React/NextJS and C# .NET, I've earned a reputation for delivering top-notch
          software solutions.
        </p>
        <p>
          Beyond coding, I thrive on my hobbies. Producing music, bouldering,
          mountain biking, and chess keep me creatively and physically engaged.
          I also have a penchant for concerts and festivals, enjoying the energy
          of live (electronic) music and I love to travel!
        </p>
        <p>
          Web development, for me, is the perfect fusion of creativity and user
          experience. Crafting seamless and visually appealing solutions is what
          drives me. It's exciting to combine my technical skills with design
          aesthetics to create products that are both functional and beautiful.
          A great user experience is at the heart of my work, and I stay updated
          on the latest trends to deliver exceptional results.
        </p>
        <p>
          Thanks for stopping by – whether it's about collaborating on a project
          , discussing the latest tech trends or listening to some of my music, I'm always ready to connect.
        </p>
      </div>
      <div className="mt-10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/music" className="link-card">
          <h2 className={`md:mb-3 text-2xl font-semibold`}>
            Music{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Listen to some of my finest electronic music composition work.
            Inspired by dupstep, drum and bass and melodic bass.
          </p>
        </Link>
        <Link href="/projects" className="link-card">
          <h2 className={`md:mb-3 text-2xl font-semibold`}>
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Have a look at some of my projects.
          </p>
        </Link>
        <Link href="/blog" className="link-card">
          <h2 className={`md:mb-3 text-2xl font-semibold`}>
            Blog{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Blogs, events & travel.</p>
        </Link>
        <Link href="/contact" className="link-card">
          <h2 className={`md:mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Contact me.</p>
        </Link>
      </div>
    </main>
  );
}
