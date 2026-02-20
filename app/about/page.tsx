import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            <section className="relative bg-white overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(31,147,255,0.08),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(31,147,255,0.06),transparent_55%)]" />
                {/* Grid Background with fade */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                </div>
                
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-blue-100 rounded-full text-sm text-[#1f93ff] mb-6">
                        <span className="font-medium">About Us</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Revolutionizing
                        <span className="block text-[#1f93ff] mt-2">Customer Support</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        ChatFlow bridges the gap between Shopify merchants and their customers through seamless live chat integration powered by Chatwoot.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white relative overflow-hidden">
                {/* Grid Background with fade */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We believe every Shopify merchant deserves enterprise-grade customer support tools without the complexity. ChatFlow makes it possible to deploy professional live chat in minutes, not weeks.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                By leveraging Chatwoot's powerful open-source platform, we provide merchants with unlimited scalability, complete customization, and the reliability needed to grow their business.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1f93ff] mb-2">1000+</div>
                                    <div className="text-gray-600 text-sm">Active Merchants</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1f93ff] mb-2">50K+</div>
                                    <div className="text-gray-600 text-sm">Conversations</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1f93ff] mb-2">99.9%</div>
                                    <div className="text-gray-600 text-sm">Uptime</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1f93ff] mb-2">24/7</div>
                                    <div className="text-gray-600 text-sm">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Why Choose ChatFlow?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Zero Configuration",
                                    description: "Automatic setup means you're chatting with customers in under 5 minutes"
                                },
                                {
                                    title: "Enterprise Features",
                                    description: "Multi-agent support, analytics, mobile apps, and unlimited customization"
                                },
                                {
                                    title: "Shopify Native",
                                    description: "Built specifically for Shopify with deep integration and theme compatibility"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:border-[#1f93ff]/30 hover:shadow-lg transition-all duration-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}