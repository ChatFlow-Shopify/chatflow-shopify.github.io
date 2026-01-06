"use client";
import { useState, useEffect } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,115,233,0.2),rgba(0,0,0,0))]" />
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,115,233,0.15), transparent 40%)`
                    }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-blue-600/15 rounded-full blur-3xl animate-float-diagonal" style={{ animationDelay: '4s' }} />
            </div>

            {/* Geometric Shapes */}

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
                <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-[#1073E9]/10 backdrop-blur-md border border-[#1073E9]/30 rounded-full text-[#1073E9] hover:bg-[#1073E9]/20 transition-all duration-300 group">
                        <div className="relative">
                            <div className="w-2 h-2 bg-[#1073E9] rounded-full animate-pulse" />
                            <div className="absolute inset-0 w-2 h-2 bg-[#1073E9] rounded-full animate-ping" />
                        </div>
                        <span className="font-medium text-sm">Live Integration • Shopify + Chatwoot</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                        <span className="block text-white mb-2">Transform Your</span>
                        <span className="block bg-gradient-to-r from-[#1073E9] via-[#1073E9] to-[#1073E9] bg-clip-text text-transparent">
                            Customer Experience
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                        Seamlessly integrate Chatwoot's powerful live chat into your Shopify store.
                        <br className="hidden md:block" />
                        <span className="text-white font-semibold">Zero coding required</span> 
                        <span className="mx-3 text-[#1073E9]">•</span>
                        <span className="text-[#1073E9]">5-minute setup</span> 
                        <span className="mx-3 text-[#1073E9]">•</span>
                        <span className="text-[#1073E9]">Unlimited customization</span>
                    </p>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a href="#cta" className="group relative px-8 py-4 bg-gradient-to-r from-[#1073E9] to-[#1073E9] text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1073E9]/25 flex items-center gap-3">
                            <span>Start Free Integration</span>
                            <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </a>
                        
                        <a href="#demo" className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-[#1073E9]/30 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:bg-[#1073E9]/10 hover:scale-105 flex items-center gap-3">
                            <div className="w-5 h-5">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span>Watch Demo</span>
                        </a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="group p-6 bg-black/40 backdrop-blur-md border border-[#1073E9]/20 rounded-xl hover:bg-[#1073E9]/10 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl font-black text-[#1073E9] mb-2 group-hover:scale-110 transition-transform">5min</div>
                            <div className="text-white/80 font-medium text-sm">Quick Setup</div>
                            <div className="text-xs text-gray-400 mt-1">No technical skills needed</div>
                        </div>
                        
                        <div className="group p-6 bg-black/40 backdrop-blur-md border border-[#1073E9]/20 rounded-xl hover:bg-[#1073E9]/10 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl font-black text-[#1073E9] mb-2 group-hover:scale-110 transition-transform">100%</div>
                            <div className="text-white/80 font-medium text-sm">Automated</div>
                            <div className="text-xs text-gray-400 mt-1">Set it and forget it</div>
                        </div>
                        
                        <div className="group p-6 bg-black/40 backdrop-blur-md border border-[#1073E9]/20 rounded-xl hover:bg-[#1073E9]/10 transition-all duration-300 hover:scale-105">
                            <div className="text-3xl font-black text-[#1073E9] mb-2 group-hover:scale-110 transition-transform">24/7</div>
                            <div className="text-white/80 font-medium text-sm">Always On</div>
                            <div className="text-xs text-gray-400 mt-1">Never miss a customer</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(1deg); }
                    66% { transform: translateY(5px) rotate(-1deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translate(0px, 0px); }
                    25% { transform: translate(20px, -15px); }
                    50% { transform: translate(-10px, -25px); }
                    75% { transform: translate(-20px, 10px); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translate(0px, 0px); }
                    25% { transform: translate(-25px, 20px); }
                    50% { transform: translate(15px, 30px); }
                    75% { transform: translate(30px, -15px); }
                }
                @keyframes float-diagonal {
                    0%, 100% { transform: translate(0px, 0px); }
                    33% { transform: translate(30px, -20px); }
                    66% { transform: translate(-15px, 25px); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float-slow 12s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: float-reverse 15s ease-in-out infinite;
                }
                .animate-float-diagonal {
                    animation: float-diagonal 10s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </section>
    );
}
