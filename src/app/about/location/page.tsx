'use client';

import { useLang } from '@/lib/LanguageContext';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

export default function LocationPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';

    const offices = [
        {
            name: isEng ? 'A1 Special Steel Co., Ltd.' : '㈜에이원특수강',
            address: isEng ? '145 Mayu-ro, Siheung-si, Gyeonggi-do (Jeongwang-dong)' : '경기도 시흥시 마유로 145 (정왕동) ㈜에이원특수강',
            tel: '031-475-5549',
            fax: '031-475-5649'
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
                            : '서로를 잇는 신뢰와 협력의 공간으로 여러분을 초대합니다. 서울 본사와 보령 가공센터에서 차별화된 서비스를 직접 경험해 보시기 바랍니다.'}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Global_Network</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Customer_Center</span>
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Office</span>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img
                        src="/images/about/company-exterior.png"
                        alt="에이원특수강 전경"
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
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 mb-1">{isEng ? 'Address' : '주소'}</p>
                                    <p className="text-gray-900 font-bold">{office.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 mb-1">{isEng ? 'Phone' : '전화'}</p>
                                    <p className="text-gray-900 font-bold tracking-tight">{office.tel}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 mb-1">{isEng ? 'Fax' : '팩스'}</p>
                                    <p className="text-gray-900 font-bold tracking-tight">{office.fax}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-xl flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-400" />
                            <p className="text-orange-800 text-sm font-medium">
                                {isEng ? 'Please contact us before visiting for better assistance.' : '방문 전 사전 연락을 주시면 원활한 안내가 가능합니다.'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
