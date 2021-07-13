import { useRouter } from "next/router";

const About = ({ project }) => {
  const router = useRouter();

  return (
    <div className="about">
      <p>{project.about[router.locale]} </p>
      <style jsx>{`
        .about {
          display: flex;
          justify-self: center;
          justify-content: center;
        }
        .about p {
          font-size: 1.8rem;
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
