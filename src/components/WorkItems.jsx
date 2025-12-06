"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const WorkItems = ({ initialData, filter }) => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [animationState, setAnimationState] = useState("fade-in");

    useEffect(() => {
        const filteredData = filter === "All"
            ? initialData
            : initialData.filter(item => item.category.includes(filter));

        setAnimationState("fade-out");
        setTimeout(() => {
            setVisibleItems(filteredData);
            setAnimationState("fade-in"); // Reset animation after data change
        }, 250); // Duration of the fade-out animation (adjust as needed)
    }, [filter, initialData]); // Re-run on filter or initialData change

    return (
        <div className="flex justify-between flex-wrap mt-48 lg:w-full">
            {visibleItems.map((item, index) => (
                <div
                    key={index}
                    className={`w-full md:w-[48%] lg:row-start-1 lg:row-span-2 mb-14 ${animationState === "fade-out" ? "opacity-0" : "opacity-100"} transition-all duration-500 hover:scale-[1.03]`}
                >
                    <Link href={`/work/${item.slug}/`}>
                        <h3 className="bg-[--pale-primary] p-8 text-white text-2xl font-bold">{item.title}</h3>
                        <img
                            className="w-full"
                            src={item.images[0]}
                            width="553"
                            height="354"
                            alt={item.title}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default WorkItems;
