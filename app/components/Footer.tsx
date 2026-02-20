import Link from "next/link";
import logoMark from "../assets/Logo Mark-01.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center mb-4 group">
                            <img
                                src={logoMark.src}
                                alt="ChatFlow"
                                className="h-20 w-auto group-hover:opacity-80 transition-opacity"
                            />
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
                                <a href="https://apps.shopify.com/chatflow?st_source=autocomplete&surface_detail=autocomplete_apps" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">
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
