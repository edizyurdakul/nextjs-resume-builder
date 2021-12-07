import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { useDataLayerValue } from "../context/resumeContext";

export default function Home() {
  const [{ userPersonalInfo, userWorkHistory }, dispatch] = useDataLayerValue();
  return (
    <Layout>
      <main>
        <Hero />
        <Features />
      </main>
    </Layout>
  );
}
