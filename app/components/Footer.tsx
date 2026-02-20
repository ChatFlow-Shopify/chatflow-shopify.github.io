import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1f93ff] to-[#0d7ae6] flex items-center justify-center group-hover:scale-105 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 10.5H16M8 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold group-hover:text-[#1f93ff] transition-colors">ChatFlow</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Seamlessly integrate Chatwoot live chat with your Shopify store.
                        </p>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/features" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/setup" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Setup Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <a href="https://apps.shopify.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Install App
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:support@chatflow.app" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Email Support
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} ChatFlow. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-[#1f93ff] animate-pulse"></span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
