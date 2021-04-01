import { useRouter } from "next/router";
import WaveWords from "./WaveWords";

const Text = ({ project }) => {
  const router = useRouter();
  return (
    <div>
      <WaveWords text={project.text[router.locale]} />
      <style jsx>{``}</style>
    </div>
  );
};

export default Text;
