import { Hero } from '@/components/ui/Hero';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { ShieldCheck, Target, Activity } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Die Forging',
    description: 'Precision forged materials for energy and automotive.',
};

export default function DieForgingPage() {
    const capabilities = [
        {
            title: 'High-Volume Production',
            description: 'Automated die forging lines capable of producing millions of identical parts annually.',
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: 'Precision Tolerances',
            description: 'Near-net shape forging reducing machining time and material waste.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'Enhanced Material Flow',
            description: 'Optimized grain structure for superior strength-to-weight ratios in critical components.',
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    return (
        <>
            <Hero
                title="Die Forging"
                subtitle="Precision and Strength at Scale"
                imageSrc="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&auto=format&fit=crop"
            />

            <div className="py-20 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg text-gray-600 leading-relaxed">
                <p>
                    Our Die Forging division utilizes advanced closed-die techniques to produce high-strength,
                    precision components for the automotive, aerospace, and heavy machinery sectors.
                    By controlling the grain flow of the steel, we deliver parts that withstand extreme stress and fatigue.
                </p>
            </div>

            <FeatureGrid
                title="Capabilities & Advantages"
                features={capabilities}
                columns={3}
            />

            <CTASection
                title="Require High-Volume Forgings?"
                description="Discuss your production requirements with our engineering team."
                buttonText="Contact Sales"
            />
        </>
    );
}
