import { Hero } from '@/components/ui/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Corporate History',
    description: 'The timeline and history of A1 Special Steel.',
};

export default function HistoryPage() {
    const milestones = [
        { year: '2025', title: 'Global Expansion', desc: 'Opened new automated forging facility in Europe to serve the aerospace sector.' },
        { year: '2020', title: 'Nuclear Certification', desc: 'Achieved full ASME NPT certification for nuclear vessel materials.' },
        { year: '2015', title: 'R&D Center Launch', desc: 'Established the Advanced Materials Research Center to pioneer new alloy grades.' },
        { year: '2005', title: 'Public Listing', desc: 'Listed on the primary stock exchange, reflecting our growth and transparency.' },
        { year: '1990', title: 'First 10,000 Ton Press', desc: 'Installed our first ultra-heavy hydraulic press, entering the global heavy forging market.' },
        { year: '1975', title: 'Foundation', desc: 'A1 Special Steel was established, focusing initially on domestic tool steel production.' },
    ];

    return (
        <>
            <Hero
                title="Our History"
                subtitle="A half-century legacy of metallurgical excellence."
                imageSrc="https://images.unsplash.com/photo-1528189689849-db376043d9b4?w=1600&auto=format&fit=crop"
                size="sm"
            />

            <div className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="space-y-12">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="relative flex gap-8 group">
                                {/* Line */}
                                <div className="absolute left-8 top-12 bottom-[-3rem] w-0.5 bg-gray-200 group-last:hidden"></div>

                                {/* Year Badge */}
                                <div className="relative shrink-0 w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center z-10 text-blue-700 font-bold">
                                    {milestone.year}
                                </div>

                                {/* Content */}
                                <div className="pt-3 pb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
