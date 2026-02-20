export default function Integration() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Grid Background with fade */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1f93ff]/10 border border-[#1f93ff]/20 rounded-full text-sm font-medium text-[#1f93ff]">
                            Powered by Chatwoot
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Enterprise-Grade
                            <span className="block text-[#1f93ff] mt-2">Live Chat Platform</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            ChatFlow seamlessly integrates Chatwoot, the powerful open-source customer engagement platform trusted by thousands of businesses worldwide. Get enterprise-level features without enterprise-level complexity or cost. Chatwoot powers your customer conversations with reliability, scalability, and complete customization options that grow with your business.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Live Chat",
                                    description: "Real-time messaging with customers directly on your storefront"
                                },
                                {
                                    title: "Widget Customization",
                                    description: "Brand colors, position, greetings, and complete visual customization"
                                },
                                {
                                    title: "Mobile Setup",
                                    description: "iOS and Android apps with push notifications and offline support"
                                },
                                {
                                    title: "User Management",
                                    description: "Multi-agent support with roles, permissions, and team collaboration"
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1f93ff]/10 flex items-center justify-center mt-0.5">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#1f93ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a 
                                href="#cta" 
                                className="bg-[#1f93ff] hover:bg-[#0d7ae6] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg shadow-[#1f93ff]/25 hover:shadow-xl"
                            >
                                Start Free Trial
                            </a>
                            <a 
                                href="#features" 
                                className="text-[#1f93ff] font-medium hover:text-[#0d7ae6] flex items-center gap-2 transition-colors"
                            >
                                View All Features
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Visual - Chat Interface */}
                    <div className="relative">
                        {/* Chat Interface Mockup */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#1f93ff] to-[#0d7ae6] px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">Live Chat Support</div>
                                        <div className="text-blue-100 text-sm">Your Shopify Store</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-white text-sm">Online</span>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="p-6 space-y-4 h-80 overflow-hidden bg-gray-50">
                                {/* Customer Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1f93ff] to-[#0d7ae6] flex-shrink-0"></div>
                                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs shadow-sm border border-gray-100">
                                        <p className="text-gray-900 text-sm">Hi! I need help with my recent order. When will it arrive?</p>
                                        <span className="text-gray-400 text-xs mt-1 block">2:34 PM</span>
                                    </div>
                                </div>

                                {/* Agent Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-[#1f93ff] rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                                        <p className="text-white text-sm">Hello! I'd be happy to help you track your order. Can you please provide your order number?</p>
                                        <span className="text-blue-100 text-xs mt-1 block">2:35 PM</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex-shrink-0"></div>
                                </div>

                                {/* Customer Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1f93ff] to-[#0d7ae6] flex-shrink-0"></div>
                                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs shadow-sm border border-gray-100">
                                        <p className="text-gray-900 text-sm">Sure! It's #SO-2024-001234</p>
                                        <span className="text-gray-400 text-xs mt-1 block">2:36 PM</span>
                                    </div>
                                </div>

                                {/* Agent Typing */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex-shrink-0"></div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="border-t border-gray-200 p-4 bg-white">
                                <div className="flex gap-3 items-center">
                                    <input 
                                        type="text" 
                                        placeholder="Type your message..."
                                        className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1f93ff]/20 focus:border-[#1f93ff]"
                                        disabled
                                    />
                                    <button className="bg-[#1f93ff] p-2 rounded-lg hover:bg-[#0d7ae6] transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Floating Widget Preview */}
                        <div className="absolute -bottom-4 -right-4 bg-[#1f93ff] rounded-full p-4 shadow-xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10.5H16M8 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
