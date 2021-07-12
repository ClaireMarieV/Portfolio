import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { useRouter } from "next/router";
import About from "../../components/About";
import Colors from "../../components/Colors";
import Title from "../../components/Title";
import Content from "../../components/Content";
import ContentGrid from "../../components/ContentGrid";
import Pattern from "../../components/Pattern";
import SocialCard from "../../components/SocialCard";
import Sketches from "../../components/Sketches";
import Links from "../../components/Links";
import Text from "../../components/Text";
import LogoGrid from "../../components/LogoGrid";
import Loading from "../../components/Loading";

const LogoPage = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (router.query.logos) {
      fetch(`/api/logos/${router.query.logos}`)
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
        <About project={project} />
        <Sketches project={project} />
        <Text project={project} />
        <Colors project={project} />
        <LogoGrid project={project} />
        <Pattern project={project} />
        <SocialCard project={project} />
      </div>
      <style jsx>{`
        .project {
          display: grid;
          grid-template-rows: auto;
          grid-gap: 3rem;
          margin: 5rem 0 5rem 0;
          padding: 2rem;
        }
        .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
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

export default LogoPage;
