import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { Shield, Zap, Wrench } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Special Steel Products',
    description: 'High-performance special alloy steel for critical industrial applications.',
};

export default function SpecialSteelPage() {
    const features = [
        {
            title: 'Alloy Steel',
            description: 'Engineered for exceptional toughness and wear resistance, ideal for heavy machinery components.',
            icon: <Wrench className="w-6 h-6" />
        },
        {
            title: 'Tool Steel',
            description: 'High hardness and abrasion resistance for manufacturing cutting tools and molds.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'Stainless Steel',
            description: 'Corrosion-resistant grades formulated for chemical processing and marine environments.',
            icon: <Shield className="w-6 h-6" />
        }
    ];

    return (
        <>
            <Hero
                title="Special Steel"
                subtitle="Uncompromising Performance for Demanding Environments"
                imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 leading-relaxed">
                <p>
                    A1 Special Steel is a global leader in the production of high-grade alloy and special steels.
                    Our advanced metallurgical processes ensure that every ton of steel we produce meets the most
                    stringent international standards. From automotive drivetrains to aerospace components, our
                    specialty materials form the backbone of modern industry.
                </p>
            </div>

            <FeatureGrid
                title="Key Product Categories"
                features={features}
                columns={3}
            />

            <CTASection
                title="Inquire About Specifications"
                description="Our engineering team is ready to help you select the exact steel grade for your application."
                buttonText="Contact Sales"
            />
        </>
    );
}
