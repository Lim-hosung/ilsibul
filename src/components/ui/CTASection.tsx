import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    variant?: 'centered' | 'premium';
}

export function CTASection({
    title,
    description,
    buttonText = "Contact Us",
    buttonHref = "/contact",
    secondaryButtonText,
    secondaryButtonHref,
    variant = 'centered'
}: CTASectionProps) {
    if (variant === 'premium') {
        return (
            <section className="relative bg-blue-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
                    <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-white blur-3xl" />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-6">
                            {title}
                        </h2>

                        <p className="text-lg text-blue-100 font-medium leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4">
                        <Link
                            href={buttonHref}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 text-lg font-black rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all flex justify-center items-center"
                        >
                            {buttonText}
                        </Link>

                        {secondaryButtonText && secondaryButtonHref && (
                            <Link
                                href={secondaryButtonHref}
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-black rounded-xl hover:bg-white/10 transition-all flex justify-center items-center group"
                            >
                                {secondaryButtonText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    // Default 'centered' variant (Matched to rounded card style)
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 py-10">
            <div className="relative py-20 bg-blue-900 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-7xl mx-auto">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
                    <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-white blur-3xl" />
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                        {title}
                    </h2>

                    <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href={buttonHref}
                            className="w-full sm:w-auto px-10 py-4 bg-white text-blue-900 text-lg font-black rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all flex justify-center items-center"
                        >
                            {buttonText}
                        </Link>

                        {secondaryButtonText && secondaryButtonHref && (
                            <Link
                                href={secondaryButtonHref}
                                className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-black rounded-xl hover:bg-white/10 transition-all flex justify-center items-center group"
                            >
                                {secondaryButtonText}
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
