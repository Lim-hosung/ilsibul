import Link from 'next/link';
import { navItems } from '@/data/dummy';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-700 text-white rounded-sm flex items-center justify-center font-black">A1</div>
                            <span>Special Steel</span>
                        </Link>
                        <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                            Global leader in specialized steel manufacturing, providing premium materials and forging solutions for critical industries worldwide.
                        </p>
                        <div className="space-y-3 pt-4">
                            <div className="flex items-start text-sm">
                                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>123 Industrial Parkway, Seoul, South Korea 04512</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                                <span>+82 2-1234-5678</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                                <span>contact@a1specialsteel.example.com</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">Solutions</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products/special-steel" className="hover:text-white transition-colors">Special Steel</Link></li>
                            <li><Link href="/products/open-die-forging" className="hover:text-white transition-colors">Open Die Forging</Link></li>
                            <li><Link href="/products/nuclear" className="hover:text-white transition-colors">Nuclear Materials</Link></li>
                            <li><Link href="/applications/energy" className="hover:text-white transition-colors">Energy Capabilities</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about/intro" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/about/news" className="hover:text-white transition-colors">News & Media</Link></li>
                            <li><Link href="/technology/rnd" className="hover:text-white transition-colors">R&D Center</Link></li>
                            <li><Link href="/about/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/catalog" className="hover:text-white transition-colors">Catalogs</Link></li>
                            <li><Link href="/report" className="hover:text-white transition-colors">Test Reports</Link></li>
                            <li><Link href="/network" className="hover:text-white transition-colors">Global Network</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                        </ul>
                        <div className="mt-8 flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                                <Linkedin className="w-4 h-4" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                                <Twitter className="w-4 h-4" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} A1 Special Steel Co., Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
