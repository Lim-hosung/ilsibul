import { Hero } from '@/components/ui/Hero';
import { StatStrip } from '@/components/ui/StatStrip';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CardList } from '@/components/ui/CardList';
import { CTASection } from '@/components/ui/CTASection';
import { companyStats, dummyNews } from '@/data/dummy';
import Link from 'next/link';
import { ArrowRight, Factory, TestTube, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  const coreProducts = [
    {
      title: "Special Steel",
      description: "Premium alloy steel engineered for extreme durability and performance in harsh environments.",
      imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&auto=format&fit=crop",
      href: "/products/special-steel"
    },
    {
      title: "Open Die Forging",
      description: "Large-scale forged components with exceptional structural integrity for heavy machinery.",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop",
      href: "/products/open-die-forging"
    },
    {
      title: "Nuclear Materials",
      description: "Certified, ultra-reliable materials developed specifically for the nuclear power sector.",
      imageUrl: "https://images.unsplash.com/photo-1478059425650-ca13d6d422f4?w=800&auto=format&fit=crop",
      href: "/products/nuclear"
    },
    {
      title: "Die Forging",
      description: "Precision-forged parts delivering high strength-to-weight ratios for automotive and aerospace.",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop",
      href: "/products/die-forging"
    }
  ];

  const keyStrengths = [
    {
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities equipped with latest electric arc furnaces and forging presses.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Strict Quality Control",
      description: "Rigorous testing protocols ensuring compliance with global industrial standards.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Continuous Innovation",
      description: "Dedicated R&D center pioneering new alloy compositions and processing techniques.",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      title: "Sustainable Processing",
      description: "Commitment to reducing carbon footprint through energy-efficient operations.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const recentNews = dummyNews.slice(0, 3).map(news => ({
    ...news,
    href: `/about/news` // For dummy routing, pointing back to list
  }));

  return (
    <div className="flex flex-col">
      {/* Main Hero */}
      <Hero
        title="Forging the Future of Advanced Materials"
        subtitle="We deliver uncompromising quality in special steel and forging solutions to empower global industries, from energy to automotive."
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
        align="center"
        size="lg"
      >
        <Link
          href="/products/special-steel"
          className="px-8 py-4 bg-blue-700 text-white font-bold rounded shadow-lg hover:bg-blue-800 transition-colors"
        >
          Explore Products
        </Link>
        <Link
          href="/about/intro"
          className="px-8 py-4 bg-white/10 text-white font-bold rounded backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors flex items-center"
        >
          Corporate Vision
        </Link>
      </Hero>

      {/* Global Presence Stats */}
      <StatStrip stats={companyStats} theme="dark" />

      {/* Core Products Grid */}
      <FeatureGrid
        title="Our Core Offerings"
        subtitle="Engineered for excellence. Discover our comprehensive portfolio of high-performance materials."
        features={coreProducts}
        columns={4}
      />

      {/* Corporate Strengths - Light Section */}
      <div className="bg-gray-50 border-y border-gray-100">
        <FeatureGrid
          title="Why A1 Special Steel"
          features={keyStrengths}
          columns={4}
        />
      </div>

      {/* Latest News & Reports */}
      <CardList
        title="Latest Updates"
        items={recentNews}
        viewAllHref="/about/news"
        viewAllText="View All News"
      />

      {/* Global CTA */}
      <CTASection
        title="Ready to Build Together?"
        description="Partner with us to access world-class materials and engineering expertise for your next critical project."
        buttonText="Contact Sales"
        buttonHref="/contact"
        secondaryButtonText="Download Catalogs"
        secondaryButtonHref="/catalog"
      />
    </div>
  );
}
