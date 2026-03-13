'use client';

import { useLang } from '@/lib/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function LocationPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    const offices = [
        {
            name: isEng ? 'Head Office' : '본사',
            address: isEng ? '123 Steel Road, Gangnam-gu, Seoul' : '서울특별시 강남구 테헤란로 (에이원타워)',
            tel: '02-123-4567',
            email: 'office@a1steel.co.kr'
        },
        {
            name: isEng ? 'Pyeongtaek Plant' : '평택 가공센터',
            address: isEng ? '456 Indus Parkway, Pyeongtaek, Gyeonggi-do' : '경기도 평택시 산업단지로 456 (가공센터)',
            tel: '031-789-0123'
        }
    ];

    return (
        <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                        {isEng ? 'Visit Our \nFacilities' : '언제나 열려있는 \n에이원특수강입니다.'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        {isEng
                            ? 'Our head office in Seoul and processing center in Pyeongtaek are always ready to serve your needs.'
                            : '서로를 잇는 신뢰와 협력의 공간으로 여러분을 초대합니다. 서울 본사와 평택 가공센터에서 차별화된 서비스를 직접 경험해 보시기 바랍니다.'}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Global_Network</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Customer_Center</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Office</span>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop"
                        alt="Office Location"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {offices.map((office, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-blue-600"></div>
                            {office.name}
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <p className="text-gray-600 text-lg">{office.address}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-blue-600 shrink-0" />
                                <p className="text-gray-600 text-lg">{office.tel}</p>
                            </div>
                            {office.email && (
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-blue-600 shrink-0" />
                                    <p className="text-gray-600 text-lg">{office.email}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
