export default function LogoSlider() {
    const logos = [
        { name: "Shopify", width: "120" },
        { name: "Stripe", width: "100" },
        { name: "Amazon", width: "110" },
        { name: "Google", width: "120" },
        { name: "Microsoft", width: "140" },
        { name: "Meta", width: "100" },
        { name: "Apple", width: "90" },
        { name: "Netflix", width: "110" },
    ];

    return (
        <section className="relative py-12 bg-blue-100 overflow-hidden">
            {/* Fade gradients */}
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                    Trusted by leading brands worldwide
                </p>
                
                <div className="relative">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            @keyframes scroll {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-scroll {
                                animation: scroll 30s linear infinite;
                            }
                        `
                    }} />
                    <div className="flex animate-scroll">
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-8 flex items-center justify-center"
                                style={{ width: `${logo.width}px` }}
                            >
                                <div className="text-gray-400 font-bold text-2xl opacity-40">
                                    {logo.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
