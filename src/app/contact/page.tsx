'use client';
import { Hero } from '@/components/ui/Hero';
import { useLang } from '@/lib/LanguageContext';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactPage() {
    const { lang } = useLang();

    const t = {
        title: lang === 'ENG' ? 'Contact Us Anytime.\nWe Respond Quickly.' : '언제든지 연락 주세요.\n빠르게 답변 드립니다',
        desc: lang === 'ENG'
            ? 'We provide expert consultations not only on product specifications, quantity, and delivery inquiries, but also on material selection and processing direction. Submit your quote request through the form below and our representative will contact you promptly.'
            : '제품 사양, 수량, 납기에 관한 문의는 물론, 소재 선정부터 가공 방향까지 전문 상담을 제공합니다. 아래 양식을 통해 견적을 의뢰해 주시면 담당자가 신속하게 연락드리겠습니다.',
        name: lang === 'ENG' ? 'Name / Company' : '이름 / 회사명',
        email: lang === 'ENG' ? 'Email' : '이메일',
        phone: lang === 'ENG' ? 'Phone' : '연락처',
        product: lang === 'ENG' ? 'Product / Grade of Interest' : '관심 제품 / 강종',
        message: lang === 'ENG' ? 'Inquiry / Request for Quote' : '문의 내용 / 견적 의뢰',
        submit: lang === 'ENG' ? 'Submit Inquiry' : '문의 보내기',
    };

    return (
        <>
            <Hero
                title={t.title}
                imageSrc="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&auto=format&fit=crop"
                size="sm"
            />
            <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 mb-4">
                                {lang === 'ENG' ? 'Contact Information' : '연락처 안내'}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">{t.desc}</p>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 mb-1">{lang === 'ENG' ? 'Phone' : '전화'}</p>
                                    <a href="tel:031-475-5549" className="font-bold text-gray-900 hover:text-blue-700 transition-colors text-lg">031-475-5549</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 mb-1">{lang === 'ENG' ? 'Address' : '주소'}</p>
                                    <p className="font-medium text-gray-900">
                                        {lang === 'ENG' ? '145 Mayu-ro, Siheung-si, Gyeonggi-do' : '경기도 시흥시 마유로 145'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/about/location"
                            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
                        >
                            {lang === 'ENG' ? 'View directions' : '찾아오시는길 보기'}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.name}</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.email}</label>
                                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.phone}</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.product}</label>
                                    <input type="text" placeholder="S45C, SCM440 등" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t.message}</label>
                                <textarea rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-lg"
                            >
                                {t.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
