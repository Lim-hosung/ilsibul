'use client';

import CommonTabbedLayout from '@/components/layout/CommonTabbedLayout';

const aboutTabs = [
    { name: '회사개요', nameEn: 'Overview', href: '/about/intro' },
    { name: '연혁', nameEn: 'History', href: '/about/history' },
    { name: 'CEO 인사말', nameEn: 'CEO Message', href: '/about/ceo' },
    { name: '찾아오시는길', nameEn: 'Location', href: '/about/location' },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <CommonTabbedLayout
            titleKo="회사소개"
            titleEn="ABOUT US"
            descriptionKo="신뢰와 기술력을 바탕으로 성장하는 에이원특수강입니다."
            descriptionEn="A1 Special Steel growing based on trust and technology."
            bannerImage="/images/hero/office.jpg"
            tabs={aboutTabs}
        >
            {children}
        </CommonTabbedLayout>
    );
}
