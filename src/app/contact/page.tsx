'use client';

import { Hero } from '@/components/ui/Hero';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
    return (
        <>
            <Hero
                title="문의하기"
                subtitle="특수강 봉강 구매, 절단 가공, 열처리 등 모든 문의를 환영합니다."
                imageSrc="https://images.unsplash.com/photo-1554528148-93663a8a07c9?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-8">에이원특수강에 문의하세요</h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                특수강 봉강 구매 문의, 절단 가공 서비스, 열처리 협력 등 모든 사항을
                                상담해 드립니다. 세아베스틸 공식 대리점 에이원특수강이 도움을 드리겠습니다.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">주소</h3>
                                        <p className="text-gray-600">경기도 시흥시 마유로 145<br />㈜에이원특수강</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">전화</h3>
                                        <p className="text-gray-600">031-475-5549</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">이메일</h3>
                                        <p className="text-gray-600">문의 양식을 통해 연락주세요.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (Dummy) */}
                        <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">문의 양식</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(주)OO기업" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">담당자명</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="홍길동" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">연락처</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="010-0000-0000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">문의 유형</label>
                                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                                        <option>제품 구매 문의</option>
                                        <option>절단 가공 서비스</option>
                                        <option>열처리 / 홀가공</option>
                                        <option>기타</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">문의 내용</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="필요한 제품 규격, 수량, 용도 등을 자유롭게 작성해 주세요."></textarea>
                                </div>
                                <button type="button" className="w-full bg-blue-700 text-white font-bold py-4 rounded-md hover:bg-blue-800 transition-colors">
                                    문의 보내기
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
