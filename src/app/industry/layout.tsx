'use client';

import CommonTabbedLayout from '@/components/layout/CommonTabbedLayout';

const industryTabs = [
    { name: '중장비', nameEn: 'Heavy Equipment', href: '/industry/heavy-equipment', bannerImage: '/images/hero/3d-steel-2.png' },
    { name: '자동차', nameEn: 'Automotive', href: '/industry/automotive', bannerImage: '/images/hero/3d-steel-1.png' },
    { name: '방산', nameEn: 'Defense', href: '/industry/defense', bannerImage: '/images/hero/3d-steel-2.png' },
    { name: '조선', nameEn: 'Shipbuilding', href: '/industry/shipbuilding', bannerImage: '/images/hero/3d-steel-1.png' },
    { name: '에너지', nameEn: 'Energy', href: '/industry/energy', bannerImage: '/images/hero/3d-steel-2.png' },
];

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
    return (
        <CommonTabbedLayout
            titleKo="적용산업"
            titleEn="INDUSTRY"
            descriptionKo="다양한 핵심 산업 분야에 중추적인 역할을 담당하는 기초 소재"
            descriptionEn="Base materials playing a pivotal role in various core industries"
            bannerTheme="indigo"
            tabs={industryTabs}
        >
            {children}
        </CommonTabbedLayout>
    );
}
