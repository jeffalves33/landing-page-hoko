import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import SocialProof from '@/components/SocialProof';
import Comparison from '@/components/Comparison';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

// Lazy load components below the fold for better performance
const LazyFeatures = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

const LazyPricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

const LazySocialProof = dynamic(() => import('@/components/SocialProof'), {
  loading: () => <div className="h-64 animate-pulse bg-muted" />,
});

const LazyComparison = dynamic(() => import('@/components/Comparison'), {
  loading: () => <div className="h-96 animate-pulse bg-muted" />,
});

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LazyFeatures />
        <FinalCTA />
        <LazyPricing />
        <LazyComparison />
      </main>
      <Footer />
    </div>
  );
}