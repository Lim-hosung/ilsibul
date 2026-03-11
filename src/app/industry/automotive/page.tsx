'use client';

import { useLang } from '@/lib/LanguageContext';
import { Hero } from '@/components/ui/Hero';

export default function AutomotivePage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-16">
            <Hero
                title={isEng ? 'Automotive Industry' : '자동차 산업'}
                subtitle={isEng 
                    ? 'Lightweight & High Strength Achieved Together' 
                    : '경량화와 고강도, 두 가지를 동시에'}
                imageSrc="/images/industry/automotive.jpg"
                size="sm"
            />

            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        {isEng ? 'Precision Materials for the Road' : '도로 위의 정밀함을 위한 소재'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
                        {isEng
                            ? 'Focuses on fuel efficiency through weight reduction and safety through high-strength materials for drivetrain components like gears and suspension.'
                            : '무게 절감을 통한 연비 향상과 기어, 서스펜션 등 구동계 부품의 고강도 소재를 통한 안전성 확보에 집중하고 있습니다.'}
                    </p>
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
        </div>
    );
}

