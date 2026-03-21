'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export function Footer() {
    const { lang } = useLang();

    const t = {
        desc: lang === 'ENG'
            ? 'Official SeAH Besteel dealer specializing in special steel bar distribution, cutting processing, and total solutions for Korean industry.'
            : '세아베스틸 공식 대리점.\n특수강 봉강 유통·절단 가공·토털 솔루션 전문기업.',
        address: lang === 'ENG' ? '146 Mayu-ro, Siheung-si, Gyeonggi-do' : '경기도 시흥시 마유로 146',
        copy: lang === 'ENG'
            ? `© ${new Date().getFullYear()} A1 Special Steel Co., Ltd. All rights reserved.`
            : `© ${new Date().getFullYear()} ㈜에이원특수강. All rights reserved.`,
        privacy: lang === 'ENG' ? 'Privacy Policy' : '개인정보처리방침',
        terms: lang === 'ENG' ? 'Terms of Use' : '이용약관',
        sitemap: 'Sitemap',
        colProducts: lang === 'ENG' ? 'Products' : '제품',
        colCompany: lang === 'ENG' ? 'Company' : '회사',
        colResources: lang === 'ENG' ? 'Resources' : '자료',
        compItems: lang === 'ENG'
            ? ['About Us', 'News & Media', 'History', 'Contact']
            : ['회사 소개', '뉴스', '회사 연혁', '문의하기'],
        compHrefs: ['/about/intro', '/about/news', '/about/history', '/contact'],
        resItems: lang === 'ENG'
            ? ['E-Catalog', 'Network', 'Contact Support']
            : ['E-카탈로그', '네트워크', '고객 지원'],
        resHrefs: ['/catalog', '/network', '/contact'],
    };

    const prodHrefs = [
        '/products/special-steel',
        '/products/secondary',
        '/products/large-forging',
        '/products/die-forging',
    ];
    const prodItemsKOR = ['특수강', '이차가공재', '대형단조', '형단조'];
    const prodItemsENG = ['Special Steel', 'Secondary Steel', 'Large Forging', 'Die Forging'];
    const prodItems = lang === 'ENG' ? prodItemsENG : prodItemsKOR;

    return (
        <footer className="bg-gray-950 text-gray-300 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Brand block */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center">
                            <div className="bg-white p-2 rounded-lg inline-flex">
                                <img src="/images/logo.png" alt="A1 특수강 로고" className="h-10 w-auto object-contain" />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm leading-relaxed whitespace-pre-line">{t.desc}</p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start text-sm">
                                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>{t.address}</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                                <span>031-475-5549</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                                <span>contact@a1specialsteel.example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t.colProducts}</h4>
                        <ul className="space-y-3 text-sm">
                            {prodItems.map((item, i) => (
                                <li key={i}>
                                    <Link href={prodHrefs[i]} className="hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t.colCompany}</h4>
                        <ul className="space-y-3 text-sm">
                            {t.compItems.map((item, i) => (
                                <li key={i}>
                                    <Link href={t.compHrefs[i]} className="hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t.colResources}</h4>
                        <ul className="space-y-3 text-sm">
                            {t.resItems.map((item, i) => (
                                <li key={i}>
                                    <Link href={t.resHrefs[i]} className="hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>{t.copy}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t.terms}</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">{t.sitemap}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
