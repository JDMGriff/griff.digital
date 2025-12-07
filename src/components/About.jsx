import Link from "next/link";
import ExperienceSlider from "./ExperienceSlider";
import Skillset from "./SkillSet";
import { RiFileDownloadLine } from "react-icons/ri";
import WPRichText from "./WPRichText";

const About = ({ heading, copy, cvUrl, skillset }) => {
    return(
        <div id="About" className="pt-20 pb-40 lg:pt-28">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                <div className="mb-6 lg:mb-0 xl:w-[35%]">
                    <h2 className="text-4xl lg:leading-normal lg:text-5xl xxl:text-6xl xxl:leading-tight uppercase font-bold">
                        {heading}
                    </h2>
                </div>
                <div className="xl:w-[60%]">
                    <WPRichText html={copy} />
                    <Link className="group flex items-center text-[--accent] uppercase font-bold mt-4 text-sm" href={cvUrl}>
                        Download My CV
                        <RiFileDownloadLine className='ml-4 text-2xl group-hover:translate-y-[-4px] transition-transform' />
                    </Link>
                </div>
            </div>

            {/* Experience Slider */}
            <ExperienceSlider />

            {/* Skillset Section */}
            <Skillset skillset={skillset} />
      
        </div>

    )
}
  
export default About