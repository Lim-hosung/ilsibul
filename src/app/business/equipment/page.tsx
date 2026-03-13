'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function EquipmentPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24 pt-12">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Systematic Equipment \nConsistent Quality' : '체계적인 설비 \n일관된 품질의 기반'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'A1 Special Steel covers a wide range of processing requirements through a systematic partner network for heat treatment, hole machining, and more. Each piece of equipment is maintained in optimal condition ensuring stable productivity.'
                                : '에이원특수강은 절단 가공 설비를 자체 보유하고 있으며, 열처리·홀가공 등 광범위한 협력 업체 네트워크를 통해 완결된 설비 운영 체계를 갖추고 있습니다. 정기적인 유지·관리를 통해 최상의 가동 상태와 납기 신뢰성을 보장합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Cutting_Facilities</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Systematic_Maintenance</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Efficiency</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                            alt="Equipment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '11 Circulators' : '✔ 서큘레이터 11대',
                        lang === 'ENG' ? '6 Band Saws' : '✔ 밴드쏘 6대',
                        lang === 'ENG' ? 'Partner Network: Heat Treatment & Hole Machining' : '✔ 협력 네트워크: 열처리, 홀가공 등',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Advanced Processing Facilities' : '첨단 가공 설비 보유'}
                description={lang === 'ENG'
                    ? 'Maintaining the best operational condition for stable productivity.'
                    : '안정적인 생산성을 위해 최상의 가동 상태를 유지하고 있습니다.'}
                buttonText={lang === 'ENG' ? 'View Equipment Specs' : '설비 사양 확인하기'}
                buttonHref="/about/intro"
            />
        </div>
    );
}
