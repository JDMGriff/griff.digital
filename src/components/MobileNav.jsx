"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { RiMenu3Line } from "react-icons/ri";
import VisuallyHidden from "@/components/VisuallyHidden";

const links = [
    { href: "/", label: "Home" },
    { href: "/#About", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
]

const MobileNav = () => {
    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger>
                <RiMenu3Line className="text-3xl" />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle className="text-xl">
                    <VisuallyHidden>
                        Menu
                    </VisuallyHidden>
                </SheetTitle>
                <nav className="flex flex-col gap-8 mt-12">
                    {links.map((link, index) => (
                        <Link key={index} className={`uppercase text-md font-medium hover:text-[--accent] transition-all ${
                            pathName === link.href ? 'text-[--accent]' : ''
                        }`} href={link.href}>{link.label}</Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>    
    );
};
export default MobileNav;