import Link from "next/link"
import HeroMeta from "./HeroMeta"
import WPRichText from "./WPRichText"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = ({ heading, copy, linkText, linkUrl, email, phone, location }) => {
    return (
        <>
            <div className='h-screen flex flex-col justify-center'>
                {/* Hero Title */}
                <div className='sm:max-w-[75%] lg:max-w-[800px] lg:relative lg:top-[-5%]'>
                    <h1 className='text-4xl lg:text-6xl uppercase font-bold mb-6'>
                        {heading}
                        <span className='text-[--accent]'>.</span>
                    </h1>
                    {/* Hero Intro Text */}
                    <WPRichText html={copy} className="text-white" />
                    {/* Hero cta */}
                    <Link className='group flex items-center mt-6 w-max' href={linkUrl}>
                        <span className='uppercase text-[--accent] text-sm font-bold'>
                            {linkText}
                        </span>
                        <HiOutlineArrowNarrowRight className='ml-4 text-2xl translate-y-[-2px] text-[--accent] group-hover:translate-x-2 transition-transform' />
                    </Link>
                </div>
            </div>
            <HeroMeta
                email={email}
                phone={phone}
                location={location}
            />
        </>
    )
}

export default Hero