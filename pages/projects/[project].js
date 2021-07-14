import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { useRouter } from "next/router";
import Title from "../../components/Title";
import Render from "../../components/Render";
import About from "../../components/About";
import Goals from "../../components/Goals";
import Typography from "../../components/Typography";
import Colors from "../../components/Colors";
import Links from "../../components/Links";
import Loading from "../../components/Loading";

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
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="project">
        <Title project={project} />
        <Render project={project} />
        <About project={project} />
        <Goals project={project} />
        <Colors project={project} />
        <Links project={project} />
        <Link href="/projects">
          <a className="all-projects">
            <span>All projects</span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .project {
          display: grid;
          grid-template-rows: auto;
          justify-items: center;
          row-gap: 10rem;
          margin: 5rem auto 5rem auto;
          padding: 2rem;
          max-width: 90%;
        }
        .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .all-projects > span {
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .project {
            display: block;
            padding: 2rem;
          }
          .two-columns {
            grid-template-columns: auto;
          }
        }
      `}</style>
    </Layout>
  );
};

export default ProjectPage;
