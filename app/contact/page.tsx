import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
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
                        <span className="font-medium">Get in Touch</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Contact Our
                        <span className="block text-[#1f93ff] mt-2">Support Team</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Have questions about ChatFlow? Our team is here to help you get started and succeed.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white relative overflow-hidden">
                {/* Grid Background with fade */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
                </div>
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Get Support</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1f93ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#1f93ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                                        <p className="text-gray-600 mb-2">Get help with setup, configuration, or any questions</p>
                                        <a href="mailto:support@chatflow.app" className="text-[#1f93ff] hover:text-[#0d7ae6] transition-colors">support@chatflow.app</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1f93ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#1f93ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                                        <p className="text-gray-600 mb-2">Chat with our team in real-time</p>
                                        <span className="text-[#1f93ff]">Available 24/7</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1f93ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#1f93ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                                        <p className="text-gray-600 mb-2">Comprehensive guides and tutorials</p>
                                        <a href="#" className="text-[#1f93ff] hover:text-[#0d7ae6] transition-colors">View Docs</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-[#1f93ff] focus:ring-2 focus:ring-[#1f93ff]/20 focus:outline-none transition-colors" placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-[#1f93ff] focus:ring-2 focus:ring-[#1f93ff]/20 focus:outline-none transition-colors" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:border-[#1f93ff] focus:ring-2 focus:ring-[#1f93ff]/20 focus:outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#1f93ff] hover:bg-[#0d7ae6] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}