import Link from "next/link"

const StickyLogo = () => {
  return (
    <div className="absolute lg:fixed left-0 top-0 z-20 lg:h-screen p-8 lg:border-r border-[#222427] bg-[--background]">
        <Link href={'/'}>
            <h1 className="text-4xl font-bold">I.G</h1>
        </Link>        
    </div>
  )
}

export default StickyLogo