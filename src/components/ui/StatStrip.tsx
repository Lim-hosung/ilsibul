interface StatItem {
    label: string;
    value: string;
    suffix?: string;
}

interface StatStripProps {
    stats: StatItem[];
    theme?: 'light' | 'dark' | 'blue';
}

export function StatStrip({ stats, theme = 'dark' }: StatStripProps) {
    const themeClasses = {
        light: 'bg-white text-gray-900 border-y border-gray-100',
        dark: 'bg-gray-950 text-white',
        blue: 'bg-blue-700 text-white'
    };

    const labelClasses = {
        light: 'text-gray-500',
        dark: 'text-gray-400',
        blue: 'text-blue-100'
    };

    return (
        <div className={`${themeClasses[theme]} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                            <div className="flex items-baseline justify-center font-black tracking-tighter mb-2">
                                <span className="text-4xl md:text-5xl lg:text-6xl">{stat.value}</span>
                                {stat.suffix && <span className="text-xl md:text-2xl font-bold ml-1">{stat.suffix}</span>}
                            </div>
                            <span className={`text-sm md:text-base font-medium tracking-wide ${labelClasses[theme]}`}>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
