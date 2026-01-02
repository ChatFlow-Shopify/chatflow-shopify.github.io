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
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            <Header />
            
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
                </div>
                
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-medium text-orange-400 mb-6">
                        Pricing Plans
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        Choose Your
                        <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            Perfect Plan
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Start free and scale as you grow. All plans include unlimited conversations and core features.
                    </p>
                </div>
            </section>

            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div key={index} className={`relative bg-black/40 backdrop-blur-md rounded-2xl border p-8 transition-all duration-300 hover:scale-105 ${
                                plan.popular 
                                    ? 'border-orange-500/40 hover:border-orange-500/60 shadow-2xl shadow-orange-500/20' 
                                    : 'border-orange-500/20 hover:border-orange-500/40'
                            }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}
                                
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center gap-1 mb-2">
                                        <span className="text-4xl font-extrabold text-orange-500">{plan.price}</span>
                                        {plan.period && <span className="text-gray-400">{plan.period}</span>}
                                    </div>
                                    <p className="text-gray-300">{plan.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                    plan.popular
                                        ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg shadow-orange-500/25'
                                        : 'bg-black/60 border border-orange-500/30 text-white hover:bg-orange-500/10 hover:border-orange-500/50'
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