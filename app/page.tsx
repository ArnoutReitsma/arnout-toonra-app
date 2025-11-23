/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-20 animate-fade-in">
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-primary dark:text-white">Arnout Reitsma</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
            Building creative, performant full-stack web experiences <span className="font-medium text-primary">designing</span>, <span className="font-medium text-primary">developing</span> & <span className="font-medium text-accent">delivering</span>.
          </h2>

        </div>

        <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-[350px] lg:h-[350px] flex-shrink-0 animate-float">
          <div className="absolute inset-0 bg-gradient-blob opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="relative w-full h-full z-10">
            <Image
              src="/arnout-reitsma-nobg.png"
              alt="Arnout Reitsma"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className="glass p-8 rounded-3xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            About Me
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I'm Arnout Reitsma, a dedicated full-stack web developer from Utrecht with over eight years of experience. I specialize in React/Next.js, AngularJS, Blazor, and C# .NET, and I focus to deliver high-quality, reliable, and scalable software solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Web development for me is the perfect fusion of creativity and user experience. Crafting seamless and
            visually appealing solutions is what drives me.
          </p>
        </div>

        <div className="glass p-8 rounded-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            Beyond Coding
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Beyond coding, I enjoy a range of hobbies. Producing music, bouldering, running, swimming, biking, and chess keep me both creatively and physically engaged.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I also love attending concerts and festivals, and I try to travel whenever I can.
            In addition, I actively participate in sports events such as marathons and triathlons, always striving to achieve my fastest times.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full max-w-5xl mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-center font-heading text-3xl font-bold mb-10">My Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { name: 'Next.js', icon: '/next.svg' },
            { name: 'React', icon: '/logos/react.svg' },
            { name: 'Angular', icon: '/logos/angular.svg' },
            { name: 'Blazor', icon: '/logos/blazor.svg' },
            { name: 'C# / .NET', icon: '/logos/csharp-dotnet.svg' },
          ].map((tech) => (
            <div key={tech.name} className="group flex flex-col items-center gap-3 transition-all duration-300 hover:transform hover:scale-110">
              <div className="w-20 h-20 relative flex items-center justify-center bg-white dark:bg-white/5 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:shadow-primary/20 transition-all border border-gray-100 dark:border-white/10">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain w-12 h-12"
                />
              </div>
              <span className="font-medium text-sm opacity-70 group-hover:opacity-100 group-hover:text-primary transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <Link href="/music" className="link-card group">
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Music
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Listen to some of my finest electronic music composition work.
          </p>
        </Link>

        <Link href="/projects" className="link-card group">
          <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Projects
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Have a look at some of my software projects.
          </p>
        </Link>

        <Link href="/blog" className="link-card group">
          <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Blog
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Read about my adventures, events, and travel.
          </p>
        </Link>

        <Link href="/sports" className="link-card group">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Sports
            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Check out my personal bests and race results.
          </p>
        </Link>
      </div>
    </main>
  );
}
