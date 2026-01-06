import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <Header />
            
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#1073E9]/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1073E9]/5 rounded-full blur-3xl animate-pulse" />
                </div>
                
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1073E9]/10 border border-[#1073E9]/30 rounded-full text-sm font-medium text-[#1073E9] mb-6">
                        About Us
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        Revolutionizing
                        <span className="block bg-gradient-to-r from-[#1073E9] to-[#1073E9] bg-clip-text text-transparent">
                            Customer Support
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        ChatFlow bridges the gap between Shopify merchants and their customers through seamless live chat integration powered by Chatwoot.
                    </p>
                </div>
            </section>

            <section className="pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                We believe every Shopify merchant deserves enterprise-grade customer support tools without the complexity. ChatFlow makes it possible to deploy professional live chat in minutes, not weeks.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                By leveraging Chatwoot's powerful open-source platform, we provide merchants with unlimited scalability, complete customization, and the reliability needed to grow their business.
                            </p>
                        </div>
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#1073E9]/20 p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1073E9] mb-2">1000+</div>
                                    <div className="text-gray-300 text-sm">Active Merchants</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1073E9] mb-2">50K+</div>
                                    <div className="text-gray-300 text-sm">Conversations</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1073E9] mb-2">99.9%</div>
                                    <div className="text-gray-300 text-sm">Uptime</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#1073E9] mb-2">24/7</div>
                                    <div className="text-gray-300 text-sm">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-12">Why Choose ChatFlow?</h2>
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
                                <div key={index} className="bg-black/40 backdrop-blur-md rounded-2xl border border-[#1073E9]/20 p-6 hover:border-[#1073E9]/40 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
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