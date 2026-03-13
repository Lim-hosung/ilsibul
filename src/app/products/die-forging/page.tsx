'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function DieForgingPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24 pt-12">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Complex Shapes, Precise Dimensions \nThe Power of Die Forging' : '복잡한 형상, 정밀한 치수 \n형단조의 강점'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'Die forging forms complex-shaped parts with high precision using molds, minimizing cutting loss while securing excellent mechanical properties. It is widely applied to automotive, heavy equipment, and defense components.'
                                : '금형을 이용해 정밀한 형상을 구현하는 형단조는 재료 손실을 줄이면서도 극한의 내구성을 확보할 수 있는 공법입니다. 자동차 구동계, 중장비 핵심 엔진 부품 및 방산용 고강도 부품 제조에 널리 활용됩니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Precision_Forging</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Efficiency</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#High_Precision</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                            alt="Die Forging"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { kor: '✔ 재료 절약 — 절삭량 최소화', eng: '✔ Material savings — minimal cutting' },
                        { kor: '✔ 우수한 기계적 특성 확보', eng: '✔ Superior mechanical properties' },
                        { kor: '✔ 소재선정~공정관리 토털 솔루션', eng: '✔ Total solution from material to process' },
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">
                            {lang === 'ENG' ? point.eng : point.kor}
                        </div>
                    ))}
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Mass Production Forging' : '대량 생산 단조 솔루션'}
                description={lang === 'ENG'
                    ? 'Efficient and precise die forging for your core industrial parts.'
                    : '핵심 산업 부품을 위한 효율적이고 정밀한 금형 단조 솔루션을 제공합니다.'}
                buttonText={lang === 'ENG' ? 'Contact Sales' : '영업 담당자 문의'}
                buttonHref="/contact"
            />
        </div>
    );
}
