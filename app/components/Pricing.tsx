export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1f93ff]/10 border border-[#1f93ff]/20 rounded-full text-sm font-medium text-[#1f93ff] mb-6">
                        Simple Pricing
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Start Free, Scale as
                        <span className="block text-[#1f93ff] mt-2">You Grow</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        No hidden fees. Cancel anytime. Full access to all features.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Plan */}
                    <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#1f93ff]/30 hover:shadow-lg transition-all duration-200">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                            <p className="text-gray-600">Perfect for testing</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-5xl font-bold text-gray-900">$0</div>
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
                                        <path d="M20 6L9 17L4 12" stroke="#1f93ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a 
                            href="#cta" 
                            className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-gradient-to-br from-[#1f93ff] to-[#0d7ae6] rounded-xl p-8 border-2 border-[#1f93ff] relative transform scale-105 shadow-xl">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                            <p className="text-blue-100">For growing teams</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-5xl font-bold text-white">$29</div>
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
                        <a 
                            href="#cta" 
                            className="block w-full text-center bg-white text-[#1f93ff] hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                            Start Free Trial
                        </a>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#1f93ff]/30 hover:shadow-lg transition-all duration-200">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                            <p className="text-gray-600">For large teams</p>
                        </div>
                        <div className="mb-6">
                            <div className="text-5xl font-bold text-gray-900">$99</div>
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
                                        <path d="M20 6L9 17L4 12" stroke="#1f93ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a 
                            href="#cta" 
                            className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
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
