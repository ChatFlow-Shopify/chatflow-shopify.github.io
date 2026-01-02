export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-sm font-medium text-purple-700 mb-6">
                        Simple Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Start Free, Scale as
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            You Grow
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        No hidden fees. Cancel anytime. Full access to all features.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                            <p className="text-gray-600">Perfect for testing</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-5xl font-extrabold text-gray-900">$0</div>
                            <div className="text-gray-600 mt-2">Forever free</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {[
                                "1 Support Agent",
                                "Unlimited Conversations",
                                "Basic Widget Customization",
                                "Email Support",
                                "Mobile App Access"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                                        <path d="M20 6L9 17L4 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#cta" className="btn-secondary w-full justify-center">
                            Get Started
                        </a>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl border-2 border-blue-500 relative transform scale-105">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                            MOST POPULAR
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                            <p className="text-blue-100">For growing teams</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-5xl font-extrabold text-white">$29</div>
                            <div className="text-blue-100 mt-2">per month</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {[
                                "5 Support Agents",
                                "Unlimited Conversations",
                                "Full Widget Customization",
                                "Priority Support",
                                "Mobile App Access",
                                "CSAT Surveys",
                                "Working Hours Setup"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                                        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-white">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#cta" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 w-full">
                            Start Free Trial
                        </a>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                            <p className="text-gray-600">For large teams</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-5xl font-extrabold text-gray-900">$99</div>
                            <div className="text-gray-600 mt-2">per month</div>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Unlimited Agents",
                                "Unlimited Conversations",
                                "Advanced Customization",
                                "Dedicated Support",
                                "Mobile App Access",
                                "Advanced Analytics",
                                "Custom Integrations",
                                "SLA Guarantee"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
                                        <path d="M20 6L9 17L4 12" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#cta" className="btn-secondary w-full justify-center">
                            Contact Sales
                        </a>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        <span className="font-semibold">14-day free trial</span> on all paid plans. No credit card required.
                    </p>
                </div>
            </div>
        </section>
    );
}
