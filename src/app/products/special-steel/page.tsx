'use client';
import { useLang } from '@/lib/LanguageContext';
import { CTASection } from '@/components/ui/CTASection';

const steelGrades = [
    { grade: 'S45C', nameKOR: '기계구조용 탄소강', nameENG: 'Carbon Steel for Machine Structural Use', descKOR: '범용성이 높은 중탄소강. 조질처리 후 기계적 성질 우수.', descENG: 'General-purpose medium-carbon steel. Excellent mechanical properties after QT.' },
    { grade: 'SCM415 / SCM420', nameKOR: '크롬몰리브덴강 (침탄용)', nameENG: 'Cr-Mo Steel (Carburizing)', descKOR: '침탄·질화 열처리에 최적. 표면 경도 + 코어 인성 동시 확보.', descENG: 'Optimal for carburizing/nitriding. Surface hardness + core toughness simultaneously.' },
    { grade: 'SCM440', nameKOR: '크롬몰리브덴강 (조질용)', nameENG: 'Cr-Mo Steel (QT)', descKOR: '조질처리 후 고강도·고인성. 자동차·중장비 구동 부품에 광범위 사용.', descENG: 'High strength & toughness after QT. Widely used in automotive & heavy equipment drivetrain.' },
    { grade: 'SNCM439 / SNCM630', nameKOR: '니켈크롬몰리브덴강', nameENG: 'Ni-Cr-Mo Steel', descKOR: '대단면 담금질성 우수. 방산·조선·에너지 설비 구조재에 적합.', descENG: 'Excellent large-section hardenability. Suitable for defense, shipbuilding, and energy structures.' },
    { grade: 'SNC836 / SNCM220', nameKOR: '니켈크롬강', nameENG: 'Ni-Cr Steel', descKOR: '충격 흡수성·내피로성 우수. 고충격 부품 소재에 적합.', descENG: 'Excellent impact absorption & fatigue resistance. Suitable for high-impact components.' },
    { grade: 'SCr415 / SCr440', nameKOR: '크롬강', nameENG: 'Cr Steel', descKOR: '침탄용·조질용으로 기어·핀류에 광범위하게 사용.', descENG: 'Widely used for gears & pins in carburizing and QT applications.' },
];

export default function SpecialSteelPage() {
    const { lang } = useLang();

    return (
        <div className="flex flex-col space-y-24 pt-12">

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
                            {lang === 'ENG' ? 'High Strength & Precision \nThe Standard for Industrial Materials' : '고강도·고정밀 \n산업 핵심 소재의 기준'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            {lang === 'ENG'
                                ? 'Special steel is a high-performance material that enhances strength, toughness, and wear resistance by adding alloying elements. A1 Special Steel supplies key steel grades directly from SeAH Besteel, providing both stable quality and price competitiveness.'
                                : '합금 원소를 첨가하여 강도와 내마모성을 극대화한 특수강은 현대 산업의 필수 소재입니다. 에이원특수강은 세아베스틸로부터 고품질 탄소강(S45C) 및 합금강(SCM)을 직접 공급받아 최고의 신뢰성을 보장합니다.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#S45C_Carbon_Steel</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#SCM_Alloy_Steel</span>
                            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm">#SeAH_Partnership</span>
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                        <img
                            src="/images/hero/hero-3.jpg"
                            alt="Special Steel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="bg-blue-50 rounded-lg px-6 py-3 mb-10 inline-block">
                    <span className="font-bold text-blue-900">{lang === 'ENG' ? 'Main Products: ' : '주요 제품: '}</span>
                    <span className="text-blue-800">{lang === 'ENG' ? 'S45C Carbon Steel / SCM Alloy Steel / Other Alloy Steel Bars' : 'S45C 기계구조용 탄소강 / SCM 구조용 합금강 / 기타 합금강 봉강'}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'ENG' ? 'Major Steel Grades' : '주요 강종'}</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-900 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Grade' : '강종'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Name' : '명칭'}</th>
                                <th className="px-6 py-4 text-left font-bold">{lang === 'ENG' ? 'Characteristics' : '특성 / 적용'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steelGrades.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="px-6 py-4 font-mono font-bold text-blue-700">{row.grade}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{lang === 'ENG' ? row.nameENG : row.nameKOR}</td>
                                    <td className="px-6 py-4 text-gray-600">{lang === 'ENG' ? row.descENG : row.descKOR}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <CTASection
                title={lang === 'ENG' ? 'Reliable Special Steel Supply' : '신뢰할 수 있는 특수강 공급'}
                description={lang === 'ENG'
                    ? 'Official SeAH Besteel dealer providing the best material solutions.'
                    : '세아베스틸 공식 대리점으로서 최적의 소재 솔루션을 제안합니다.'}
                buttonText={lang === 'ENG' ? 'Request Quote' : '견적 요청하기'}
                buttonHref="/contact"
            />
        </div>
    );
}
