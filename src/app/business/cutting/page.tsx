'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function CuttingPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Precision Cutting \nOptimizes Your Process' : '정밀 절단으로 \n고객의 공정을 최적화합니다'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'A1 Special Steel operates 11 circulators and 6 band saws to provide precision cutting services tailored to customer specifications. We serve as a processing partner that improves your operational efficiency.'
                                : '에이원특수강은 서큘레이터 11대와 밴드쏘 6대를 보유하고, 고객이 요구하는 사양에 맞춘 정밀 절단 서비스를 제공합니다. 단순 원재료 공급에서 벗어나, 고객사의 공정 효율을 높이는 가공 파트너로서 최적의 결과를 만들어 드립니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Precision_Cutting</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Fast_Delivery</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#In_house_Equipment</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/services/cutting.jpg"
                            alt="Cutting Service"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ 11 Circulators' : '✔ 서큘레이터 11대 운용',
                        lang === 'ENG' ? '✔ 6 Band Saws' : '✔ 밴드쏘 6대 운용',
                        lang === 'ENG' ? '✔ Custom Spec Cutting' : '✔ 고객 맞춤 규격 절단',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Precise Cutting for Your Project' : '프로젝트를 위한 정밀한 절단'}
                description={lang === 'ENG'
                    ? 'State-of-the-art facilities ensuring the most accurate dimensions.'
                    : '최신 설비로 가장 정확한 수치와 절단면을 보장합니다.'}
                buttonText={lang === 'ENG' ? 'Inquire Now' : '지금 문의하기'}
                buttonHref="/contact"
            />
        </div>
    );
}
