'use client';

import { useLang } from '@/lib/LanguageContext';
import { Hero } from '@/components/ui/Hero';

export default function ShipbuildingPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-16">
            <Hero
                title={isEng ? 'Shipbuilding Industry' : '조선 산업'}
                subtitle={isEng 
                    ? 'Marine Strength — Core Materials for Shipbuilding' 
                    : '바다 위의 강인함, 조선 산업의 핵심 소재'}
                imageSrc="/images/industry/shipbuilding.jpg"
                size="sm"
            />

            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        {isEng ? 'Resilience Against the Ocean' : '대양에 맞서는 회복탄력성'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
                        {isEng
                            ? 'Materials satisfying corrosion resistance in seawater and high-load strength for propulsion shafts and engine components.'
                            : '해수에 대한 부식 저항성과 추진축, 엔진 부품의 고하중 강도를 만족하는 핵심 소재를 공급합니다.'}
                    </p>
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
        </div>
    );
}

