'use client';

import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function ShipbuildingPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-24">

            <section className="max-w-6xl mx-auto px-4 w-full pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {isEng ? 'Resilience Against \nthe Ocean' : '대양에 맞서는 \n회복탄력성'}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {isEng
                                ? 'Materials for shipbuilding must satisfy corrosion resistance and high-load strength for propulsion shafts and engine components. A1 Special Steel supplies the core materials that withstand the harsh marine environment.'
                                : '해수에 대한 부식 저항성과 추진축, 엔진 부품의 고하중 강도를 동시에 만족하는 핵심 소재를 공급합니다. 거친 해양 환경을 견뎌내는 조선 산업용 고성능 특수강의 기준을 제시합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Marine_Steel</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Corrosion_Resistance</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Propulsion_Shaft</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/industry/shipbuilding.png"
                            alt="Shipbuilding Industry"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-8 mb-12 border border-blue-100">
                    <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full" />
                        {isEng ? 'Key Applied Parts' : '주요 적용 부품'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['Propulsion Shaft', 'Crankshaft', 'Rudder Parts', 'Ship Forgings'].map((part) => (
                            <span key={part} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-700 shadow-sm border border-blue-100">
                                {isEng ? part : (part === 'Propulsion Shaft' ? '추진축' : part === 'Crankshaft' ? '크랭크샤프트' : part === 'Rudder Parts' ? '러더 부품' : '선박용 단조품')}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-sm font-bold text-gray-900">{isEng ? 'Parts' : '적용 부품'}</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900">{isEng ? 'Steel Grade' : '추천 강종'}</th>
                                <th className="px-6 py-4 text-sm font-bold text-gray-900">{isEng ? 'Characteristics' : '주요 특성'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { 
                                    part: isEng ? 'Propulsion Shaft' : '선박 추진축', 
                                    grade: 'SNCM630, SNCM439', 
                                    desc: isEng ? 'Uniform toughness in large sections' : '대형 단면 내 균일한 인성 확보' 
                                },
                                { 
                                    part: isEng ? 'Engine Crankshaft' : '엔진 크랭크축', 
                                    grade: 'SCM440, SNCM439', 
                                    desc: isEng ? 'High-cycle fatigue strength' : '고주기 피로 강도 및 내성' 
                                },
                                { 
                                    part: isEng ? 'Rudder Parts' : '러더(키) 부품', 
                                    grade: 'SNC836, SNCM220', 
                                    desc: isEng ? 'Corrosion resistance in marine environments' : '해양 환경 내 우수한 내식성' 
                                },
                            ].map((item, i) => (
                                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-bold text-gray-800">{item.part}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-blue-700">{item.grade}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <CTASection
                title={isEng ? 'Materials for the Open Sea' : '대양을 가르는 강인한 소재'}
                description={isEng
                    ? 'Corrosion-resistant and high-strength steel for marine excellence.'
                    : '내식성과 고강도를 겸비한 조선용 특수강 솔루션을 제공합니다.'}
                buttonText={isEng ? 'Request Collaboration' : '협력 문의하기'}
                buttonHref="/contact"
            />
        </div>
    );
}

