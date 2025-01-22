"use client";
import { useEffect } from "react";
import SubpageHero from "@/components/SubpageHero";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact | Griff.Digital";
    }, []);

    return(
        <>       
        {/* Subpage Hero */}
        <SubpageHero title={"Contact"} />

        <ContactForm />
        </>
    )
}

export default Contact;