'use client';

import CommonTabbedLayout from '@/components/layout/CommonTabbedLayout';

const supportTabs = [
    { name: '고객문의 / 견적의뢰', nameEn: 'Contact', href: '/contact', bannerImage: '/images/hero/3d-steel-1.png' },
    { name: '네트워크', nameEn: 'Network', href: '/network', bannerImage: '/images/hero/3d-steel-2.png' },
    { name: '카탈로그', nameEn: 'Catalog', href: '/catalog', bannerImage: '/images/hero/3d-steel-1.png' },
];

export default function SupportLayout({ children }: { children: React.ReactNode }) {
    return (
        <CommonTabbedLayout
            titleKo="고객지원"
            titleEn="SUPPORT"
            descriptionKo="고객의 성공을 위해 에이원특수강이 함께합니다."
            descriptionEn="A1 Special Steel is with you for your success."
            bannerTheme="teal"
            tabs={supportTabs}
        >
            {children}
        </CommonTabbedLayout>
    );
}
