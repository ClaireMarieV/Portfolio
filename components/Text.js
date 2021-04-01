import { useRouter } from "next/router";

const Text = ({ project }) => {
  const router = useRouter();
  return (
    <div>
      <p>{project.text[router.locale]}</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default Text;
