import About from "@/components/About";
import Hero from "@/components/Hero";
import LatestWork from "@/components/LatestWork";
import { getHomepageData } from "@/utils/getHomepageData";

export async function generateMetadata() {
    return {
        title: "Griff.Digital | Front End Developer & Digital Designer",
        description: "Front end developer and digital designer based in the UK. Specialising in building websites and web applications using modern technologies.",
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
