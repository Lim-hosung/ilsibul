'use client';

import { useLang } from '@/lib/LanguageContext';

export default function HistoryPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    const events = [
        { year: '2022', title: isEng ? 'A1 Special Steel Established' : '에이원특수강 주식회사 설립', desc: isEng ? 'SeAH Besteel Authorized Distributor status acquired.' : '세아베스틸 지정 대리점 권한 획득' },
        { year: '2023', title: isEng ? 'Pyeongtaek Processing Center' : '평택 가공센터 가동', desc: isEng ? 'Completion of state-of-the-art cutting facility.' : '최신식 절단 설비 도입 및 물류 거점 확보' },
        { year: '2024', title: isEng ? 'Business Expansion' : '사업 영역 확장', desc: isEng ? 'Export and secondary processing business launched.' : '수출 및 이차가공재 사업부 신설' },
    ];

    return (
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                        {isEng ? 'A History of \nSteady Growth' : '멈추지 않는 성장의 기록, \n에이원특수강의 역사'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        {isEng
                            ? 'Starting as a specialized steel distributor, we have continuously expanded our capabilities to become a total solution provider for all special steel needs.'
                            : '에이원특수강은 짧은 역사 속에서도 탄탄한 기술력과 고객의 신뢰를 바탕으로 급성장해 왔습니다. 특수강 유입의 새로운 기준을 제시하며 미래를 향해 나아갑니다.'}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Growth</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Innovation</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Standard</span>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2670&auto=format&fit=crop"
                        alt="History"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    {events.map((event, idx) => (
                        <div key={idx} className="flex gap-8 md:gap-16 items-start">
                            <div className="text-3xl md:text-4xl font-black text-blue-600 shrink-0 w-24">{event.year}</div>
                            <div className="pt-2">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
