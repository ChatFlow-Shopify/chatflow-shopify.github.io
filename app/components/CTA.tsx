export default function CTA() {
    return (
        <section id="cta" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-full text-sm font-medium text-orange-400 mb-8">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                    </svg>
                    Join hundreds of Shopify merchants
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Ready to Transform Your
                    <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Customer Support?</span>
                </h2>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Install ChatFlow now and start chatting with your customers in under 5 minutes. 
                    No credit card required.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a 
                        href="https://apps.shopify.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-105"
                    >
                        <svg width="24" height="26" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.338 4.346C17.3023 4.11163 17.1005 3.9386 16.8618 3.92603L14.3558 3.80603C14.3558 3.80603 12.6948 2.14503 12.5268 1.97803C12.3578 1.81003 12.0278 1.85303 11.9218 1.88303C11.9038 1.88803 11.5928 1.98303 11.0718 2.14203C10.4328 0.938032 9.40581 0.0550325 8.05281 0.0550325C8.01081 0.0550325 7.96681 0.0580325 7.92281 0.0600325C7.51981-0.444967 7.01881-0.644967 6.58581-0.644967C3.14081-0.644967 1.50181 3.65503 0.937807 5.54003C-0.417193 9.98003 -0.0741934 11.645 0.180807 12.52C0.828807 14.84 4.27581 20.14 8.11281 20.14C8.14581 20.14 8.17981 20.139 8.21181 20.136C8.51381 20.668 8.90581 21.055 9.41281 21.055C10.7428 21.055 11.4598 19.628 11.9808 18.358L15.0238 11.24C15.0238 11.24 17.3528 4.79003 17.338 4.346Z" fill="white" />
                        </svg>
                        Install Free on Shopify
                    </a>
                    <a 
                        href="#how-it-works"
                        className="bg-black/40 backdrop-blur-md text-white hover:bg-orange-500/10 border-2 border-orange-500/30 hover:border-orange-500/50 font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                    >
                        Watch Demo
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300">
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">Free to install</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">5-minute setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">No credit card needed</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
                    <div className="text-center group">
                        <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 group-hover:scale-110 transition-transform">5min</div>
                        <div className="text-gray-300">Average Setup</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 group-hover:scale-110 transition-transform">24/7</div>
                        <div className="text-gray-300">Support Available</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2 group-hover:scale-110 transition-transform">100%</div>
                        <div className="text-gray-300">Automated</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
