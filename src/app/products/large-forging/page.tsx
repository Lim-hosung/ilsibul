'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

const steelTable = [
    { part: '발전기 로터 · 터빈 샤프트', partENG: 'Generator Rotor · Turbine Shaft', grade: 'SNCM630 · SNCM439', descKOR: 'Ni-Cr-Mo 고합금 대형 단조강, 대단면 균일 인성 확보', descENG: 'Ni-Cr-Mo high alloy large forging, uniform toughness in large sections' },
    { part: '선박 추진축 · 중간축', partENG: 'Propulsion Shaft · Intermediate Shaft', grade: 'SNCM630 · SCM440', descKOR: '해수 환경 내식성 + 고강도, 대형 단조 가공 최적', descENG: 'Seawater corrosion resistance + high strength, optimal for large forging' },
    { part: '방산 대형 구조재', partENG: 'Defense Large Structure', grade: 'SNCM447 · SNC836', descKOR: '극한 충격·하중 대응, 엄격한 품질 추적 가능', descENG: 'Withstands extreme impact & loads, strict quality traceability' },
    { part: '산업기계 프레임 · 베드', partENG: 'Industrial Machine Frame · Bed', grade: 'S45C · SCM440', descKOR: '구조용 단조 소재, 절단·가공 후 바로 사용 가능', descENG: 'Structural forging material, ready to use after cutting & processing' },
];

export default function LargeForgingPage() {
    const { lang } = useLang();
    return (
        <div className="flex flex-col space-y-24 pt-12">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'Large Forgings for \nHeavy Industry' : '중후장대 산업의 \n핵심 대형 단조품'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'Large forgings are high-strength products formed to densify the internal structure, applied mainly to power generation equipment, ship shafts, and defense equipment. A1 Special Steel supplies products meeting strict quality standards.'
                                : '대형 프레스와 해머로 공극을 제거하고 조직을 치밀하게 성형한 대형단조품은 거대 구조물의 안전을 책임지는 핵심 소재입니다. 발전설비의 회전축부터 대형 선박의 추진축까지, 엄격한 품질 관리가 적용된 특수 단조품을 공급합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Heavy_Industry</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Large_Forging</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#Stable_Structure</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
                            alt="Large Forging"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Key Applications: ' : '주요 적용: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'Turbine Shaft / Ship Propulsion Shaft / Defense / Industrial Machinery' : '터빈 샤프트 / 선박 추진축 / 방산 구조재 / 산업기계 프레임'}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Recommended Steel Grades' : '강종 추천'}</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Application' : '적용 부품'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Recommended Grade' : '추천 강종'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Characteristics' : '강종 특성'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steelTable.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{lang === 'ENG' ? row.partENG : row.part}</td>
                                    <td className="px-6 py-4 font-mono text-blue-700 font-bold">{row.grade}</td>
                                    <td className="px-6 py-4 text-gray-600">{lang === 'ENG' ? row.descENG : row.descKOR}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Large-Scale Forging Expertise' : '대형 단조의 독보적 기술력'}
                description={lang === 'ENG'
                    ? 'Supporting large core components for shipbuilding and energy industries.'
                    : '조선 및 에너지 산업의 핵심 대형 부품 생산을 지원합니다.'}
                buttonText={lang === 'ENG' ? 'Request Tech Support' : '기술 지원 요청'}
                buttonHref="/contact"
            />
        </div>
    );
}
