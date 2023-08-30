import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 bg-slate-700">
      <p className="font-semibold text-white mb-2">ARNOUT REITSMA</p>
      <Link href="/" className="header-button ml-0">
        Home
      </Link>
      <Link href="/music" className="header-button">
        Music
      </Link>
      <Link href="/projects" className="header-button">
        Projects
      </Link>
      <Link href="/contact" className="header-button">
        Contact
      </Link>
    </header>
  );
}

export default Header;
