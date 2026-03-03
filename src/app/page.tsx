import { Hero } from '@/components/ui/Hero';
import { StatStrip } from '@/components/ui/StatStrip';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CardList } from '@/components/ui/CardList';
import { CTASection } from '@/components/ui/CTASection';
import { companyStats, dummyNews } from '@/data/dummy';
import Link from 'next/link';
import { Wrench, ShieldCheck, Layers, Globe } from 'lucide-react';

export default function Home() {
  const coreProducts = [
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

  const keyStrengths = [
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

  const recentNews = dummyNews.slice(0, 3).map(news => ({
    ...news,
    href: (news as any).href || '/about/news'
  }));

  return (
    <div className="flex flex-col">
      {/* Main Hero */}
      <Hero
        title="국산 특수강 봉강 전문 유통기업"
        subtitle="세아베스틸 공식 대리점 에이원특수강 – 가공·유통·관리를 결합한 토털 솔루션으로 국내 제조업 현장의 신뢰를 쌓아가고 있습니다."
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
        align="center"
        size="lg"
      >
        <Link
          href="/products/special-steel"
          className="px-8 py-4 bg-blue-700 text-white font-bold rounded shadow-lg hover:bg-blue-800 transition-colors"
        >
          제품 보기
        </Link>
        <Link
          href="/about/intro"
          className="px-8 py-4 bg-white/10 text-white font-bold rounded backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors flex items-center"
        >
          회사 소개
        </Link>
      </Hero>

      {/* Company Stats */}
      <StatStrip stats={companyStats} theme="dark" />

      {/* Core Products Grid */}
      <FeatureGrid
        title="주요 취급 품목 및 서비스"
        subtitle="세아베스틸 특수강 봉강 전문 유통과 자체 절단 가공 서비스를 제공합니다."
        features={coreProducts}
        columns={4}
      />

      {/* Corporate Strengths - Light Section */}
      <div className="bg-gray-50 border-y border-gray-100">
        <FeatureGrid
          title="에이원특수강의 강점"
          features={keyStrengths}
          columns={4}
        />
      </div>

      {/* Latest News & Reports */}
      <CardList
        title="최신 뉴스"
        items={recentNews}
        viewAllHref="/about/news"
        viewAllText="뉴스 전체보기"
      />

      {/* Global CTA */}
      <CTASection
        title="제품 및 가공 문의"
        description="특수강 봉강 구매, 절단 가공, 열처리 등 모든 문의를 환영합니다. 에이원특수강과 함께 성장하세요."
        buttonText="문의하기"
        buttonHref="/contact"
        secondaryButtonText="카탈로그 보기"
        secondaryButtonHref="/catalog"
      />
    </div>
  );
}
