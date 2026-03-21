'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navItems, navItemsKOR } from '@/data/dummy';
import { useLang } from '@/lib/LanguageContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
    const { lang, setLang } = useLang();
    const pathname = usePathname();

    const currentNavItems = lang === 'ENG' ? navItems : navItemsKOR;

    useEffect(() => {
        setIsMenuOpen(false);
        setIsMegaMenuOpen(false);
        setOpenSubMenus({});
    }, [pathname]);

    const toggleSubMenu = (menuName: string) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
                onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
                <div className="w-full px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-20 relative">
                        {/* Logo - Far Left */}
                        <div className="flex-shrink-0 flex items-center relative z-50">
                            <Link href="/" className="flex items-center">
                                <img src="/images/logo.png" alt="A1 특수강 로고" className="h-10 w-auto object-contain" />
                            </Link>
                        </div>

                        <nav
                            className="hidden lg:block absolute top-0 left-0 w-full h-full"
                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                        >
                            <div className="max-w-[85rem] mx-auto h-full px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-4 gap-8 h-full items-center">
                                <div className="col-span-1 pr-10 border-r border-transparent" /> {/* Spacer to align with Mega Menu banner */}
                                <div className="col-span-3 grid grid-cols-5 gap-8 h-full">
                                    {currentNavItems.map(item => (
                                        <Link 
                                            key={item.name} 
                                            href={item.href}
                                            className="h-full flex items-center justify-start group cursor-pointer"
                                            onClick={() => setIsMegaMenuOpen(false)}
                                        >
                                            <span className="text-gray-800 font-bold text-lg hover:text-blue-700 transition-colors">
                                                {item.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </nav>

                        {/* Right side: ENG/KOR toggle + Hamburger - Far Right */}
                        <div className="flex items-center gap-4 relative z-50">
                            {/* Language Toggle */}
                            <div className="flex items-center gap-1 text-sm font-bold z-50">
                                <button
                                    className={`px-2 py-1 rounded transition-colors ${lang === 'ENG' ? 'text-blue-700 bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
                                    onClick={() => setLang('ENG')}
                                >
                                    ENG
                                </button>
                                <span className="text-gray-200">|</span>
                                <button
                                    className={`px-2 py-1 rounded transition-colors ${lang === 'KOR' ? 'text-blue-700 bg-blue-50' : 'text-gray-400 hover:text-gray-700'}`}
                                    onClick={() => setLang('KOR')}
                                >
                                    KOR
                                </button>
                            </div>

                            {/* Hamburger */}
                            <button
                                type="button"
                                className="lg:hidden p-2 rounded-md text-gray-900 hover:text-blue-700 hover:bg-gray-100 focus:outline-none transition-colors z-50"
                                onClick={() => setIsMenuOpen(true)}
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`hidden lg:block absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${isMegaMenuOpen ? 'max-h-[600px] opacity-100 border-b' : 'max-h-0 opacity-0 border-b-0'}`}
                >
                    <div className="w-full pt-2 pb-10">
                        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-4 gap-8">
                                {/* Static Info Column / Banner - Column 1 */}
                                <div className="col-span-1 pr-10 border-r border-gray-100 flex flex-col">
                                    <div>
                                        <Link
                                            href="/about"
                                            className="block relative rounded-xl overflow-hidden mb-6 group aspect-square"
                                            onClick={() => setIsMegaMenuOpen(false)}
                                        >
                                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors z-10" />
                                            <img
                                                src="/images/about/company-exterior.png"
                                                alt="에이원특수강 전경"
                                                className="absolute inset-0 w-full h-full object-cover opacity-90"
                                            />
                                            <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                                                <div>
                                                    <div className="w-8 h-1 bg-blue-400 mb-3" />
                                                    <h3 className="text-white font-bold text-lg leading-snug tracking-tight">
                                                        {lang === 'ENG' ? 'A1 Special Steel' : '에이원 특수강'}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center text-blue-100 text-xs font-bold mt-4 group-hover:text-white transition-colors">
                                                    {lang === 'ENG' ? 'Learn More' : '회사소개 보기'}
                                                    <ChevronRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                        <p className="text-lg text-black font-bold leading-relaxed mt-10">
                                            {lang === 'ENG' ? 'New standards for special steel distribution.' : '특수강 유통 및 가공의 새로운 기준'}
                                        </p>
                                    </div>
                                </div>

                                {/* Menu Columns - Column 2-4 */}
                                <div className="col-span-3 grid grid-cols-5 gap-8">
                                    {currentNavItems.map(item => (
                                        <div key={item.name} className="flex flex-col">
                                            <div className="flex flex-col space-y-3">
                                                {item.submenu ? (
                                                    item.submenu.map(sub => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="text-sm font-semibold text-gray-500 hover:text-blue-700 transition-colors inline-block w-fit"
                                                            onClick={() => setIsMegaMenuOpen(false)}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        className="text-sm font-semibold text-gray-500 hover:text-blue-700 transition-colors inline-block w-fit"
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                    >
                                                        {lang === 'ENG' ? 'Go to ' : ''}{item.name}{lang === 'ENG' ? '' : ' 바로가기'}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Quick Links Action Bar */}
                    <div className="bg-gray-50 border-t border-gray-100 px-8 py-4">
                        <div className="max-w-7xl mx-auto flex justify-end space-x-8">
                            <Link href="/catalog" className="text-sm font-bold text-gray-600 hover:text-blue-700 transition-colors" onClick={() => setIsMegaMenuOpen(false)}>
                                {lang === 'ENG' ? 'E-Catalog' : 'E-카탈로그 다운로드'}
                            </Link>
                            <Link href="/contact" className="text-sm font-bold text-gray-600 hover:text-blue-700 transition-colors" onClick={() => setIsMegaMenuOpen(false)}>
                                {lang === 'ENG' ? 'Contact Us' : '제품 문의하기'}
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Right Sliding Floating Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-gray-50 shadow-2xl z-[100] transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Menu Header */}
                <div className="flex justify-between items-center px-8 h-20 border-b border-gray-200 bg-white flex-shrink-0">
                    <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <img src="/images/logo.png" alt="A1 특수강 로고" className="h-9 w-auto object-contain" />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-500 hover:text-gray-900 transition-colors p-1"
                    >
                        <X className="h-8 w-8" />
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>

                {/* Main Navigation List */}
                <div className="flex-grow overflow-y-auto px-8 py-10">
                    <nav className="space-y-8">
                        {currentNavItems.map((item, index) => (
                            <div
                                key={item.name}
                                className={`border-b border-gray-100 pb-4 last:border-0 pl-2 transition-all duration-500 transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: isMenuOpen ? `${100 + index * 75}ms` : '0ms' }}
                            >
                                <div className="flex items-center justify-between">
                                    {item.submenu ? (
                                        <button
                                            onClick={() => toggleSubMenu(item.name)}
                                            className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-blue-700 tracking-tight transition-colors inline-flex items-center gap-3 w-full text-left"
                                        >
                                            {item.name}
                                            <ChevronRight className={`w-6 h-6 transition-transform duration-300 ml-auto flex-shrink-0 ${openSubMenus[item.name] ? 'rotate-90 text-blue-700' : 'text-gray-400'}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-blue-700 tracking-tight transition-colors inline-block"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>

                                {item.submenu && (() => {
                                    const navItem = item as { tagline?: string; description?: string; submenu: { name: string; href: string }[] };
                                    return (
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubMenus[item.name] ? 'max-h-[480px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            {navItem.tagline && (
                                                <div className="mb-4 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                                                    <p className="text-sm font-bold text-blue-800 mb-1">{'"'}{navItem.tagline}{'"'}</p>
                                                    {navItem.description && (
                                                        <p className="text-xs text-blue-700 leading-relaxed">{navItem.description}</p>
                                                    )}
                                                </div>
                                            )}
                                            <div className="pl-4 border-l-2 border-blue-100 space-y-3">
                                                {item.submenu.map((sub, subIndex) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className={`block text-base font-semibold text-gray-500 hover:text-blue-700 transition-all duration-300 transform ${openSubMenus[item.name] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                                                        style={{ transitionDelay: openSubMenus[item.name] ? `${subIndex * 50}ms` : '0ms' }}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Menu Footer */}
                <div className="px-8 py-8 bg-gray-100 border-t border-gray-200 mt-auto">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                        {lang === 'ENG' ? 'QUICK LINKS' : '빠른 참조'}
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 font-medium">
                        <Link href="/contact" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Contact Us' : '제품 문의'}
                        </Link>
                        <Link href="/catalog" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'E-Catalog' : 'E-카탈로그'}
                        </Link>
                        <Link href="/network" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Network' : '네트워크'}
                        </Link>
                        <Link href="/about/intro" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'About Us' : '회사 소개'}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
