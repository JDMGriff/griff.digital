import About from "@/components/About";
import Hero from "@/components/Hero";
import LatestWork from "@/components/LatestWork";

export async function generateMetadata({ params }) {
	return {
		title: "Griff.Digital | Front End Developer & Digital Designer",
		description: `Front end developer and digital designer based in the UK. Specialising in building websites and web applications using modern technologies.`
	};
}

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<LatestWork />
		</>
	);
}
export default Home