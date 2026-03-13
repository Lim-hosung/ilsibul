'use client';

import { useLang } from '@/lib/LanguageContext';

export default function CEOPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                        alt="CEO"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-950 to-transparent">
                        <p className="text-white font-black text-2xl mb-1">Kim Cheol-Su</p>
                        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">CEO of A1 Special Steel</p>
                    </div>
                </div>
                <div className="space-y-8 pt-4">
                    <h2 className="text-4xl font-balck text-gray-900 leading-tight mb-8">
                        {isEng ? 'A Reliable Partner \nLeading the Steel Industry' : '철강 산업의 미래를 여는 \n신뢰할 수 있는 파트너'}
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                        <p>
                            {isEng
                                ? 'Since our establishment, A1 Special Steel has been dedicated to supplying high-quality industrial materials that form the backbone of core national industries.'
                                : '안녕하십니까. 에이원특수강을 방문해 주셔서 감사합니다. 당사는 창립 이래 대한민국 핵심 산업의 근간이 되는 고품질 특수강 소재를 공급하며 성장을 거듭해 왔습니다.'}
                        </p>
                        <p>
                            {isEng
                                ? 'We are not just a distributor; we are a strategic partner that works with customers from the product development stage, providing optimized solutions through continuous innovation and investment in technology.'
                                : '에이원특수강은 단순한 유통을 넘어, 고객사의 제품 개발 단계부터 공정 최적화까지 함께 고민하는 전략적 파트너입니다. 30년 이상의 풍부한 노하우와 철저한 품질 관리를 바탕으로 고객 여러분의 경쟁력을 높여 드립니다.'}
                        </p>
                        <p>
                            {isEng
                                ? 'We promise to continue our growth as a global top-tier solution provider, prioritizing customer success above all else.'
                                : '앞으로도 저희 에이원특수강 임직원 모두는 고객의 성공을 최우선으로 생각하며, 글로벌 초일류 철강 솔루션 프로바이더로 도약할 것을 약속드립니다.'}
                        </p>
                    </div>
                    <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-gray-900 font-black italic text-xl">A1 Special Steel</div>
                        <div className="text-right">
                            <span className="block text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Representative Director</span>
                            <span className="text-2xl font-black text-gray-900">Kim Cheol-Su</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
