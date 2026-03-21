'use client';

import CommonTabbedLayout from '@/components/layout/CommonTabbedLayout';

const businessTabs = [
    { name: '유통', nameEn: 'Distribution', href: '/business/distribution', bannerImage: '/images/business-banner.png' },
    { name: '절단', nameEn: 'Cutting', href: '/business/cutting', bannerImage: '/images/business-banner.png' },
    { name: '보유설비', nameEn: 'Equipment', href: '/business/equipment', bannerImage: '/images/business-banner.png' },
    { name: '제품개발 솔루션', nameEn: 'Solutions', href: '/business/solution', bannerImage: '/images/business-banner.png' },
    { name: '수출', nameEn: 'Export', href: '/business/export', bannerImage: '/images/business-banner.png' },
];

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
    return (
        <CommonTabbedLayout
            titleKo="사업소개"
            titleEn="BUSINESS"
            descriptionKo="품질 경쟁력 확보를 위한 최적의 글로벌 자재 소싱 네트워크"
            descriptionEn="Optimal global material sourcing network for quality competitiveness"
            bannerTheme="normal"
            tabs={businessTabs}
            bannerImage="/images/business-banner.png"
        >
            {children}
        </CommonTabbedLayout>
    );
}
