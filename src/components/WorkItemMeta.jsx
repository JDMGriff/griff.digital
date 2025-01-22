const WorkItemMeta = ({ createdIn, status, involvementItems, itemLink }) => {
    return(
        <div className="mb-16">
            <ul className="list-none flex-wrap gap-4 flex flex-col lg:flex-row lg:items-center lg:gap-12">
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

            <div className="text-white w-full mt-12">
                <a className="inline-flex items-center" target="_blank" href={itemLink}>
                    <span className="hidden lg:inline-block rounded-full border border-white p-4 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.382" height="19.382" viewBox="0 0 19.382 19.382">
                            <g id="link" transform="translate(0.5 0.5)">
                                <path id="Path_1" data-name="Path 1" d="M17.265,1.118a3.827,3.827,0,0,0-5.407,0L8.967,4.009a3.827,3.827,0,0,0-.851,4.106,3.835,3.835,0,0,0-4.1.851L1.119,11.856a3.823,3.823,0,0,0,5.407,5.407l2.891-2.891a3.827,3.827,0,0,0,.851-4.106,3.835,3.835,0,0,0,4.1-.851l2.891-2.891A3.828,3.828,0,0,0,17.265,1.118Zm-8.3,12.8L6.076,16.813A3.186,3.186,0,0,1,1.57,12.307L4.461,9.416A3.2,3.2,0,0,1,8.73,9.2L5.992,11.94a.319.319,0,1,0,.451.451L9.18,9.653A3.19,3.19,0,0,1,8.967,13.922Zm7.848-7.848L13.923,8.965a3.2,3.2,0,0,1-4.269.214l2.738-2.738a.319.319,0,1,0-.451-.451L9.2,8.728a3.191,3.191,0,0,1,.214-4.269l2.891-2.891a3.186,3.186,0,0,1,4.506,4.506Z" transform="translate(-0.001 0.001)" fill="#fdcd18" stroke="#fdcd18" strokeWidth="1"/>
                            </g>
                        </svg>
                    </span>
                    {itemLink}
                </a>
            </div>            
        </div>
    )
}
export default WorkItemMeta;