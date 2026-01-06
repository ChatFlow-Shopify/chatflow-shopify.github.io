import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FeaturesPage() {
    
    
    const features = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Automated Setup",
            description: "Complete hands-off installation and configuration process",
            details: [
                "Automatic Chatwoot account creation with your store branding",
                "Pre-configured inbox with optimized settings for e-commerce",
                "First support agent created with secure credentials",
                "Theme integration block automatically installed",
                "Widget positioned and styled to match your store design"
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Multi-Agent Support",
            description: "Scale your support team with unlimited agents and advanced management",
            details: [
                "Create unlimited support agents with one-click setup",
                "Auto-generated secure credentials for each team member",
                "SSO login links for instant dashboard access",
                "Role-based permissions and access control",
                "Team collaboration tools and private notes"
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10.5H16M8 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "Smart Widget Integration",
            description: "Seamless chat widget that feels native to your store",
            details: [
                "One-click theme integration with app embed blocks",
                "Automatic positioning based on your theme layout",
                "Responsive design that works on all devices",
                "Custom CSS injection for advanced styling",
                "A/B testing support for optimal placement"
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3V7L12 5L8 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Complete Customization",
            description: "Brand your chat experience to match your store perfectly",
            details: [
                "Custom brand colors and logo integration",
                "Personalized greeting messages and auto-responses",
                "Working hours configuration with timezone support",
                "CSAT surveys and feedback collection",
                "Custom fields for order tracking and customer data"
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Mobile-First Experience",
            description: "Native mobile apps for your support team with full feature parity",
            details: [
                "iOS and Android apps with push notifications",
                "Offline message queuing and sync",
                "Step-by-step mobile setup guide included",
                "Biometric authentication for secure access",
                "Real-time typing indicators and read receipts"
            ]
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 9H21M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Advanced Analytics",
            description: "Comprehensive insights to optimize your customer support performance",
            details: [
                "Real-time conversation monitoring and metrics",
                "Response time tracking and performance analytics",
                "Customer satisfaction scores and trends",
                "Agent productivity reports and workload distribution",
                "Integration health monitoring and uptime tracking"
            ]
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
                
                <div className="relative max-w-4xl mx-auto px-6 text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm font-medium text-orange-400 mb-6">
                        All Features
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        Powerful Features for
                        <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            Modern Commerce
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Everything you need to provide exceptional customer support and grow your Shopify business.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="space-y-20">
                        {features.map((feature, index) => (
                            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">{feature.title}</h2>
                                            <p className="text-orange-400 font-medium">{feature.description}</p>
                                        </div>
                                    </div>
                                    
                                    <ul className="space-y-4">
                                        {feature.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3 group">
                                                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-500/30 transition-colors">
                                                    <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <div className="relative bg-black/40 backdrop-blur-md rounded-3xl border border-orange-500/20 p-8 hover:border-orange-500/40 transition-all duration-500 group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="relative text-center">
                                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                                <div className="text-6xl font-black text-orange-500">
                                                    {String(index + 1).padStart(2, '0')}
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                            <p className="text-gray-300">{feature.description}</p>
                                        </div>
                                        
                                        <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}