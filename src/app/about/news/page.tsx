import { Hero } from '@/components/ui/Hero';
import { CardList } from '@/components/ui/CardList';
import { dummyNews } from '@/data/dummy';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'News & Media',
    description: 'Latest news, press releases, and media updates from A1 Special Steel.',
};

export default function NewsPage() {
    const newsItems = dummyNews.map(news => ({
        ...news,
        href: `/about/news` // Linking to same page for dummy purposes
    }));

    return (
        <>
            <Hero
                title="News & Media"
                subtitle="Latest updates and press releases from A1 Special Steel."
                imageSrc="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&auto=format&fit=crop"
                size="sm"
            />

            <div className="min-h-[50vh]">
                <CardList
                    items={newsItems}
                />
            </div>
        </>
    );
}
