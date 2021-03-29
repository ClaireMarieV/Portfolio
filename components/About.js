import { useRouter } from "next/router";

const About = ({ project }) => {
  const router = useRouter();

  return (
    <div className="about">
      <p>{project.about[router.locale]}</p>
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
