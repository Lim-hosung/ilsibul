'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';

export default function LargeForgingPage() {
    const { lang } = useLang();
    return (
        <>
            <Hero
                title={lang === 'ENG' ? 'Large Forgings for\nHeavy Industry' : '중후장대 산업의 핵심\n대형 단조품 공급'}
                subtitle={lang === 'ENG'
                    ? 'Forged products for energy, marine & defense structures'
                    : '에너지, 조선, 방산 등 대형 구조물용 단조 소재'}
                imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                    {lang === 'ENG' ? 'Large Forging' : '대형단조'}
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-8">
                    {lang === 'ENG' ? 'Forged products for energy, marine & defense structures' : '에너지, 조선, 방산 등 대형 구조물용 단조 소재'}
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {lang === 'ENG'
                        ? 'Large forgings are high-strength forged products formed by large presses or hammers to densify the internal structure. Applied mainly to large structures such as power generation equipment, ship shaft systems, and defense equipment, A1 Special Steel supplies large forging products meeting strict quality standards through reliable manufacturing partners.'
                        : '대형단조는 대형 프레스나 해머로 강재를 성형하여 내부 조직을 치밀하게 만든 고강도 단조품입니다. 주로 발전설비, 선박 축계, 방산 장비 등 대형 구조물에 적용되며, 에이원특수강은 신뢰할 수 있는 제조 파트너를 통해 엄격한 품질 기준을 충족하는 대형단조 제품을 공급합니다.'}
                </p>
            </section>
        </>
    );
}
