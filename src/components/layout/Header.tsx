'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { navItems, navItemsKOR } from '@/data/dummy';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
    const [lang, setLang] = useState<'ENG' | 'KOR'>('ENG');
    const pathname = usePathname();

    const currentNavItems = lang === 'ENG' ? navItems : navItemsKOR;

    // Close menus on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setOpenSubMenus({});
    }, [pathname]);

    const toggleSubMenu = (menuName: string) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    // Prevent scrolling when menu is open
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
            <header className={`fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300`}>
                <div className="w-full px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-900 flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-700 text-white rounded-sm flex items-center justify-center font-black">A1</div>
                                <span>Special Steel</span>
                            </Link>
                        </div>

                        {/* Hamburger Menu Button */}
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="p-2 -mr-2 rounded-md text-gray-900 hover:text-blue-700 hover:bg-gray-100 focus:outline-none transition-colors"
                                onClick={() => setIsMenuOpen(true)}
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Right Sliding Floating Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-gray-50 shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Menu Header */}
                <div className="flex justify-between items-center px-8 py-8 border-b border-gray-200 bg-white">
                    <div className="flex gap-4 text-sm font-bold text-gray-500">
                        <button
                            className={`transition-colors ${lang === 'ENG' ? 'text-blue-700' : 'hover:text-gray-900'}`}
                            onClick={() => setLang('ENG')}
                        >
                            ENG
                        </button>
                        <button
                            className={`transition-colors ${lang === 'KOR' ? 'text-blue-700' : 'hover:text-gray-900'}`}
                            onClick={() => setLang('KOR')}
                        >
                            KOR
                        </button>
                    </div>
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
                        {currentNavItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-100 pb-4 last:border-0 pl-2">
                                <div className="flex items-center justify-between">
                                    <Link
                                        href={item.href}
                                        className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-blue-700 tracking-tight transition-colors inline-block"
                                    >
                                        {item.name}
                                    </Link>

                                    {item.submenu && (
                                        <button
                                            onClick={() => toggleSubMenu(item.name)}
                                            className="p-2 text-gray-400 hover:text-blue-700 transition-colors"
                                        >
                                            <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${openSubMenus[item.name] ? 'rotate-90 text-blue-700' : ''}`} />
                                        </button>
                                    )}
                                </div>

                                {/* Inner Dropdown Submenu */}
                                {item.submenu && (
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubMenus[item.name] ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-4 border-l-2 border-blue-100 space-y-3">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="block text-base font-semibold text-gray-500 hover:text-blue-700 transition-colors py-1"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Menu Footer */}
                <div className="px-8 py-8 bg-gray-100 border-t border-gray-200 mt-auto">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">
                        {lang === 'ENG' ? 'QUICK LINKS' : '빠른 참조 (QUICK LINKS)'}
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 font-medium">
                        <Link href="/contact" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Reservation System' : '비즈니스 상담 예약'}
                        </Link>
                        <Link href="/privacy" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Privacy Policy' : '개인정보처리방침'}
                        </Link>
                        <Link href="/catalog" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'E-Catalog' : 'E-카탈로그'}
                        </Link>
                        <Link href="/terms" className="hover:text-blue-700 transition-colors">
                            {lang === 'ENG' ? 'Terms of Service' : '이용약관'}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
