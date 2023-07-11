import AboutMe from "@/components/about-me";
import Image from "next/image";
import { aboutMe, skills, professionalData } from "../data/page-data";
import ProfessionalExperience from "@/components/professional-experience";

export default function Home() {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  );
}
