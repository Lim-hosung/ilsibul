'use client';

import { HeroSlider } from '@/components/ui/HeroSlider';
import { StatStrip } from '@/components/ui/StatStrip';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CardList } from '@/components/ui/CardList';
import { CTASection } from '@/components/ui/CTASection';
import { companyStats, dummyNews } from '@/data/dummy';
import Link from 'next/link';
import { Wrench, ShieldCheck, Layers, Globe } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const heroSlides = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop',
    titleKOR: '국산 특수강 봉강 전문\n유통기업',
    titleENG: 'Specialist in\nSpecial Steel Bar\nDistribution',
    subtitleKOR: '세아베스틸 공식 대리점 에이원특수강 – 가공·유통·관리를 결합한 토탈 솔루션',
    subtitleENG: 'A1 Special Steel – Official SeAH Besteel Dealer, delivering total solutions for Korean industry.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=2670&auto=format&fit=crop',
    titleKOR: '합금강·탄소강·고합금강\n국내 최고 품질',
    titleENG: 'Alloy, Carbon &\nHigh-Alloy Steel Bars\nTop Quality',
    subtitleKOR: '세아베스틸 봉강을 안정적으로 공급하며 방산·산업기계·유압 분야를 지원합니다.',
    subtitleENG: 'Reliable supply of SeAH Besteel bars for defense, industrial machinery, and hydraulic applications.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop',
    titleKOR: '자체 절단 설비로\n맞춤형 가공 서비스',
    titleENG: 'In-House Cutting\n& Processing\nServices',
    subtitleKOR: '서큘레이터 3대, 밴드쏘 6대를 통한 신속하고 정밀한 절단 가공 서비스를 제공합니다.',
    subtitleENG: '3 circulators and 6 band saws ready for fast, precise custom cutting for every client.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop',
    titleKOR: '국내를 넘어\n수출 시장으로',
    titleENG: 'Expanding\nBeyond Korea\nto Global Markets',
    subtitleKOR: '국내 특수강 시장을 선도하며 제3국 수출 시장 개척에도 박차를 가하고 있습니다.',
    subtitleENG: 'Leading Korea\'s special steel market and actively pursuing export opportunities worldwide.',
  },
];

