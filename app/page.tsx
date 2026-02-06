import HeroDevice from '@/components/HeroDevice';
import InsightsPanel from '@/components/InsightsPanel';
import WorkflowPanel from '@/components/WorkflowPanel';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ParallaxBackdrop from '@/components/ParallaxBackdrop';
import ParallaxSection from '@/components/ParallaxSection';

export default function Home() {
  return (
    <main className="page-shell">
      <ParallaxBackdrop />
      <div className="relative z-10">
        <ParallaxSection intensity={34}>
          <HeroDevice />
        </ParallaxSection>
        <ParallaxSection intensity={24}>
          <InsightsPanel />
        </ParallaxSection>
        <ParallaxSection intensity={28}>
          <WorkflowPanel />
        </ParallaxSection>
        <ParallaxSection intensity={16}>
          <Pricing />
        </ParallaxSection>
        <ParallaxSection intensity={12}>
          <FAQ />
        </ParallaxSection>
      </div>
      <Footer />
    </main>
  );
}
