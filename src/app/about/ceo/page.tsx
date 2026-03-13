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
                        {isEng ? '"With Steel-Grade Trust,\nWe Will Grow with Customers"' : '"강철 같은 신뢰로, 고객과 함께 성장하겠습니다"'}
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                        <p>
                            {isEng
                                ? 'Thank you very much for visiting the A1 Special Steel website.'
                                : '에이원특수강 홈페이지를 방문해 주신 여러분께 진심으로 감사드립니다.'}
                        </p>
                        <p>
                            {isEng
                                ? 'Since its establishment in 2008, A1 Special Steel has steadily grown in the domestic special steel bar distribution market as an official dealer of SeAH Besteel. As the founder, I have always thought first about what customers truly need based on the sales experience and technical know-how I have accumulated over 30 years at SeAH Besteel.'
                                : '저희 에이원특수강은 2008년 창립 이후 세아베스틸의 공식 대리점으로서 국내 특수강 봉강 유통 시장에서 꾸준히 성장해 왔습니다. 창립자로서 저는 세아베스틸에서 30년간 쌓아온 영업 경험과 기술 노하우를 바탕으로, 고객이 진정으로 필요로 하는 것이 무엇인지를 항상 먼저 생각해 왔습니다.'}
                        </p>
                        <p>
                            {isEng
                                ? 'Now, A1 Special Steel is taking a leap forward as a total service company that covers everything from simple steel distribution to cutting, processing, and solutions. As a company that supplies core materials for core national industries such as heavy equipment, automobiles, defense, shipbuilding, and energy, we recognize that responsibility as heavy.'
                                : '이제 에이원특수강은 단순한 철강 유통을 넘어 절단·가공·솔루션까지 아우르는 토털 서비스 기업으로 도약하고 있습니다. 중장비, 자동차, 방산, 조선, 에너지 등 국가 기간 산업의 핵심 소재를 공급하는 기업으로서 그 책임을 무겁게 인식하고 있습니다.'}
                        </p>
                        <p>
                            {isEng
                                ? 'We will continue to prioritize quality and trust and grow together with our customers.'
                                : '앞으로도 품질과 신뢰를 최우선으로 삼아 고객과 함께 성장하는 에이원특수강이 되겠습니다.'}
                        </p>
                    </div>
                    <div className="pt-8 border-t border-gray-100">
                        <div className="text-gray-900 font-black italic text-xl mb-4">㈜에이원특수강 대표이사</div>
                        <div className="flex items-end gap-4">
                            <span className="text-4xl font-black text-gray-900 tracking-tighter">나한수</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
