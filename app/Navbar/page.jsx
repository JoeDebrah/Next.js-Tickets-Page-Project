import Image from "next/image";
import Link from "next/link";
import Logo from "./React_Logo.png";

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt="Dojo Logo"
                width={100}
                quality={100}
                placeholder="blur"
            />
            <h1>React Helpdesk</h1>
            <Link href="/">Home</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
