import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { Target, Heart, Eye } from 'lucide-react';
import { CTASection } from '@/components/ui/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate Vision & Intro',
    description: 'A1 Special Steel corporate vision, core values and introduction.',
};

export default function IntroPage() {
    const values = [
        {
            title: 'Integrity',
            description: 'We conduct our business with the highest ethical standards, ensuring transparency in all our global operations.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'Excellence',
            description: 'We strive for perfection in every ingot we cast and every component we forge.',
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: 'Innovation',
            description: 'We continuously invest in R&D to pioneer the next generation of advanced materials.',
            icon: <Eye className="w-6 h-6" />
        }
    ];

    return (
        <div className="flex flex-col space-y-24 pt-12">

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            Building the Foundations \nof Modern Industry
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            A1 Special Steel is driven by a commitment to metallurgical excellence and a profound
                            responsibility to the industries that rely on our materials. We continuously invest in R&D
                            to pioneer the next generation of advanced materials.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Sustainability</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Innovation</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Excellence</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop"
                            alt="Sustainability"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 border-y border-gray-100 py-16">
                <FeatureGrid
                    title="Our Core Values"
                    features={values}
                    columns={3}
                />
            </section>

            <CTASection
                title="A Vision for the Future"
                description="Join us in shaping a sustainable and innovative industrial landscape."
                buttonText="Partner with Us"
                buttonHref="/contact"
            />
        </div>
    );
}
