"use client";
import Image from "next/image";
import conversationImage from "../assets/conversation.webp";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(31,147,255,0.08),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(31,147,255,0.06),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Intro badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/70 border border-blue-100 rounded-full text-sm text-[#6892FA]">
            <span className="text-lg">⚡</span>
            <span className="font-medium">
              Introducing ChatFlow, your Shopify live chat companion
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The modern live chat platform
            <span className="block mt-1">for your Shopify store</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your customer support with ChatFlow's seamless Chatwoot integration for Shopify. Get AI-assisted conversations, automated setup, multi-agent support, and powerful analytics—all in one platform. Start chatting with customers in under 5 minutes with zero technical knowledge required. Perfect for merchants who want enterprise-grade live chat without the complexity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
            <a
              href="https://apps.shopify.com/chatflow?st_source=autocomplete&surface_detail=autocomplete_apps"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#6892FA] hover:bg-[#5578E8] text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Start your free trial</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="group bg-white hover:bg-gray-50 text-gray-800 font-semibold px-10 py-4 rounded-lg text-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center gap-2"
            >
              <span>Request a demo</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L14.5 14.5"
                    stroke="#6892FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#6892FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-900 mr-1">
                  4.8+ rating
                </span>
                <span className="text-gray-500">on Shopify App Store</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#6892FA"
                  />
                </svg>
              </span>
              <div>
                <span className="font-semibold text-gray-900 mr-1">
                  Powered by Chatwoot
                </span>
                <span className="text-gray-500">trusted by thousands of teams</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-12">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-[0_18px_60px_rgba(15,23,42,0.18)] bg-gray-900">
              <Image
                src={conversationImage}
                alt="ChatFlow + Chatwoot conversation view inside your Shopify store"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
