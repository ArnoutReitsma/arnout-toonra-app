import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="p-5 bg-slate-700 flex">
      <div className="justify-center items-center pr-5 sr-only sm:not-sr-only">
        <Image
          className="mr-2"
          src="/arnout-reitsma-nobg.png"
          alt={"Arnout cartoon!"}
          width={70}
          height={70}
        ></Image>
      </div>
      <div>
        <p className="font-semibold text-white mb-4">ARNOUT REITSMA</p>
        <Link href="/" className="header-button ml-0">
          Home
        </Link>
        <Link href="/music" className="header-button">
          Music
        </Link>
        <Link href="/projects" className="header-button">
          Projects
        </Link>
        <Link href="/blog" className="header-button">
          Blog
        </Link>
        <Link href="/contact" className="header-button">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
