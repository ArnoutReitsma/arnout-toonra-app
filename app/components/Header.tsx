"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Music", path: "/music" },
    { name: "Blog", path: "/blog" },
    { name: "Sports", path: "/sports" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`mx-auto max-w-5xl flex items-center justify-between p-2 rounded-full transition-all duration-300 ${scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-lg border border-white/20"
            : "bg-transparent"
            }`}
        >
          <Link href="/" className="flex items-center gap-3 ml-2">
            <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-primary/50">
              <Image
                src="/arnout-reitsma-nobg.png"
                alt="Arnout Reitsma"
                fill
                className="object-cover bg-gradient-to-br from-primary/20 to-secondary/20"
              />
            </div>
            <span className="font-heading font-bold text-lg hidden sm:block tracking-tight">
              ARNOUT REITSMA
            </span>
          </Link>

          <div className="flex items-center gap-1 overflow-hidden px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`header-button whitespace-nowrap ${pathname === item.path
                  ? "nav-link-active"
                  : "opacity-70 hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/5"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
