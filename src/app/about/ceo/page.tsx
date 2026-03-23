'use client';

import { useLang } from '@/lib/LanguageContext';

export default function CEOPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight text-center mb-12 whitespace-pre-line">
                    {isEng ? '"With Steel-Grade Trust,\nWe Will Grow with Customers"' : '"강철 같은 신뢰로,\n고객과 함께 성장하겠습니다"'}
                </h2>
                
                <div className="space-y-8 text-base md:text-lg text-gray-600 leading-relaxed font-medium text-center bg-gray-50 p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
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
                    <p className="font-bold text-gray-900">
                        {isEng
                            ? 'We will continue to prioritize quality and trust and grow together with our customers.'
                            : '앞으로도 품질과 신뢰를 최우선으로 삼아 고객과 함께 성장하는 에이원특수강이 되겠습니다.'}
                    </p>
                </div>
                
                <div className="pt-8 flex flex-col items-center">
                    <div className="text-gray-500 font-bold text-lg mb-2">{isEng ? 'CEO of A1 Special Steel' : '㈜에이원특수강 대표이사'}</div>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-black text-gray-900 tracking-tighter">{isEng ? 'Na Han-su' : '나 한 수'}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
