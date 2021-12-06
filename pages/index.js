import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Features />
      </main>
    </Layout>
  );
}
