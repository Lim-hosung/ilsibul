'use client';

import { useLang } from '@/lib/LanguageContext';
import { navItemsKOR, navItems } from '@/data/dummy';
import Link from 'next/link';

export default function SitemapPage() {
    const { lang } = useLang();
    const isEng = lang === 'ENG';
    const items = isEng ? navItems : navItemsKOR;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[60vh]">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                    {isEng ? 'Sitemap' : '사이트맵'}
                </h1>
                <p className="text-gray-500 text-lg">
                    {isEng 
                        ? 'Explore all the pages and services of A1 Special Steel.' 
                        : '에이원특수강의 모든 메뉴와 서비스를 한눈에 확인하실 수 있습니다.'}
                </p>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-8" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                {items.map((category) => (
                    <div key={category.name} className="space-y-6">
                        <Link 
                            href={category.href}
                            className="text-xl font-black text-blue-900 hover:text-blue-700 transition-colors block border-b-2 border-gray-100 pb-4"
                        >
                            {category.name}
                        </Link>
                        <ul className="space-y-4">
                            {category.submenu.map((sub) => (
                                <li key={sub.name}>
                                    <Link 
                                        href={sub.href}
                                        className="text-gray-600 hover:text-blue-600 transition-colors text-base md:text-lg flex items-center group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-400 group-hover:scale-125 transition-all" />
                                        {sub.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