export default function Home() {
  const { lang } = useLang();

  const coreProductsKOR = [
    {
      title: "합금강 / 탄소강 봉강",
      description: "유압실린더, 중장비 등 산업 현장에 최적화된 고품질 합금강·탄소강 봉강을 공급합니다.",
      imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&auto=format&fit=crop",
      href: "/products/special-steel"
    },
    {
      title: "고합금강 봉강",
      description: "방산·항공 등 고강도 요구 환경에 대응하는 고합금강 제품을 취급합니다.",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop",
      href: "/products/special-steel"
    },
    {
      title: "절단 가공 서비스",
      description: "서큘레이터 3대, 밴드쏘 6대를 보유하여 고객 맞춤형 절단 가공을 제공합니다.",
      imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
      href: "/contact"
    },
    {
      title: "열처리 · 협력 가공망",
      description: "열처리·홀가공 등 다양한 협력업체와의 네트워크로 토털 솔루션을 제공합니다.",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop",
      href: "/contact"
    }
  ];

  const coreProductsENG = [
    {
      title: "Alloy & Carbon Steel Bar",
      description: "High-quality alloy and carbon steel bars optimized for hydraulic cylinders, heavy machinery, and industrial applications.",
      imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&auto=format&fit=crop",
      href: "/products/special-steel"
    },
    {
      title: "High-Alloy Steel Bar",
      description: "High-alloy steel products designed for demanding environments including defense and aerospace industries.",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop",
      href: "/products/special-steel"
    },
    {
      title: "Cutting & Processing",
      description: "Precision cutting service with 3 circulators and 6 band saws for customized processing needs.",
      imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
      href: "/contact"
    },
    {
      title: "Heat Treatment Network",
      description: "Total solutions through our cooperative network covering heat treatment, hole machining, and more.",
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop",
      href: "/contact"
    }
  ];

  const keyStrengthsKOR = [
    {
      title: "세아베스틸 공식 대리점",
      description: "국내 최고 수준의 세아베스틸 특수강 봉강을 공식 대리점으로서 안정적으로 공급합니다.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "자체 절단 설비",
      description: "서큘레이터 3대, 밴드쏘 6대를 통해 신속하고 정밀한 절단 가공 서비스를 제공합니다.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "토털 솔루션",
      description: "가공·유통·관리를 결합한 원스톱 특수강 봉강 서비스로 고객 만족도를 극대화합니다.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "수출 시장 진출",
      description: "국내 시장을 넘어 제3국으로의 특수강 봉강 수출 시장 개척에도 속도를 높이고 있습니다.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const keyStrengthsENG = [
    {
      title: "SeAH Besteel Official Dealer",
      description: "We are an official dealer of SeAH Besteel, supplying top-quality special steel bars with guaranteed reliability.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "In-house Cutting Equipment",
      description: "With 3 circulators and 6 band saws, we deliver fast and precise cutting services tailored to each client.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Total Solution",
      description: "We combine distribution, processing, and management into a one-stop special steel bar service.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Export Market Expansion",
      description: "Beyond domestic markets, we are actively pursuing export opportunities for special steel bars to third-party countries.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const coreProducts = lang === 'ENG' ? coreProductsENG : coreProductsKOR;
  const keyStrengths = lang === 'ENG' ? keyStrengthsENG : keyStrengthsKOR;

  const recentNews = dummyNews.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Main Hero Slider */}
      <HeroSlider slides={heroSlides} lang={lang}>
        <Link
          href="/products/special-steel"
          className="px-8 py-4 bg-blue-700 text-white font-bold rounded shadow-lg hover:bg-blue-800 transition-colors"
        >
          {lang === 'ENG' ? 'View Products' : '제품 보기'}
        </Link>
        <Link
          href="/about/intro"
          className="px-8 py-4 bg-white/10 text-white font-bold rounded backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
        >
          {lang === 'ENG' ? 'About Us' : '회사 소개'}
        </Link>
      </HeroSlider>

      {/* Company Stats */}
      <StatStrip stats={companyStats} theme="dark" />

      {/* Core Products Grid */}
      <FeatureGrid
        title={lang === 'ENG' ? 'Products & Services' : '주요 취급 품목 및 서비스'}
        subtitle={lang === 'ENG'
          ? 'We distribute SeAH Besteel special steel bars and provide in-house cutting and processing services.'
          : '세아베스틸 특수강 봉강 전문 유통과 자체 절단 가공 서비스를 제공합니다.'
        }
        features={coreProducts}
        columns={4}
      />

      {/* Corporate Strengths */}
      <div className="bg-gray-50 border-y border-gray-100">
        <FeatureGrid
          title={lang === 'ENG' ? 'Why A1 Special Steel' : '에이원특수강의 강점'}
          features={keyStrengths}
          columns={4}
        />
      </div>

      {/* Latest News */}
      <CardList
        title={lang === 'ENG' ? 'Latest News' : '최신 뉴스'}
        items={recentNews}
        viewAllHref="/about/news"
        viewAllText={lang === 'ENG' ? 'View All News' : '뉴스 전체보기'}
      />

      {/* CTA */}
      <CTASection
        title={lang === 'ENG' ? 'Get in Touch' : '제품 및 가공 문의'}
        description={lang === 'ENG'
          ? 'Contact us for special steel bar purchasing, cutting, heat treatment, and any other inquiries. We are ready to help.'
          : '특수강 봉강 구매, 절단 가공, 열처리 등 모든 문의를 환영합니다. 에이원특수강과 함께 성장하세요.'
        }
        buttonText={lang === 'ENG' ? 'Contact Us' : '문의하기'}
        buttonHref="/contact"
        secondaryButtonText={lang === 'ENG' ? 'View Catalog' : '카탈로그 보기'}
        secondaryButtonHref="/catalog"
      />
    </div>
  );
}
