import Link from "next/link"

const HeroMeta = ({ email, phone, location }) => {
  return (
    <div className='absolute left-6 lg:left-36 xl:left-48 bottom-0 pb-6 hidden sm:flex'>
        <div className='border-r border-[#3e4146] pr-4 mr-4 py-2'>
            <p className='text-sm leading-loose'>
                <span className='font-bold'>Email</span>
                <br />
                <Link className='border-b border-dashed border-[--accent] pb-1' href={`mailto:${email}`}>{email}</Link>
            </p>
        </div>
        <div className='border-r border-[#3e4146] pr-4 mr-4 py-2'>
            <p className='text-sm leading-loose'>
                <span className='font-bold'>Phone</span>
                <br />
                {phone}
            </p>
        </div>
        <div className='py-2'>
            <p className='text-sm leading-loose'>
                <span className='font-bold'>Location</span>
                <br />
                {location}
            </p>
        </div>
    </div>
  )
}

export default HeroMeta