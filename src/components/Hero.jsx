import Link from "next/link"
import HeroMeta from "./HeroMeta"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <>
        <div className='h-screen flex flex-col justify-center'>
            {/* Hero Title */}
            <div className='sm:max-w-[75%] lg:max-w-[800px] lg:relative lg:top-[-5%]'>
                <h1 className='text-4xl lg:text-6xl uppercase font-bold mb-6'>
                    Digital Designer & Front End Developer
                    <span className='text-[--accent]'>.</span>
                </h1>
                {/* Hero Intro Text */}
                <p>
                    My name&#39;s Ian Griffiths, I have over 10 years experience
                    designing and building websites, apps and digital
                    experiences. Learn more about me and view my latest work.
                </p>
                {/* Hero cta */}
                <Link className='group flex items-center mt-6 w-max' href='/work/'>
                    <span className='uppercase text-[--accent] text-sm font-bold'>
                        Check out my latest work
                    </span>
                    <HiOutlineArrowNarrowRight className='ml-4 text-2xl translate-y-[-2px] text-[--accent] group-hover:translate-x-2 transition-transform' />
                </Link>
            </div>
        </div>
        <HeroMeta />
    </>
  )
}

export default Hero