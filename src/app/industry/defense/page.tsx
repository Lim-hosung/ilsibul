'use client';

import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function DefensePage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-24">

            <section className="max-w-6xl mx-auto px-4 w-full pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {isEng ? 'Unyielding Strength for \nDefense Applications' : '방위를 위한 \n굳건한 강인함'}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {isEng
                                ? 'Defense materials require absolute reliability in extreme situations. A1 Special Steel supports K-defense competitiveness by supplying high-alloy special steels optimized for gun barrels, armored bodies, and projectiles.'
                                : '극한 상황에서도 절대적인 신뢰성이 요구되는 방산 소재는 고도의 기술력이 집약되어 있습니다. 에이원특수강은 포신, 장갑차체, 탄체 등에 최적화된 고합금 특수강을 통해 K-방산의 경쟁력을 뒷받침합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Defense_Materials</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#High_Alloy_Steel</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Extreme_Reliability</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/industry/defense.jpg"
                            alt="Defense Industry"
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

            <CTASection
                title={isEng ? 'Uncompromising Quality for Defense' : '타협하지 않는 국방 품질'}
                description={isEng
                    ? 'High-reliability materials for mission-critical applications.'
                    : '신뢰할 수 있는 소재로 대한민국 방위 산업을 뒷받침합니다.'}
                buttonText={isEng ? 'Consult with Expert' : '전문가와 상의하기'}
                buttonHref="/contact"
            />
        </div>
    );
}

