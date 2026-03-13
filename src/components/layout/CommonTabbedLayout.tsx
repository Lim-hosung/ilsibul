'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/LanguageContext';

interface TabItem {
    name: string;
    nameEn: string;
    href: string;
}

interface CommonTabbedLayoutProps {
    children: React.ReactNode;
    titleKo: string;
    titleEn: string;
    descriptionKo: string;
    descriptionEn: string;
    bannerImage: string;
    tabs: TabItem[];
}

export default function CommonTabbedLayout({
    children,
    titleKo,
    titleEn,
    descriptionKo,
    descriptionEn,
    bannerImage,
    tabs,
}: CommonTabbedLayoutProps) {
    const pathname = usePathname();
    const { lang } = useLang();

    const title = lang === 'ENG' ? titleEn : titleKo;
    const description = lang === 'ENG' ? descriptionEn : descriptionKo;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
            {/* 1. Hero Banner Area */}
            <div className="relative w-full h-[280px] md:h-[350px] flex items-center justify-center overflow-hidden">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={bannerImage}
                        alt={`${title} banner`}
                        className="w-full h-full object-cover filter brightness-[0.4]"
                    />
                </div>

                {/* Text Content */}
                <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight whitespace-pre-line">
                        {title}
                    </h1>
                    <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto font-medium whitespace-pre-line">
                        {description}
                    </p>
                </div>
            </div>

            {/* 2. Sticky Tab Navigation */}
            <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto hide-scrollbar">
                        <div className="flex space-x-8 min-w-max mx-auto py-4">
                            {tabs.map((tab) => {
                                const isActive = pathname === tab.href;
                                return (
                                    <Link
                                        key={tab.href}
                                        href={tab.href}
                                        className={`relative px-2 py-2 text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap ${isActive
                                            ? 'text-blue-700'
                                            : 'text-gray-500 hover:text-gray-900'
                                            }`}
                                    >
                                        {lang === 'ENG' ? tab.nameEn : tab.name}

                                        {/* Active Underline */}
                                        {isActive && (
                                            <span className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-blue-700 rounded-t-md" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Page Content Area */}
            <div className="flex-grow w-full bg-white">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Fade in wrapper for content */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
