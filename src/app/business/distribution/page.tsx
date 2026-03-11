'use client';

import { useLang } from '@/lib/LanguageContext';
import { Package, Truck, CheckCircle, Shield } from 'lucide-react';

export default function DistributionPage() {
    const { lang } = useLang();

    const isEng = lang === 'ENG';

    const features = [
        {
            icon: <Package className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Stable Supply' : '안정적 공급망',
            desc: isEng
                ? 'Official SeAH Besteel dealer ensuring consistent inventory.'
                : '세아베스틸 공식 대리점으로서 고품질 특수강의 안정적인 수급을 보장합니다.',
        },
        {
            icon: <Truck className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Quick Delivery' : '신속한 배송',
            desc: isEng
                ? 'Optimized logistics system for timely delivery to your site.'
                : '최적화된 물류 시스템을 통해 고객사의 생산 일정에 맞춘 신속한 배송을 지원합니다.',
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Quality Assurance' : '철저한 품질관리',
            desc: isEng
                ? 'Strict inspection process for every single product.'
                : '모든 제품에 대해 엄격한 검수 과정을 거쳐 무결점 제품만을 공급합니다.',
        },
        {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: isEng ? 'Authorized Dealer' : '공식 인증 대리점',
            desc: isEng
                ? 'Authentic products directly from SeAH Besteel.'
                : '세아베스틸 정품만을 취급하여 소재의 신뢰성을 끝까지 책임집니다.',
        },
    ];

    return (
        <div className="space-y-20">
            {/* Intro Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                        {isEng
                            ? 'Reliable Special Steel \nDistribution Partner'
                            : '철저한 품질과 신뢰를 바탕으로 한 \n특수강 유통의 중심'}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {isEng
                            ? 'A1 Special Steel is an official dealer of SeAH Besteel, supplying various grades of special steel bars tailored to the needs of core national industries including automotive, defense, and heavy equipment.'
                            : '에이원특수강은 세아베스틸의 공식 대리점으로서, 자동차, 방산, 중장비 등 국가 핵심 산업에 필요한 다양한 강종의 특수강 봉강을 최적의 조건으로 공급하고 있습니다.'}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#SeAH_Besteel</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Special_Steel</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Official_Dealer</span>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img
                        src="/images/services/distribution.jpg"
                        alt="Distribution Service"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Feature Grid */}
            <section>
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {isEng ? 'Our Competitive Advantages' : '에이원특수강 유통의 강점'}
                    </h3>
                    <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Inventory Info Placeholder */}
            <section className="bg-blue-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                    <Package className="w-full h-full transform translate-x-1/4 -translate-y-1/4" />
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            {isEng ? 'Optimal Stock Management' : '최적의 재고 관리 시스템'}
                        </h3>
                        <p className="text-blue-100 text-lg leading-relaxed mb-8">
                            {isEng
                                ? 'We maintain a constant inventory of 1,500 to 2,000 tons to respond immediately to sudden customer requests.'
                                : '월평균 1,500 ~ 2,000톤 규모의 상시 재고를 유지하여 고객사의 갑작스러운 요청에도 즉각적인 대응이 가능합니다.'}
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-3xl font-black text-white mb-1">1,500T+</div>
                                <div className="text-blue-200 text-sm font-bold">{isEng ? 'Safety Stock' : '상시 안전재고'}</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-white mb-1">800T+</div>
                                <div className="text-blue-200 text-sm font-bold">{isEng ? 'Monthly Sales' : '월평균 판매량'}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button className="px-8 py-4 bg-white text-blue-900 font-black rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                            {isEng ? 'Request Quotation' : '견적 및 재고 문의하기'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
