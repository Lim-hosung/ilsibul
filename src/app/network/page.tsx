'use client';

import { Hero } from '@/components/ui/Hero';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <Hero
                title="Contact Us"
                subtitle="Our global team is ready to assist you."
                imageSrc="https://images.unsplash.com/photo-1554528148-93663a8a07c9?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-8">Get In Touch</h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                Whether you need technical specifications, a custom forging quote, or investor relations information,
                                our dedicated representatives are available worldwide.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Global Headquarters</h3>
                                        <p className="text-gray-600">123 Industrial Parkway<br />Seoul, South Korea 04512</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">Sales: +82 2-1234-5678<br />Support: +82 2-1234-5679</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">sales@a1specialsteel.example.com<br />info@a1specialsteel.example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (Dummy) */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                        <option>Sales Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Investor Relations</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="w-full bg-blue-700 text-white font-bold py-4 rounded-md hover:bg-blue-800 transition-colors">
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
