import HeroDevice from '@/components/HeroDevice';
import InsightsPanel from '@/components/InsightsPanel';
import WorkflowPanel from '@/components/WorkflowPanel';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="page-shell">
      <HeroDevice />
      <InsightsPanel />
      <WorkflowPanel />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
