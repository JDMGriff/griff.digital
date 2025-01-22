"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { href: "/", label: "Home" },
    { href: "/#About", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
]

const Nav = () => {
    const pathName = usePathname();

    return (
        <nav className="inline-flex gap-6">
            {links.map((link, index) => (
                <Link key={index} className={`uppercase text-xs xs:text-sm font-medium hover:text-[--accent] transition-all ${
                    pathName === link.href ? 'text-[--accent]' : ''
                }`} href={link.href}>{link.label}</Link>
            ))}
        </nav>
    )
}

export default Nav