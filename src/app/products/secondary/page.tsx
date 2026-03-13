'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function SecondaryPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24 pt-12">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Secondary Processed Steel \nfor Precision Applications' : '정밀 가공의 가치 \n이차가공재 솔루션'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'Secondary processed steel refers to materials that undergo additional processing such as Peeling (PM) or Cold Drawing (CD). We provide various grades and shapes of secondary processed materials ready for your production.'
                                : 'PM(Peeling), CD(Cold Drawing) 등 정밀한 이차가공을 거친 소재는 제작 공정의 효율을 비약적으로 높여줍니다. 고객의 용도에 맞춰 최적의 표면 조도와 치수 정밀도를 갖춘 준비된 소재를 공급합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Peeling_PM</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Cold_Drawing_CD</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Precision_Material</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/products/secondary.jpg"
                            alt="Secondary Processed Steel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Main Products' : '주요 제품'}</h3>
                    <p className="text-gray-700 text-lg font-semibold">PM재, CD재, 연마봉 등</p>
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Precision Processed Steel' : '정밀 가공 소재의 완성'}
                description={lang === 'ENG'
                    ? 'From peeling to drawing — consistent quality for your precision components.'
                    : '필링부터 인발까지, 정밀 부품을 위한 일관된 품질을 약속합니다.'}
                buttonText={lang === 'ENG' ? 'Technical Inquiry' : '기술 문의하기'}
                buttonHref="/contact"
            />
        </div>
    );
}
