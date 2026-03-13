'use client';

import { CardList } from '@/components/ui/CardList';
import { dummyNews } from '@/data/dummy';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

export default function NewsPage() {
    const { lang } = useLang();

    return (
        <div className="flex flex-col space-y-24 pt-12">

            <div className="min-h-[50vh]">
                <CardList
                    items={dummyNews}
                />
            </div>

            <CTASection
                title={lang === 'ENG' ? 'Stay Updated' : '에이원특수강의 소식'}
                description={lang === 'ENG'
                    ? 'Subscribe to our newsletter for the latest metal market insights.'
                    : '철강 시장의 최신 동향과 신제품 소식을 가장 먼저 받아보세요.'}
                buttonText={lang === 'ENG' ? 'Subscribe' : '구독하기'}
                buttonHref="/contact"
            />
        </div>
    );
}
