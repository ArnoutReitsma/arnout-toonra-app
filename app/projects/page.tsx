import Link from "next/link";
import React from "react";
import { BsGithub, BsArrowRight } from "react-icons/bs";

function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-4 text-gray-900 dark:text-white">
            My Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link href="https://github.com/ArnoutReitsma" className="col-span-full glass p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-white/20 dark:hover:bg-white/5 transition-all">
            <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
              <BsGithub className="text-4xl" />
            </div>
            <h2 className="font-heading font-bold text-2xl mb-2">View on GitHub</h2>
            <span className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Visit Profile <BsArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
