'use client';

import CommonTabbedLayout from '@/components/layout/CommonTabbedLayout';

const productsTabs = [
    { name: '특수강', nameEn: 'Special Steel', href: '/products/special-steel' },
    { name: '이차가공재', nameEn: 'Secondary Steel', href: '/products/secondary' },
    { name: '대형단조', nameEn: 'Large Forging', href: '/products/large-forging' },
    { name: '형단조', nameEn: 'Die Forging', href: '/products/die-forging' },
];

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <CommonTabbedLayout
            titleKo="제품소개"
            titleEn="PRODUCTS"
            descriptionKo="엄격한 품질관리가 적용된 최고의 특수강 및 단조 제품 라인업"
            descriptionEn="Premium special steel & forged product lineup under strict quality control"
            bannerImage="/images/hero/special_steel.jpg"
            tabs={productsTabs}
        >
            {children}
        </CommonTabbedLayout>
    );
}
