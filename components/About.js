import { useRouter } from "next/router";
import WaveWords from "./WaveWords";

const About = ({ project }) => {
  const router = useRouter();

  return (
    <div className="about">
      <WaveWords text={project.about[router.locale]} />
      <style jsx>{`
        .about {
          width: 90%;
          justify-self: center;
        }
        @media (max-width: 700px) {
          .about {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
