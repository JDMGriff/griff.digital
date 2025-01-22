import Link from "next/link"

const HeroMeta = () => {
  return (
    <div className='absolute left-6 lg:left-36 xl:left-48 bottom-0 pb-6 hidden sm:flex'>
        <div className='border-r border-[#3e4146] pr-4 mr-4 py-2'>
            <p className='text-sm leading-loose'>
                <span className='font-bold'>Email</span>
                <br />
                <Link className='border-b border-dashed border-yellow-400 pb-1' href='mailto:griffithsimg@gmail.com'>griffithsimg@gmail.com</Link>
            </p>
        </div>
        <div className='border-r border-[#3e4146] pr-4 mr-4 py-2'>
            <p className='text-sm leading-loose'>
                <span className='font-bold'>Phone</span>
                <br />
                07875 333 101
            </p>
        </div>
        <div className='py-2'>
            <p className='text-sm leading-loose'>
                <span className='font-bold'>Location</span>
                <br />
                Westcliff-on-Sea, Essex
            </p>
        </div>
    </div>
  )
}

export default HeroMeta