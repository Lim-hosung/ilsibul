'use client';

import { Hero } from '@/components/ui/Hero';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function ContactPage() {
    const { lang } = useLang();

    const t = {
        heroTitle: lang === 'ENG' ? 'Contact Us' : '문의하기',
        heroSub: lang === 'ENG'
            ? 'We welcome all inquiries about purchasing, processing, and heat treatment.'
            : '특수강 봉강 구매, 절단 가공, 열처리 등 모든 문의를 환영합니다.',
        heading: lang === 'ENG' ? 'Get in Touch' : '에이원특수강에 문의하세요',
        desc: lang === 'ENG'
            ? 'Contact us for special steel bar purchases, cutting processing services, and heat treatment cooperation. A1 Special Steel, official SeAH Besteel dealer, is ready to help.'
            : '특수강 봉강 구매 문의, 절단 가공 서비스, 열처리 협력 등 모든 사항을 상담해 드립니다. 세아베스틸 공식 대리점 에이원특수강이 도움을 드리겠습니다.',
        address: lang === 'ENG' ? 'Address' : '주소',
        addressDetail: lang === 'ENG'
            ? '145 Mayu-ro, Siheung-si, Gyeonggi-do\nA1 Special Steel Co., Ltd.'
            : '경기도 시흥시 마유로 145\n㈜에이원특수강',
        phone: lang === 'ENG' ? 'Phone' : '전화',
        email: lang === 'ENG' ? 'Inquiry Form' : '이메일 문의',
        emailDesc: lang === 'ENG' ? 'Please use the contact form below.' : '아래 문의 양식을 통해 연락주세요.',
        formTitle: lang === 'ENG' ? 'Send a Message' : '문의 양식',
        company: lang === 'ENG' ? 'Company Name' : '회사명',
        companyPlaceholder: lang === 'ENG' ? 'Your Company Ltd.' : '(주)OO기업',
        name: lang === 'ENG' ? 'Contact Person' : '담당자명',
        namePlaceholder: lang === 'ENG' ? 'Hong Gil-dong' : '홍길동',
        contactNum: lang === 'ENG' ? 'Phone Number' : '연락처',
        contactPlaceholder: lang === 'ENG' ? '+82-10-0000-0000' : '010-0000-0000',
        inquiryType: lang === 'ENG' ? 'Inquiry Type' : '문의 유형',
        opt1: lang === 'ENG' ? 'Product Purchase' : '제품 구매 문의',
        opt2: lang === 'ENG' ? 'Cutting & Processing' : '절단 가공 서비스',
        opt3: lang === 'ENG' ? 'Heat Treatment' : '열처리 / 홀가공',
        opt4: lang === 'ENG' ? 'Other' : '기타',
        message: lang === 'ENG' ? 'Message' : '문의 내용',
        messagePlaceholder: lang === 'ENG'
            ? 'Please describe the product specifications, quantity, and intended use.'
            : '필요한 제품 규격, 수량, 용도 등을 자유롭게 작성해 주세요.',
        submit: lang === 'ENG' ? 'Submit Inquiry' : '문의 보내기',
    };

    return (
        <>
            <Hero
                title={t.heroTitle}
                subtitle={t.heroSub}
                imageSrc="https://images.unsplash.com/photo-1554528148-93663a8a07c9?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-8">{t.heading}</h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">{t.desc}</p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{t.address}</h3>
                                        <p className="text-gray-600 whitespace-pre-line">{t.addressDetail}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{t.phone}</h3>
                                        <p className="text-gray-600">031-475-5549</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{t.email}</h3>
                                        <p className="text-gray-600">{t.emailDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.formTitle}</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.company}</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t.companyPlaceholder} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t.name}</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t.namePlaceholder} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contactNum}</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t.contactPlaceholder} />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.inquiryType}</label>
                                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                        <option>{t.opt1}</option>
                                        <option>{t.opt2}</option>
                                        <option>{t.opt3}</option>
                                        <option>{t.opt4}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.message}</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t.messagePlaceholder}></textarea>
                                </div>
                                <button type="button" className="w-full bg-blue-700 text-white font-bold py-4 rounded-md hover:bg-blue-800 transition-colors">
                                    {t.submit}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
