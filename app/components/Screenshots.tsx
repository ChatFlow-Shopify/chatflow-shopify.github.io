export default function Screenshots() {
    return (
        <section className="py-20 md:py-32 gradient-mesh">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge inline-flex mb-4">See It In Action</div>
                    <h2 className="section-title mb-4">Beautiful, Powerful Dashboard</h2>
                    <p className="section-subtitle mx-auto">
                        Manage all your customer conversations from a single, intuitive interface powered by Chatwoot.
                    </p>
                </div>

                {/* Dashboard Screenshot */}
                <div className="screenshot-container mx-auto max-w-6xl mb-16">
                    <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-gray-400 text-sm">app.chatwoot.com/dashboard</span>
                        </div>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="bg-white">
                        <div className="flex">
                            {/* Sidebar */}
                            <div className="w-16 bg-gray-900 py-4 flex flex-col items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12H16L14 15H10L8 12H2" stroke="#9ca3af" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#9ca3af" strokeWidth="2" />
                                        <circle cx="9" cy="7" r="4" stroke="#9ca3af" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Conversation List */}
                            <div className="w-72 bg-gray-50 border-r border-gray-200 py-4">
                                <div className="px-4 mb-4">
                                    <div className="h-10 bg-white rounded-lg border border-gray-200 flex items-center px-3">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#9ca3af" strokeWidth="2" />
                                        </svg>
                                        <span className="text-sm text-gray-400 ml-2">Search conversations</span>
                                    </div>
                                </div>

                                {/* Conversations */}
                                {[
                                    { name: "Sarah Johnson", msg: "Hi, I have a question about...", badge: "2", active: true },
                                    { name: "Mike Chen", msg: "Thanks for the help!", badge: "", active: false },
                                    { name: "Emma Wilson", msg: "When will my order arrive?", badge: "1", active: false },
                                ].map((conv, i) => (
                                    <div key={i} className={`px-4 py-3 ${conv.active ? 'bg-blue-50 border-l-2 border-blue-500' : 'hover:bg-gray-100'} cursor-pointer`}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                                                {conv.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold text-sm text-gray-900">{conv.name}</span>
                                                    {conv.badge && (
                                                        <span className="w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">{conv.badge}</span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-500 truncate">{conv.msg}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 flex flex-col">
                                {/* Chat Header */}
                                <div className="h-16 border-b border-gray-200 px-6 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">SJ</div>
                                        <div>
                                            <div className="font-semibold text-gray-900">Sarah Johnson</div>
                                            <div className="text-sm text-green-500">Online</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg">Resolve</button>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 p-6 bg-gray-50 overflow-y-auto" style={{ minHeight: '280px' }}>
                                    <div className="space-y-4">
                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md shadow-sm">
                                                <p className="text-gray-800">Hi, I have a question about my order #1234</p>
                                                <span className="text-xs text-gray-400 mt-1 block">10:23 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                                                <p>Hi Sarah! I&apos;d be happy to help. Let me check that order for you.</p>
                                                <span className="text-xs text-blue-200 mt-1 block">10:24 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-start">
                                            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md shadow-sm">
                                                <p className="text-gray-800">Thank you so much! 😊</p>
                                                <span className="text-xs text-gray-400 mt-1 block">10:25 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Input */}
                                <div className="h-20 border-t border-gray-200 px-6 flex items-center gap-4">
                                    <div className="flex-1 h-12 bg-gray-50 rounded-xl border border-gray-200 flex items-center px-4">
                                        <span className="text-gray-400">Type your message...</span>
                                    </div>
                                    <button className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: "📱", title: "Mobile Ready", desc: "Access your dashboard from any device" },
                        { icon: "🔔", title: "Real-time Notifications", desc: "Never miss a customer message" },
                        { icon: "📊", title: "Analytics & Reports", desc: "Track your team's performance" }
                    ].map((item, i) => (
                        <div key={i} className="card-static p-6 text-center">
                            <div className="text-4xl mb-3">{item.icon}</div>
                            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
