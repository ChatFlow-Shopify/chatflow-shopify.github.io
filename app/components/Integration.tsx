export default function Integration() {
    return (
        <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-[#1073E9]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1073E9]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#1073E9]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#1073E9]/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>
            
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-400">
                            Powered by Chatwoot
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                            Enterprise-Grade
                            <span className="block bg-gradient-to-r from-[#1073E9] to-[#1073E9] bg-clip-text text-transparent">
                                Live Chat Platform
                            </span>
                        </h2>
                        
                        <p className="text-xl text-gray-300 leading-relaxed">
                            ChatFlow integrates Chatwoot, the powerful open-source customer engagement platform trusted by thousands of businesses worldwide.
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
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 group-hover:bg-blue-500/30 transition-colors">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#1073E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1 group-hover:text-blue-100 transition-colors">{item.title}</h3>
                                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <a href="#cta" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                                Start Free Trial
                            </a>
                            <a href="#features" className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2 transition-colors">
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
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-[#1073E9]/20">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[#1073E9] to-[#1073E9] px-6 py-4 flex items-center justify-between">
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
                            <div className="p-6 space-y-4 h-80 overflow-hidden">
                                {/* Customer Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                                    <div className="bg-gray-700/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                                        <p className="text-white text-sm">Hi! I need help with my recent order. When will it arrive?</p>
                                        <span className="text-gray-400 text-xs mt-1 block">2:34 PM</span>
                                    </div>
                                </div>

                                {/* Agent Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-gradient-to-r from-[#1073E9] to-[#1073E9] rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                                        <p className="text-white text-sm">Hello! I'd be happy to help you track your order. Can you please provide your order number?</p>
                                        <span className="text-blue-100 text-xs mt-1 block">2:35 PM</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1073E9] to-[#1073E9] flex-shrink-0"></div>
                                </div>

                                {/* Customer Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                                    <div className="bg-gray-700/50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                                        <p className="text-white text-sm">Sure! It's #SO-2024-001234</p>
                                        <span className="text-gray-400 text-xs mt-1 block">2:36 PM</span>
                                    </div>
                                </div>

                                {/* Agent Typing */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-gradient-to-r from-[#1073E9]/50 to-[#1073E9]/50 rounded-2xl rounded-tr-sm px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1073E9] to-[#1073E9] flex-shrink-0"></div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="border-t border-[#1073E9]/20 p-4">
                                <div className="flex gap-3 items-center">
                                    <input 
                                        type="text" 
                                        placeholder="Type your message..."
                                        className="flex-1 bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 text-sm"
                                        disabled
                                    />
                                    <button className="bg-gradient-to-r from-[#1073E9] to-[#1073E9] p-2 rounded-lg">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Floating Widget Preview */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#1073E9] to-[#1073E9] rounded-full p-4 shadow-xl shadow-[#1073E9]/25">
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
