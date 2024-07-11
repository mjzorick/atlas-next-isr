import Link from "next/link";
import Image from "next/image";
import Logo from "./yoda.png";
export default function Navbar() {
  return (
    <nav>

      <h1>ISR is pretty cool</h1>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
