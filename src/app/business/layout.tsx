'use client';

import CommonTabbedLayout from '@/components/layout/CommonTabbedLayout';

const businessTabs = [
    { name: '유통', nameEn: 'Distribution', href: '/business/distribution' },
    { name: '절단', nameEn: 'Cutting', href: '/business/cutting' },
    { name: '보유설비', nameEn: 'Equipment', href: '/business/equipment' },
    { name: '제품개발 솔루션', nameEn: 'Solutions', href: '/business/solution' },
    { name: '수출', nameEn: 'Export', href: '/business/export' },
];

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
    return (
        <CommonTabbedLayout
            titleKo="사업소개"
            titleEn="BUSINESS"
            descriptionKo="품질 경쟁력 확보를 위한 최적의 글로벌 자재 소싱 네트워크"
            descriptionEn="Optimal global material sourcing network for quality competitiveness"
            bannerImage="/images/hero/factory.jpg"
            tabs={businessTabs}
        >
            {children}
        </CommonTabbedLayout>
    );
}
