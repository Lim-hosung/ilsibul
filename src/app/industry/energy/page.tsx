'use client';

import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function EnergyPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-24">

            <section className="max-w-6xl mx-auto px-4 w-full pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {isEng ? 'Sustaining Power \nThrough Quality' : '품질을 통한 \n동력 유지'}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {isEng
                                ? 'We supply high-performance materials for power plants, wind turbines, and LNG facilities that must withstand high temperature, high pressure, or cryogenic environments with absolute reliability.'
                                : '발전소, 풍력 터빈, LNG 설비 등 고온·고압 또는 극저온의 극한 환경을 견뎌야 하는 에너지 산업용 고기능성 소재를 공급합니다. 완벽한 품질로 미래 에너지 인프라의 안정성을 책임집니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Energy_Industry</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Cryogenic_Steel</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Wind_Power</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/industry/energy.png"
                            alt="Energy Industry"
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

            <CTASection
                title={isEng ? 'Solutions for Greener Energy' : '그린 에너지를 위한 솔루션'}
                description={isEng
                    ? 'Optimize your energy infrastructure with our high-durability special steel.'
                    : '내구성 높은 특수강 소재로 에너지 자산의 수명을 연장하세요.'}
                buttonText={isEng ? 'Get Specialized Design' : '맞춤 설계 문의하기'}
                buttonHref="/contact"
            />
        </div>
    );
}

