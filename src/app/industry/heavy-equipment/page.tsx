'use client';

import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function HeavyEquipmentPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    return (
        <div className="flex flex-col space-y-24">

            <section className="max-w-6xl mx-auto px-4 w-full pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {isEng ? 'Reliable Materials for \nHeavy Operations' : '중장비 가동을 위한 \n신뢰할 수 있는 소재'}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {isEng
                                ? 'Heavy equipment requires high-strength materials to withstand extreme loads. A1 Special Steel supplies optimized materials for hydraulic cylinders, drive shafts, and pins that prove their reliability in harsh conditions.'
                                : '굴착기, 기중기 등 중장비는 극심한 하중을 견뎌내야 하므로 고강도 소재가 필수적입니다. 에이원특수강은 혹독한 환경에서도 신뢰성을 증명하는 유압 실린더, 구동축용 최적 소재를 공급합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Heavy_Equipment</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#High_Strength</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Proven_Quality</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/industry/heavy-equipment.png"
                            alt="Heavy Equipment Industry"
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

            <CTASection
                title={isEng ? 'Power Your Heavy Machinery' : '강렬한 퍼포먼스의 시작'}
                description={isEng
                    ? 'The best steel for the most demanding construction environments.'
                    : '가장 혹독한 건설 현장을 이겨내는 최고의 소재를 제안합니다.'}
                buttonText={isEng ? 'Request Spec Info' : '규격 정보 문의'}
                buttonHref="/contact"
            />
        </div>
    );
}

