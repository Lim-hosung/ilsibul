'use client';

import { useLang } from '@/lib/LanguageContext';
import { Target, Eye, Heart, BarChart, Building2, User, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function IntroPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    const values = [
        {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Customer Focus' : '고객 중심',
            desc: isEng
                ? 'Creating value through customized solutions for every client.'
                : '고객의 니즈를 최우선으로 생각하며 맞춤형 솔루션을 통해 가치를 창출합니다.',
        },
        {
            icon: <BarChart className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Excellence' : '전문성',
            desc: isEng
                ? '30 years of expertise in special steel distribution and processing.'
                : '30년 이상의 업력을 바탕으로 특수강 유통 및 가공 분야의 최고 전문성을 보유하고 있습니다.',
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Integrity' : '정직과 신뢰',
            desc: isEng
                ? 'Building long-term partnerships through transparent management.'
                : '투명하고 정직한 경영을 통해 파트너사와 흔들림 없는 신뢰 관계를 구축합니다.',
        },
        {
            icon: <Heart className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Co-prosperity' : '함께 성장',
            desc: isEng
                ? 'Walking together with our partners towards a sustainable future.'
                : '고객사 및 협력사와 함께 지속 가능한 미래를 향해 발맞추어 성장합니다.',
        },
    ];

    return (
        <div className="space-y-24">
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">
                    {isEng ? 'A Trusted Leader in Special Steel' : '회사개요'}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                    {isEng
                        ? 'A1 Special Steel Co., Ltd. has grown as an official dealer of SeAH Besteel, specializing in the distribution and processing of various special steel bars since its establishment in 2008. Representative Director Han-su Na, an expert who was in charge of sales at SeAH Besteel for 30 years, has grown A1 Special Steel into a trusted company in the industry based on his experience and know-how. We operate our own factory in Siwha Industrial Complex in Siheung, Gyeonggi-do, and operate processing facilities such as circulators and band saws, and are evolving into a comprehensive solution company that combines processing and management beyond simple distribution.'
                        : '㈜에이원특수강은 2008년 설립 이후 세아베스틸의 공식 대리점으로서 국산 특수강 봉강 유통 및 가공 사업을 영위하고 있습니다. 창립자 나한수 대표이사는 세아베스틸에서 30년간 영업을 담당한 전문가로, 그 경험과 노하우를 바탕으로 에이원특수강을 업계의 신뢰받는 기업으로 성장시켜 왔습니다. 경기도 시흥 시화공단에 자체 공장을 보유하고 서큘레이터·밴드쏘 등 가공 설비를 운영하며, 단순 유통을 넘어 가공·관리를 결합한 종합 솔루션 기업으로 진화하고 있습니다.'}
                </p>
            </section>

            {/* Info Grid */}
            <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { icon: <Building2 className="w-6 h-6 text-blue-600" />, label: isEng ? 'Company Name' : '회사명', value: isEng ? 'A1 Special Steel Co., Ltd.' : '㈜에이원특수강' },
                    { icon: <User className="w-6 h-6 text-blue-600" />, label: isEng ? 'Representative' : '대표', value: isEng ? 'Han-su Na' : '나한수' },
                    { icon: <Calendar className="w-6 h-6 text-blue-600" />, label: isEng ? 'Established' : '설립', value: isEng ? '2008' : '2008년' },
                    { icon: <MapPin className="w-6 h-6 text-blue-600" />, label: isEng ? 'Location' : '소재지', value: isEng ? '145 Mayu-ro, Siheung-si, Gyeonggi-do' : '경기 시흥시 마유로 145' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 mb-1">{item.label}</p>
                            <p className="text-xl font-black text-gray-900">{item.value}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Philosophy / Values */}
            <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-24 rounded-[3rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{isEng ? 'Our Core Values' : '핵심 가치'}</h3>
                        <p className="text-gray-500">{isEng ? 'The foundation of everything we do at A1 Special Steel.' : '에이원특수강이 지키고자 하는 약속입니다.'}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6">{v.icon}</div>
                                <h4 className="text-xl font-bold mb-4">{v.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img src="/images/about/company-exterior.png" alt="A1 Special Steel Vision" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-8">
                    <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm">Our Vision</div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight whitespace-pre-line">
                        {isEng
                            ? 'Global Top-Tier Steel \nSolution Provider'
                            : '글로벌 초일류 철강 \n솔루션 프로바이더'}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {isEng
                            ? 'Our mission is to lead the special steel market with unmatched quality and innovative logistics solutions, expanding our footprints across Asia and Europe.'
                            : '단순한 유통을 넘어, 고객의 제품 설계 단계부터 함께 고민하고 기여하는 진정한 비즈니스 파트너로 거듭나겠습니다. 국내 시장을 넘어 아시아와 중동 등 글로벌 시장에서 인정받는 특수강 전문 기업으로 도약하겠습니다.'}
                    </p>
                    <ul className="space-y-4">
                        {[
                            isEng ? 'Sustainable Value Creation' : '지속 가능한 가치 창출',
                            isEng ? 'Innovation in Distribution' : '유통 프로세스의 혁신',
                            isEng ? 'Global Network Expansion' : '글로벌 네트워크의 확장'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-3 text-gray-900 font-bold">
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}

function Shield(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
    )
}

