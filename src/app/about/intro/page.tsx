import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { ShieldCheck, Lightbulb, Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '회사 소개 및 비전 | 에이원특수강',
    description: '에이원특수강은 세아베스틸 공식 대리점으로서 2008년 설립, 경기 시흥시에서 특수강 봉강을 전문으로 유통합니다.',
};

export default function IntroPage() {
    const values = [
        {
            title: '신뢰',
            description: '세아베스틸 공식 대리점으로서 품질·납기·가격 모든 면에서 고객과 신뢰를 쌓아갑니다.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: '혁신',
            description: '단순 재고 유통을 넘어 가공·유통·관리를 결합한 토털 솔루션 기업으로 끊임없이 진화합니다.',
            icon: <Lightbulb className="w-6 h-6" />
        },
        {
            title: '연대',
            description: '고객, 협력사, 업계와 함께 성장하는 상생의 파트너십을 지향합니다.',
            icon: <Users className="w-6 h-6" />
        }
    ];

    return (
        <>
            <Hero
                title="에이원특수강 소개"
                subtitle="세아베스틸 공식 대리점 – 국산 특수강 봉강 전문 유통기업"
                imageSrc="https://images.unsplash.com/photo-1574689211272-bc1550ce71cc?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-4">Our Vision</h2>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">
                    &quot;가공·유통·관리를 결합한 특수강 봉강 토털 솔루션 기업으로 성장한다.&quot;
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    에이원특수강은 2008년 설립되어, 2011년 경기 시흥시에 현 공장을 준공하며 본격적인 영업을 시작했습니다.
                    창립자 나한수 대표이사는 세아베스틸에서 30년간 영업을 담당한 경험을 바탕으로 회사를 설립했으며,
                    현재 세아베스틸의 공식 대리점으로서 국산 특수강 봉강을 국내 제조업 현장에 공급하고 있습니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                    나호준 상무(2세 경영)의 지휘 아래 단순 유통을 넘어, 서큘레이터 3대·밴드쏘 6대를 활용한 자체 절단 가공과
                    열처리·홀가공 협력망을 통해 고객 맞춤형 원스톱 서비스를 제공합니다.
                    또한 국내를 넘어 제3국 수출 시장 진출에도 박차를 가하고 있습니다.
                </p>

                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 relative">
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop"
                        alt="에이원특수강 시흥 공장"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="bg-gray-50 border-y border-gray-100">
                <FeatureGrid
                    title="핵심 가치"
                    features={values}
                    columns={3}
                />
            </div>
        </>
    );
}
