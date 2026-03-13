import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { ShieldCheck, Target, Activity } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nuclear & Die Forging',
    description: 'Precision forged materials for energy and automotive.',
};

export default function NuclearDieForgingPage() {
    const capabilities = [
        {
            title: 'ASME Certified',
            description: 'Full compliance with international nuclear material standards.',
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            title: 'Precision Tolerances',
            description: 'Near-net shape forging reducing machining time and material waste.',
            icon: <Target className="w-6 h-6" />
        },
        {
            title: 'NDE Testing',
            description: '100% volumetric non-destructive examination on critical parts.',
            icon: <Activity className="w-6 h-6" />
        }
    ];

    return (
        <div className="flex flex-col space-y-24 pt-12">

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            The Highest Standard \nof Reliability
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            Delivering zero-defect solutions for the most critical industrial sectors. Our nuclear materials
                            are trusted in reactor vessels worldwide, while our precision die forging lines produce
                            high-strength components for the global automotive and aerospace supply chains.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Nuclear_Power</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#ASME_Certified</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Zero_Defect</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop"
                            alt="Nuclear & Die Forging"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16">
                <FeatureGrid
                    title="Quality Assurance & Capabilities"
                    features={capabilities}
                    columns={3}
                />
            </section>

            <CTASection
                title="Need Technical Documentation?"
                description="Access our material test reports and certification documents."
                buttonText="View Reports"
                buttonHref="/report"
            />
        </div>
    );
}
