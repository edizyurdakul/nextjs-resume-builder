import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { useDataLayerValue } from "../context/resumeContext";

export default function Home() {
  const [{ userName, userEmail, userJobTitle, userContactNumber }, dispatch] = useDataLayerValue();
  console.log(userName);

  return (
    <Layout>
      <main>
        <Hero />
        <Features />
      </main>
    </Layout>
  );
}
