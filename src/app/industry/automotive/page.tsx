'use client';

import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function AutomotivePage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-24">

            <section className="max-w-6xl mx-auto px-4 w-full pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {isEng ? 'Precision Materials \nfor the Road' : '도로 위의 정밀함을 \n위한 소재'}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {isEng
                                ? 'We focus on fuel efficiency through weight reduction and safety through high-strength materials for drivetrain components. Our special steel solutions provide the durability required for next-generation mobility.'
                                : '무게 절감을 통한 연비 향상과 기어, 서스펜션 등 구동계 부품의 고강도화를 통해 자동차 산업의 혁신을 지원합니다. 에이원특수강의 솔루션은 차세대 모빌리티가 요구하는 내구성을 제공합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Automotive_Steel</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Lightweight</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#High_Durability</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/industry/automotive.png"
                            alt="Automotive Industry"
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
                        {['Transmission Gear', 'Drive Shaft', 'Crankshaft', 'Suspension'].map((part) => (
                            <span key={part} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-700 shadow-sm border border-blue-100">
                                {isEng ? part : (part === 'Transmission Gear' ? '트랜스미션 기어' : part === 'Drive Shaft' ? '구동축' : part === 'Crankshaft' ? '크랭크축' : '서스펜션')}
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
                                    part: isEng ? 'Crankshaft' : '크랭크축', 
                                    grade: 'SCM440, SNCM439', 
                                    desc: isEng ? 'High fatigue resistance' : '우수한 피로 내구성 확보' 
                                },
                                { 
                                    part: isEng ? 'Transmission Gear' : '트랜스미션 기어', 
                                    grade: 'SCr420, SCM420', 
                                    desc: isEng ? 'Dimensional stability after carburizing' : '침탄 후 치수 안정성 및 고강도' 
                                },
                                { 
                                    part: isEng ? 'Suspension Spring' : '서스펜션 스프링', 
                                    grade: 'SUP9D, SUP11D', 
                                    desc: isEng ? 'High elasticity and durability' : '높은 탄성 한계 및 내구성' 
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
                title={isEng ? 'Need Optimized Materials?' : '최적의 소재가 필요하신가요?'}
                description={isEng
                    ? 'Consult with our experts for the best steel grades for your automotive parts.'
                    : '자동차 부품에 최적화된 강종 선택, 전문가와 상의하세요.'}
                buttonText={isEng ? 'Request a Quote' : '견적 문의하기'}
                buttonHref="/contact"
            />
        </div>
    );
}

