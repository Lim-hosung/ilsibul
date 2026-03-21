'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function ExportPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Global Supply Chain \nBeyond Korea' : '국내외를 아우르는 \n유통 서플라이 체인'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'A1 Special Steel distributes steel products through a reliable supply chain. Since 2010, we have been continuously exporting to Asian and European countries, providing tariff-aligned export strategies.'
                                : '에이원특수강은 국내 유수의 철강 제조 메이커의 제품을 신뢰성 있는 공급망을 통해 유통하고 있습니다. 2010년부터 아시아 및 유럽 국가들에 지속적으로 수출하고 있으며, 최적의 원산지 대응 및 수출 솔루션을 제공합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Global_Network</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Export_Expert</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Reliable_Supply</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/services/export.jpg"
                            alt="Export Service"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        lang === 'ENG' ? '✔ Exporting to multiple countries since 2010' : '✔ 2010년부터 여러 국가에 철강 공급중',
                        lang === 'ENG' ? '✔ Tariff-optimized export strategy' : '✔ 관세에 맞춤 수출 전략 솔루션',
                        lang === 'ENG' ? '✔ C/O & documentation support' : '✔ 원산지 증명 등 다양한 서류 대응 가능',
                    ].map((point, i) => (
                        <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-blue-900 font-bold text-center">{point}</div>
                    ))}
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Global Distribution Network' : '글로벌 유통 네트워크'}
                description={lang === 'ENG'
                    ? 'Reliable export services to Asia, Europe, and beyond.'
                    : '아시아, 유럽을 넘어 전 세계로 연결되는 신뢰의 수출 서비스를 경험하세요.'}
                buttonText={lang === 'ENG' ? 'Global Inquiry' : '글로벌 문의'}
                buttonHref="/contact"
            />
        </div>
    );
}
