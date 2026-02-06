import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoRow from '@/components/LogoRow';
import Features from '@/components/Features';
import ProductPanel from '@/components/ProductPanel';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const steps = [
  {
    title: 'Connect app or submit URL',
    body: 'Share your app, endpoint, or pre-launch environment. Scope is clear before any work starts.'
  },
  {
    title: 'Scan + targeted pentest',
    body: 'Automated checks plus manual testing on auth, APIs, and core attack surfaces.'
  },
  {
    title: 'Fix with prioritized guidance',
    body: 'You get actionable issues ordered by risk, with direct fix notes your team can ship quickly.'
  }
];

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <LogoRow />
      <Features />
      <ProductPanel />

      <section id="how" className="section">
        <div className="container">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 className="section-title">Fast security loops for startup velocity.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className="surface p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="text-xs font-semibold tracking-[0.18em] text-[#6fdcc0]">STEP 0{i + 1}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="body-muted mt-3 text-sm">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

