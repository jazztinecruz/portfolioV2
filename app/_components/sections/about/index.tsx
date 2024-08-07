import { SectionTitle } from "../../titles";
import Character from "./character";
import EducationalBackground from "./educational";

const About = () => {
  return (
    <section id="about" className="flex flex-col space-y-8 items-center">
      <SectionTitle>
        Get to Know <span className="bg-text">ME</span>
      </SectionTitle>
      <p className="max-w-4xl text-center">
        A dedicated and a fast-learner Frontend Software Engineer and a UI
        Designer. Passionately developing website user interfaces and website
        designing with the use of latest technologies. Always eager to
        contribute my skills to a dynamic team and driven by a commitment to
        growth and continuous improvement.
      </p>

      <div className="space-y-20">
        <Character />
        <EducationalBackground />
      </div>
    </section>
  );
};

export default About;
