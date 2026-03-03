import { Hero } from '@/components/ui/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '회사 연혁 | 에이원특수강',
    description: '에이원특수강의 설립부터 현재까지의 성장 연혁을 소개합니다.',
};

export default function HistoryPage() {
    const milestones = [
        { year: '현재', title: '토털 솔루션 기업으로 도약', desc: '가공·유통·관리를 결합한 원스톱 서비스와 제3국 수출 시장 진출을 준비하며 지속 성장 중.' },
        { year: '2011', title: '시흥 공장 설립·본격 영업 시작', desc: '경기 시흥시 마유로 145에 현 공장을 준공하고, 세아베스틸 대리점으로서 본격적인 특수강 봉강 유통 영업을 시작.' },
        { year: '2008', title: '에이원특수강 설립', desc: '세아베스틸에서 30년간 영업을 담당한 나한수 대표이사가 ㈜에이원특수강을 설립. 국산 특수강 봉강 전문 유통을 목표로 출범.' },
    ];

    return (
        <>
            <Hero
                title="회사 연혁"
                subtitle="2008년 설립부터 현재까지, 에이원특수강의 성장 여정."
                imageSrc="https://images.unsplash.com/photo-1528189689849-db376043d9b4?w=1600&auto=format&fit=crop"
                size="sm"
            />

            <div className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="space-y-12">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="relative flex gap-8 group">
                                {/* Line */}
                                <div className="absolute left-8 top-12 bottom-[-3rem] w-0.5 bg-gray-200 group-last:hidden"></div>

                                {/* Year Badge */}
                                <div className="relative shrink-0 w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center z-10 text-blue-700 font-bold text-sm">
                                    {milestone.year}
                                </div>

                                {/* Content */}
                                <div className="pt-3 pb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
