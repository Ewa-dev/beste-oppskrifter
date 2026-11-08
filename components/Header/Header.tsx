import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="top-header">
      <nav>
        <Link href="/">
          <Image src={logo} className="logo" alt="logo" />
        </Link>

        <Link href="/">Home</Link>
        <Link href="/recipes">Oppskrifter</Link>
        <Link href="/about">Om oss</Link>
      </nav>
    </header>
  );
}
