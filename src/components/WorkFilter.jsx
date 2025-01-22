"use client"; // Marking this as a client-side component

import { useState, useEffect } from "react";

const filterLinks = [
    { attribute: "All", title: "All" },
    { attribute: "Design", title: "Design" },
    { attribute: "Development", title: "Development" },
    { attribute: "Personal", title: "Personal" },
];

const WorkFilter = ({ setFilter }) => {
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        // Pass the filter to the parent component
        setFilter(activeFilter);
    }, [activeFilter, setFilter]);

    return (
        <div className="bg-[--pale-primary] mb-8">
            <div className="flex px-6 py-10 gap-12 overflow-x-auto lg:overflow-x-none lg:px-0 lg:px-36 xl:px-48 hide-scrollbar">
                {filterLinks.map((link, index) => (
                    <button
                        key={index}
                        className={`hover:text-[--accent] transition-all ${activeFilter === link.attribute ? 'text-[--accent]' : ''}`}
                        onClick={() => setActiveFilter(link.attribute)}
                    >
                        {link.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WorkFilter;
