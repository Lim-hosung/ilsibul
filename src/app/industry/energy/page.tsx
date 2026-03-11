'use client';

import { useLang } from '@/lib/LanguageContext';
import { Hero } from '@/components/ui/Hero';

export default function EnergyPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-16">
            <Hero
                title={isEng ? 'Energy Industry' : '에너지 산업'}
                subtitle={isEng 
                    ? 'High-Performance Materials for Future Energy' 
                    : '미래 에너지 산업을 위한 고성능 소재 솔루션'}
                imageSrc="/images/industry/energy.jpg"
                size="sm"
            />

            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        {isEng ? 'Sustaining Power Through Quality' : '품질을 통한 동력 유지'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
                        {isEng
                            ? 'Materials for power plants, wind turbines, and LNG facilities that must withstand high temperature, high pressure, or cryogenic environments.'
                            : '발전소, 풍력 터빈, LNG 설비 등 고온, 고압 또는 극저온 환경을 견뎌야 하는 고성능 소재를 공급합니다.'}
                    </p>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-8 mb-12 border border-blue-100">
                    <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full" />
                        {isEng ? 'Key Applied Parts' : '주요 적용 부품'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['Turbine Parts', 'Wind Flange', 'LNG Structure', 'Nuclear Parts'].map((part) => (
                            <span key={part} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-700 shadow-sm border border-blue-100">
                                {isEng ? part : (part === 'Turbine Parts' ? '터빈 부품' : part === 'Wind Flange' ? '풍력 플랜지' : part === 'LNG Structure' ? 'LNG 구조물' : '원자력 부품')}
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
                                    part: isEng ? 'Wind Flange' : '풍력 발전용 플랜지', 
                                    grade: 'SCM440, SNCM439', 
                                    desc: isEng ? 'Fatigue resistance for recurring loads' : '반복 하중에 대한 우수한 피로 내성' 
                                },
                                { 
                                    part: isEng ? 'Turbine Rotor' : '터빈 로터', 
                                    grade: 'SNCM630, SCM440', 
                                    desc: isEng ? 'High-temp creep strength' : '고온 환경 내 크리프 강도 확보' 
                                },
                                { 
                                    part: isEng ? 'LNG Structure' : 'LNG 저장 설비 부품', 
                                    grade: 'SNC836, SNCM220', 
                                    desc: isEng ? 'Prevents brittle fracture at low temperatures' : '저온 환경에서의 취성 파괴 방지' 
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

