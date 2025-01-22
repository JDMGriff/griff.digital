import Link from "next/link"

// Components
import HeroMeta from "./HeroMeta"

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
                    <span className='ml-4 group-hover:translate-x-2 transition-transform'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20.657'
                            height='11.314'
                            viewBox='0 0 20.657 11.314'
                        >
                            <path
                                id='Union_2'
                                data-name='Union 2'
                                d='M13.586,9.9l3.242-3.243H0v-2H16.829L13.586,1.414,15,0l4.243,4.243,1.414,1.414L15,11.314Z'
                                fill='#FFAA00'
                            ></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
        <HeroMeta />
    </>
  )
}

export default Hero