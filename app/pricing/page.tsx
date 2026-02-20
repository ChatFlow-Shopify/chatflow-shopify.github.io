import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            description: "Perfect for small stores getting started",
            features: [
                "1 Support Agent",
                "Unlimited Conversations",
                "Basic Widget Customization",
                "Email Support",
                "Mobile App Access"
            ],
            cta: "Get Started Free",
            popular: false
        },
        {
            name: "Professional",
            price: "$29",
            period: "/month",
            description: "Ideal for growing businesses",
            features: [
                "5 Support Agents",
                "Unlimited Conversations",
                "Advanced Customization",
                "Priority Support",
                "Mobile App Access",
                "Custom Branding",
                "Analytics Dashboard"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$99",
            period: "/month",
            description: "For large teams and high-volume stores",
            features: [
                "Unlimited Agents",
                "Unlimited Conversations",
                "White-label Solution",
                "24/7 Phone Support",
                "Custom Integrations",
                "Advanced Analytics",
                "Dedicated Account Manager"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            <section className="relative bg-white overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(31,147,255,0.08),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(31,147,255,0.06),transparent_55%)]" />
                
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 border border-blue-100 rounded-full text-sm text-[#1f93ff] mb-6">
                        <span className="font-medium">Pricing Plans</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Choose Your
                        <span className="block text-[#1f93ff] mt-2">Perfect Plan</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                        Start free and scale as you grow. All plans include unlimited conversations and core features.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div key={index} className={`relative bg-white rounded-2xl border p-8 transition-all duration-200 hover:shadow-xl ${
                                plan.popular 
                                    ? 'border-[#1f93ff] shadow-lg' 
                                    : 'border-gray-200 hover:border-[#1f93ff]/30'
                            }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1f93ff] text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}
                                
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center gap-1 mb-2">
                                        <span className="text-4xl font-extrabold text-[#1f93ff]">{plan.price}</span>
                                        {plan.period && <span className="text-gray-600">{plan.period}</span>}
                                    </div>
                                    <p className="text-gray-600">{plan.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#1f93ff] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-200 ${
                                    plan.popular
                                        ? 'bg-[#1f93ff] hover:bg-[#0d7ae6] text-white shadow-md hover:shadow-lg'
                                        : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-[#1f93ff]/30'
                                }`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}