import Link from "next/link";
import ExperienceSlider from "./ExperienceSlider";
import Skillset from "./SkillSet";
import { RiFileDownloadLine } from "react-icons/ri";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const About = () => {
    return(
        <div id="About" className="pt-20 pb-40 lg:pt-28">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                <div className="mb-6 lg:mb-0 xl:w-[35%]">
                    <h2 className="text-4xl lg:leading-normal lg:text-5xl xxl:text-6xl xxl:leading-tight uppercase font-bold">About me, experience, & skillset</h2>
                </div>
                <div className="xl:w-[60%]">
                    <p className="mb-3">I am a versatile and hardworking person currently working within the graphic & web design industry. I am looking for new opportunities to allow development and growth as well as using my existing skills.</p>
                    <p className="mb-3">I consider myself to be enthusiastic, self-motivated, reliable and responsible and am able to work both in a team environment as well as using my own initiative.</p>
                    <p className="mb-3">I enjoy new challenges, work well under pressure and can adhere to strict deadlines.</p>
                    <Link className="group flex items-center text-[--accent] uppercase inline-block font-bold mt-4 text-sm" href={`${baseUrl}/files/ian-cv.pdf`}>
                        Download My CV
                        <RiFileDownloadLine className='ml-4 text-2xl group-hover:translate-y-[-4px] transition-transform' />
                    </Link>
                </div>
            </div>

            {/* Experience Slider */}
            <ExperienceSlider />

            {/* Skillset Section */}
            <Skillset />
      
        </div>

    )
}
  
export default About