import Link from "next/link";

export default function LatestWork() {
  return (
    <div className="flex justify-between flex-wrap lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:gap-x-8 lg:gap-y-6 lg:w-full lg:pl-32 xl:gap-y-20 xl:gap-x-20">

        <div className="w-full md:w-[48%] lg:w-full lg:row-start-1 lg:row-span-1 mb-8 lg:mb-0">
            <h3 className="uppercase font-bold text-2xl lg:text-4xl xl:text-6xl mb-6">Latest Work</h3>
            <p className="mb-6">View a collection of my latest work from design to development. Each project is tagged to show my involvement and whether the website is currently live in production.</p>
            <Link className="uppercase text-[--accent] font-semibold" href={'/work'}>View All Work</Link>
        </div>

        <div className="w-full md:w-[48%] lg:w-full lg:row-start-1 lg:row-span-2 mb-8 lg:mb-0 transition-all duration-500 hover:scale-[1.03]">
            <Link href={`/work/react-to-do-list`}>
                <h3 className="bg-[--pale-primary] p-8 text-white text-2xl font-bold">react-to-do-list</h3>
                <img
                    alt="React To Do List"
                    className="w-full"
                    src="/images/todo-feature.jpg"
                    width="553"
                    height="354"
                />
            </Link>  
        </div>

        <div className="w-full md:w-[48%] lg:w-full lg:row-start-2 lg:row-span-2 mb-8 lg:mb-0 transition-all duration-500 hover:scale-[1.03]">
            <Link href={`/work/onehub-southend`}>
                <h3 className="bg-[--pale-primary] p-8 text-white text-2xl font-bold">OneHub Southend</h3>
                <img
                    alt="OneHub Southend"
                    className="w-full"
                    src="/images/onehub-feature.jpg"
                    width="553"
                    height="354"
                />       
            </Link>         
        </div>
        <div className="w-full md:w-[48%] lg:w-full lg:row-start-3 lg:row-span-2 mb-8 lg:mb-0 transition-all duration-500 hover:scale-[1.03]">
            <Link href={`/work/hilson-moran`}>
                <h3 className="bg-[--pale-primary] p-8 text-white text-2xl font-bold">Hilson Moran</h3>
                <img
                    alt="Hilson Moran Website"
                    className="w-full"
                    src="/images/hilson-feature.jpg"
                    width="553"
                    height="354"
                />       
            </Link>                
        </div>          

        <div className="w-full md:w-[48%] lg:w-full lg:row-start-4 lg:row-span-2 mb-8 lg:mb-0 transition-all duration-500 hover:scale-[1.03]">
            <Link href={`/work/investing-matters`}>
                <h3 className="bg-[--pale-primary] p-8 text-white text-2xl font-bold">Investing Matters</h3>
                <img
                    alt="Investing Matters Website"
                    className="w-full"
                    src="/images/im-feature.jpg"
                    width="553"
                    height="354"
                />       
            </Link>                  
        </div>
        
        <div className="w-full md:w-[48%] lg:w-full lg:row-end-6 lg:row-span-1 mb-8 lg:mb-0">
            <div className="bg-[--pale-primary] p-10">
            <p className="text-xl lg:text-2xl font-bold mb-5">Like what you see or just want to know more?</p>
            <Link className="group flex items-center text-[--accent] uppercase font-semibold " href={'/contact/'}>
                Send Me A Message
                <span className='ml-4 translate-y-[-2px] group-hover:translate-x-2 transition-transform'>
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
        
    </div>
  )
}
