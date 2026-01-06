export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Install from Shopify",
            description: "Add ChatFlow to your store from the Shopify App Store. Takes 30 seconds.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.27 6.96L12 12.01L20.73 6.96M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Automatic Configuration",
            description: "ChatFlow creates your Chatwoot account, inbox, and primary agent automatically.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Enable Widget",
            description: "Activate the chat widget in your theme with one click. Customize colors and settings.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10.5H16M8 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            number: "04",
            title: "Start Chatting",
            description: "Login to Chatwoot dashboard or mobile app and start responding to customer messages.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
            </div>
            
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-400 mb-6">
                        How It Works
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Get Started in
                        <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            4 Simple Steps
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        From installation to first conversation in under 5 minutes
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-blue-600/30 -translate-x-1/2 z-0"></div>
                            )}
                            
                            <div className="relative bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-500 ease-out h-full group">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-500">
                                    {step.number}
                                </div>
                                
                                {/* Icon */}
                                <div className="text-blue-500 mb-6 mt-4 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500">
                                    {step.icon}
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-500">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a href="#cta" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-blue-500/25">
                        Get Started Now
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
