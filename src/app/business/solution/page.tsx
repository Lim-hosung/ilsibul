'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function SolutionPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Solutions Through Technology \nFrom Material to Process' : '소재 선택부터 가공까지 \n기술로 완성하는 솔루션'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'Beyond simple sales, A1 Special Steel proposes optimal materials at the product development stage and works with you on process optimization. Our team leverages 30+ years of accumulated knowhow to elevate your competitiveness.'
                                : '에이원특수강은 단순 판매를 넘어, 고객사의 제품 개발 단계에서부터 최적 소재를 제안하고 공정 최적화 방안을 함께 고민합니다. 전문가 그룹의 30년 이상 축적된 노하우를 바탕으로 고객의 경쟁력을 높여 드립니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Material_Consulting</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Process_Optimization</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Product_Development</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/services/solution.jpg"
                            alt="Solution Service"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ Steel Grade Consulting' : '✔ 강종 선택 컨설팅',
                        lang === 'ENG' ? '✔ Optimal Spec Proposal' : '✔ 최적 규격 제안',
                        lang === 'ENG' ? '✔ Process-Linked Solutions' : '✔ 공정 연계 솔루션',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Expert Material Consulting' : '전문가 소재 컨설팅'}
                description={lang === 'ENG'
                    ? '30 years of know-how to solve your most difficult material challenges.'
                    : '30년의 노하우로 가장 어려운 소재 과제를 함께 해결합니다.'}
                buttonText={lang === 'ENG' ? 'Get a Consultation' : '컨설팅 요청하기'}
                buttonHref="/contact"
            />
        </div>
    );
}
