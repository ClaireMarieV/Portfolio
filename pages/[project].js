import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useRouter } from "next/router";
import Title from "../components/Title";
import Concept from "../components/Concept";
import Render from "../components/Render";
import About from "../components/About";
import Typography from "../components/Typography";
import Colors from "../components/Colors";
import Links from "../components/Links";

const ProjectPage = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (router.query.project) {
      fetch(`/api/projects/${router.query.project}`)
        .then((response) => response.json())
        .then(setProject);
    }
  }, [router]);

  if (!project) {
    return <Layout>Loading</Layout>;
  }

  return (
    <Layout>
      <div className="project">
        <Title project={project} />
        <div className="two-columns">
          <Concept project={project} />
          <Render project={project} />
        </div>
        <About project={project} />
        <Typography project={project} />
        <Colors project={project} />
        <Links project={project} />
      </div>
      <style jsx>{`
        .project {
          display: grid;
          grid-template-rows: auto;
          grid-gap: 4rem;
          margin: 5rem 0 5rem 0;
        }
        .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </Layout>
  );
};

export default ProjectPage;
