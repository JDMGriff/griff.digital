import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[--pale-primary] py-20">
        <div className="text-center">
            <Link className="inline-block" href={'/'}>
                <h1 className="text-4xl font-bold">I.G</h1>
            </Link> 
        </div>
    </div>
  )
}

export default Footer