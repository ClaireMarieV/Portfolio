import { useRouter } from "next/router";

const Title = ({ project }) => {
  const router = useRouter();

  return (
    <div className="article-title">
      <h1>{project.title}</h1>
      <h3>{project.category[router.locale]}</h3>
      <style jsx>{`
        .article-title {
          justify-self: center;
          text-align: center;
        }
        h1,
        h3 {
          text-transform: uppercase;
        }
        h3 {
          color: #d4d7e8;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Title;
