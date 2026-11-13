import { getWorkItems } from '@/utils/getWorkItems';
import { notFound } from "next/navigation";
import SubpageHero from "@/components/SubpageHero";
import WorkItemMeta from "@/components/WorkItemMeta";

export async function generateStaticParams() {
    const workItems = await getWorkItems();
    return workItems.map((workItem) => ({
        slug: workItem.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const workItems = await getWorkItems();
    const item = workItems.find((workItem) => workItem.slug === slug);

    if (!item) {
        return {
            title: 'Not Found | Griff.Digital'
        };
    }

    return {
        title: `${item.title} | Griff.Digital`,
        description: `${item.description}`
    };
}

const WorkItem = async ({ params }) => {
    const { slug } = await params;
    const workItems = await getWorkItems();
    const item = workItems.find((workItem) => workItem.slug === slug);

    if (!item) {
        notFound();
    }

    return (
        <>
            <SubpageHero title={item.title} />
            <WorkItemMeta createdIn={item.createdIn} status={item.status} involvementItems={item.involvement} itemLink={item.link} />
            <section className="max-w-[1000px] mb-16" aria-label="About this project">
                <p className="text-xl leading-relaxed mb-6">{item.description}</p>
                {item.overview && <p className="leading-relaxed mb-8">{item.overview}</p>}
                {item.focus && (
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {item.focus.map(([heading, copy]) => (
                            <div key={heading}>
                                <h2 className="text-xl font-bold mb-3">{heading}</h2>
                                <p className="leading-relaxed">{copy}</p>
                            </div>
                        ))}
                    </div>
                )}
                {item.attribution && <p className="text-sm text-[--accent] mb-3">{item.attribution}</p>}
                {item.websiteNote && <p className="text-sm leading-relaxed">{item.websiteNote}</p>}
            </section>
            <div className={`flex flex-wrap justify-between ${item.slug}`}>
                {
                    item.images.map((image, index) => (
                        index === 0 ? null
                        :
                        <img
                            alt={item.title}
                            className={`
                                ${(index === 2 || index === 3) && item.category != 'Conceptual' ? 'w-full md:w-[49%]' : 'w-full'} mb-8
                            `}
                            height="auto"
                            key={index}
                            src={image}
                            width="100%"
                        />
                    ))
                }
            </div>
        </>
    );
};

export default WorkItem;
