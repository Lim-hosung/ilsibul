'use client';

import { useLang } from '@/lib/LanguageContext';
import { Hero } from '@/components/ui/Hero';

export default function DefensePage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-16">
            <Hero
                title={isEng ? 'Defense Industry' : '방산 산업'}
                subtitle={isEng 
                    ? 'High-Reliability Materials for National Security' 
                    : '국가 안보를 뒷받침하는 고신뢰 소재'}
                imageSrc="/images/industry/defense.jpg"
                size="sm"
            />

            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        {isEng ? 'Unyielding Strength for Defense' : '방위를 위한 굳건한 강인함'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
                        {isEng
                            ? 'Materials requiring absolute reliability in extreme situations, supporting K-defense competitiveness with high-alloy special steels.'
                            : '극한 상황에서도 절대적인 신뢰성이 요구되는 소재들로, 고합금 특수강을 통해 K-방산의 경쟁력을 뒷받침합니다.'}
                    </p>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-8 mb-12 border border-blue-100">
                    <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full" />
                        {isEng ? 'Key Applied Parts' : '주요 적용 부품'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['Vehicle Body', 'Gun Barrel', 'Projectile', 'Naval Parts'].map((part) => (
                            <span key={part} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-700 shadow-sm border border-blue-100">
                                {isEng ? part : (part === 'Vehicle Body' ? '차체 장갑' : part === 'Gun Barrel' ? '포신' : part === 'Projectile' ? '탄체' : '함정 부품')}
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
                                    part: isEng ? 'Armored Body' : '장갑 차체', 
                                    grade: 'SNCM630, SNCM447', 
                                    desc: isEng ? 'Top-level toughness & ballistic resistance' : '최고 수준의 인성 및 내방탄 성능' 
                                },
                                { 
                                    part: isEng ? 'Gun Barrel' : '포신 및 총열', 
                                    grade: 'SCM440, SNCM439', 
                                    desc: isEng ? 'Wear and fatigue resistance' : '고온 내마모성 및 피로 강도 확보' 
                                },
                                { 
                                    part: isEng ? 'Projectile' : '탄체', 
                                    grade: 'SNC836, SNCM220', 
                                    desc: isEng ? 'High-impact energy absorption' : '충격 에너지 흡수 및 안정성' 
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

