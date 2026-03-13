'use client';

import { useLang } from '@/lib/LanguageContext';

export default function HistoryPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    const events = [
        { year: '2008', title: isEng ? 'A1 Special Steel Established' : '㈜에이원특수강 설립' },
        { year: '2011', title: isEng ? 'Siwha Plant Established' : '경기도 시흥 시화공단 공장 설립, 본격 영업 개시' },
        { year: '2012', title: isEng ? 'Processing Equipment Introduced' : '가공설비(밴드쏘·서큐레이터) 도입, 절단가공 서비스 시작' },
        { year: '2015~', title: isEng ? 'Official SeAH Besteel Dealer' : '세아베스틸 공식 대리점 체계 강화, 거래처 확대' },
        { year: isEng ? 'Present' : '현재', title: isEng ? 'Total Steel Solution Provider' : '특수강 유통·절단·솔루션 토털 서비스 기업으로 성장' },
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
                        src="/images/about/history.png"
                        alt="History"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    {events.map((event, idx) => (
                        <div key={idx} className="flex gap-8 md:gap-16 items-start">
                            <div className="text-3xl md:text-3xl font-black text-blue-600 shrink-0 w-24">{event.year}</div>
                            <div className="pt-1.5 flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0" />
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{event.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
