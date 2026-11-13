import About from "@/components/About";
import Hero from "@/components/Hero";
import LatestWork from "@/components/LatestWork";
import { getHomepageData } from "@/utils/getHomepageData";

export async function generateMetadata() {
    return {
        title: "Griff.Digital | Front-End Developer & WordPress Specialist",
        description: "Front-end and WordPress developer in Essex. Bespoke themes, PHP, ACF Blocks, Tailwind CSS and over 10 years of digital design and development experience.",
    };
}

const Home = async () => {
    const { hero, aboutSection } = await getHomepageData();

    return (
        <>
            <Hero
                heading={hero.heading}
                copy={hero.copy}
                linkText={hero.linkText}
                linkUrl={hero.linkUrl}
				email={hero.heroMeta.email}
				phone={hero.heroMeta.phone}
				location={hero.heroMeta.location}
            />
            <About
				heading={aboutSection.heading}
				copy={aboutSection.copy}
				cvUrl={aboutSection.cvUrl}
				skillset={aboutSection.skillset}
			/>
            <LatestWork />
        </>
    );
};

export default Home;
