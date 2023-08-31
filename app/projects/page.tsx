import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="font-extrabold text-4xl mb-5">Projects!</h1>
      <p>Find my projects on my github:</p>
      <Link href="https://github.com/ArnoutReitsma">
        <div className="flex m-2">
          Github
          <BsGithub className="text-2xl ml-1" />
        </div>
      </Link>
    </div>
  );
}

export default ProjectsPage;
