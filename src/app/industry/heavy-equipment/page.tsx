'use client';

import { useLang } from '@/lib/LanguageContext';
import { Hero } from '@/components/ui/Hero';

export default function HeavyEquipmentPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-16">
            <Hero
                title={isEng ? 'Heavy Equipment Industry' : '중장비 산업'}
                subtitle={isEng 
                    ? 'Proven Material Reliability in Harsh Conditions' 
                    : '혹독한 환경에서 증명된 소재 신뢰성'}
                imageSrc="/images/industry/heavy-equipment.jpg"
                size="sm"
            />

            <section className="max-w-5xl mx-auto px-4 w-full">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
                        {isEng ? 'Reliable Materials for Heavy Operations' : '중장비 가동을 위한 신뢰할 수 있는 소재'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6">
                        {isEng
                            ? 'Heavy equipment like excavators and cranes requires high-strength materials to withstand extreme loads. A1 Special Steel supplies optimized materials for hydraulic cylinders, drive shafts, and pins.'
                            : '굴착기, 기중기 등 중장비는 극심한 하중을 견뎌내야 하므로 고강도 소재가 필수적입니다. 에이원특수강은 유압 실린더, 구동축, 핀 등에 최적화된 소재를 공급합니다.'}
                    </p>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-8 mb-12 border border-blue-100">
                    <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full" />
                        {isEng ? 'Key Applied Parts' : '주요 적용 부품'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['Hydraulic Cylinder', 'Pin · Bushing', 'Drive Shaft', 'Arm Connector'].map((part) => (
                            <span key={part} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-gray-700 shadow-sm border border-blue-100">
                                {isEng ? part : (part === 'Hydraulic Cylinder' ? '유압 실린더' : part === 'Pin · Bushing' ? '핀 · 부싱' : part === 'Drive Shaft' ? '구동축' : '암 커넥터')}
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
                                    part: isEng ? 'Hydraulic Cylinder Rod' : '유압 실린더 로드', 
                                    grade: 'S45C, SCM440', 
                                    desc: isEng ? 'High strength & toughness after QT' : 'QT 처리를 통한 고강도 및 인성 확보' 
                                },
                                { 
                                    part: isEng ? 'Pin · Bushing' : '핀 · 부싱', 
                                    grade: 'SCM415, SCM420', 
                                    desc: isEng ? 'Surface hardness via carburizing' : '침탄 열처리를 통한 표면 경도 강화' 
                                },
                                { 
                                    part: isEng ? 'Drive Shaft' : '구동축', 
                                    grade: 'SNCM439, SNCM630', 
                                    desc: isEng ? 'Excellent hardenability for high loads' : '고하중 견인을 위한 우수한 소입성 확보' 
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

