export default function Testimonials() {
    const testimonials = [
        {
            quote: "ChatFlow made it incredibly easy to add live chat to our Shopify store. The automated setup saved us hours of configuration time, and our customers love being able to get instant support.",
            author: "Sarah Johnson",
            role: "Founder & CEO",
            company: "StyleCo",
            avatar: "SJ"
        },
        {
            quote: "The multi-agent support feature is a game-changer. Our team can now handle customer inquiries efficiently, and the mobile app keeps us connected even when we're away from the desk.",
            author: "Michael Chen",
            role: "Operations Manager",
            company: "TechGadgets",
            avatar: "MC"
        },
        {
            quote: "Setting up ChatFlow took less than 5 minutes, and the customization options let us match our brand perfectly. Our customer satisfaction scores have improved significantly since implementing it.",
            author: "Emily Rodriguez",
            role: "Customer Success Lead",
            company: "FashionHub",
            avatar: "ER"
        }
    ];

    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#6892FA]/10 border border-[#6892FA]/20 rounded-full text-sm font-medium text-[#6892FA] mb-6">
                        Testimonials
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Loved by Shopify Merchants
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        See what our customers are saying about ChatFlow. Join hundreds of successful Shopify merchants who have transformed their customer support with our platform. Real stories from real businesses that have improved their customer satisfaction and response times.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-200"
                        >
                            {/* Quote */}
                            <div className="mb-8">
                                <svg className="w-10 h-10 text-[#6892FA]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                                <p className="text-gray-700 leading-relaxed text-base">
                                    {testimonial.quote}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6892FA] to-[#5578E8] flex items-center justify-center text-white font-semibold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    <div className="text-sm text-[#6892FA] font-medium">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                    <div className="text-center mb-8">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                            Trusted by Shopify Merchants Worldwide
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                        <div className="text-2xl font-bold text-gray-400">500+</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-2xl font-bold text-gray-400">Active Stores</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-2xl font-bold text-gray-400">98%</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-2xl font-bold text-gray-400">Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

