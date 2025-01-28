import { IoIosLink } from "react-icons/io";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const WorkItemMeta = ({ createdIn, status, involvementItems, itemLink }) => {
    return(
        <div className="mb-16 relative">
            <div className='hidden absolute top-0 left-0 md:block'>
                <Link className="flex items-center group text-[--accent]" href='/work/'>
                    <HiOutlineArrowNarrowLeft className='mr-2 text-2xl text-[--accent] group-hover:translate-x-[-4px] transition-transform' />
                    Back
                </Link>
            </div>            
            <ul className="list-none flex-wrap gap-4 flex flex-col pt-14 lg:flex-row lg:items-center lg:gap-12">
                <li className="font-semibold text-sm flex flex-wrap flex-col lg:flex-row gap-4 lg:items-center lg:text-base">Created in:
                    <div className="flex gap-4 lg:ml-2">
                    {createdIn.map(({ software, colors }) => {
                        const background = colors?.background || "#000000";
                        const text = colors?.text || "#FFFFFF"; 

                        return (
                            <span
                                key={software}
                                style={{ backgroundColor: background, color: text }}
                                className="inline-block px-4 py-1 rounded-full"
                            >
                                {software}
                            </span>
                        );
                    })}
                    </div>
                </li>

                <li className="font-semibold text-sm flex lg:items-center flex-col my-4 lg:flex-row lg:text-base lg:my-0">Status:
                    <div className="flex items-center mt-4 lg:ml-2 lg:mt-0">
                        <span className="w-[16px] h-[16px] bg-[#20B52F] inline-block rounded-full lg:ml-2 mr-1"></span> {status}
                    </div>
                </li>

                <li className="font-semibold text-sm flex flex-wrap gap-4 flex-col lg:flex-row lg:items-center lg:text-base">Involvement:
                    <div className="flex flex-wrap gap-4 lg:ml-2">
                        {involvementItems.map((item) => (
                            <span key={item} className="bg-[--accent] text-[--background] inline-block px-4 py-1 rounded-full">{item}</span>
                        ))}
                    </div>
                </li>
            </ul>
            
            {itemLink.length != 0 ?
            <div className="text-white w-full mt-12">
                <a className="group inline-flex items-center" target="_blank" href={itemLink}>
                    <span className="hidden lg:inline-block rounded-full bg-[--pale-primary] p-4 mr-4 group-hover:scale-[1.06] transition-all duration-300">
                        <IoIosLink className="text-[--accent] text-2xl" />
                    </span>
                    <span className="border-b border-dashed border-[--accent] pb-1">
                        {itemLink}
                    </span>
                </a>
            </div>
            :
            null}           
        </div>
    )
}
export default WorkItemMeta;