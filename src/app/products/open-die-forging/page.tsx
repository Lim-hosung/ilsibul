import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { CTASection } from '@/components/ui/CTASection';
import { Anchor, Settings, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Open Die Forging',
    description: 'Large scale open die forging products for heavy industries.',
};

export default function OpenDieForgingPage() {
    const products = [
        {
            title: 'Marine Shafts',
            description: 'Propeller and intermediate shafts for commercial and naval vessels.',
            imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop'
        },
        {
            title: 'Power Generaton Rotors',
            description: 'Turbine and generator rotors for conventional and nuclear power plants.',
            imageUrl: 'https://images.unsplash.com/photo-1478059425650-ca13d6d422f4?w=800&auto=format&fit=crop'
        },
        {
            title: 'Industrial Rolls',
            description: 'Work rolls and backup rolls for steel mills and paper manufacturing.',
            imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop'
        }
    ];

    return (
        <div className="flex flex-col space-y-24 pt-12">

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            Massive Scale. \nMicroscopic Precision.
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            Utilizing some of the largest forging presses in the world, our Open Die Forging division shapes
                            massive steel ingots into critical components for heavy industry. Our integrated process
                            guarantees the structural integrity required for applications where failure is not an option.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Open_Die_Forging</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Heavy_Duty</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Custom_Forging</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2670&auto=format&fit=crop"
                            alt="Open Die Forging"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 border-y border-gray-100 py-16">
                <FeatureGrid
                    title="Major Forged Products"
                    features={products}
                    columns={3}
                />
            </section>

            <CTASection
                title="Discuss Your Custom Project"
                description="We specialize in forging custom geometries up to 150 tons."
                buttonText="Request a Quote"
            />
        </div>
    );
}
