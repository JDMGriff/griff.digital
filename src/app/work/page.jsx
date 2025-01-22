"use client";
import { useState, useEffect } from "react";
import SubpageHero from "@/components/SubpageHero";
import WorkFilter from "@/components/WorkFilter";
import WorkItems from "@/components/WorkItems";

const Work = () => {
    const [filter, setFilter] = useState("All");
    const [initialData, setInitialData] = useState([]);

    useEffect(() => {
        document.title = "Work | Griff.Digital";

        async function fetchData() {
            const response = await fetch('/data/portfolio.json');
            const data = await response.json();
            setInitialData(data);
        }
        fetchData();
    }, []);

    return (
        <>
            {/* Subpage Hero */}
            <SubpageHero title={"Latest Work"} />
            
            {/* Item Filter */}
            <div className='absolute w-full left-0 z-10'>
                <WorkFilter initialData={initialData} setFilter={setFilter} />
            </div>
            
            {/* List Items */}
            <WorkItems initialData={initialData} filter={filter} />
        </>
    );
};

export default Work;
