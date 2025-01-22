import { getWorkItems } from '@/utils/getWorkItems';
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
        title: `${item.title} | Griff.Digital`
    };
}

const WorkItem = async ({ params }) => {
    const { slug } = await params;
    const workItems = await getWorkItems();
    const item = workItems.find((workItem) => workItem.slug === slug);

    if (!item) {
        return <div>Work item not found</div>;
    }

    return (
        <>
            <SubpageHero title={item.title} />
            <WorkItemMeta createdIn={item.createdIn} status={item.status} involvementItems={item.involvement} itemLink={item.link} />
        </>
    );
};

export default WorkItem;
