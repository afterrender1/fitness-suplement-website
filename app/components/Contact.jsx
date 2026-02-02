import { Mail, Phone, MapPin, Send, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Poppins, Inter } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
    const THEME = {
        primary: "#93D2D9",
        primaryLight: "#E8F6F8",
        primaryDark: "#6BBCC6",
        dark: "#0F172A",
        gray: "#64748B"
    };

    return (
        <div className={`min-h-screen bg-white ${inter.className}`}>
            {/* Navigation / Back Button Container */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center">
                    <Link
                        href="/shop/supplements"
                        className="group flex items-center gap-3 py-2 transition-all"
                    >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                            style={{ backgroundColor: THEME.primaryLight }}
                        >
                            <ArrowLeft size={18} style={{ color: THEME.primaryDark }} />
                        </div>
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900">
                            Back to Supplements
                        </span>
                    </Link>
                </div>
            </header>

            <section id="contact" className="py-12 sm:py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                        <span className="text-primaryDark font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 block">
                            Get in Touch
                        </span>
                        <h1 className={`${poppins.className} text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight`}>
                            Let's start a <span style={{ color: THEME.primaryDark }}>conversation</span>
                        </h1>
                        <p className="text-slate-500 text-base sm:text-xl leading-relaxed">
                            Have questions about our products or your order? We're here to help you reach your peak performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left: Contact Information (4/12 columns on desktop) */}
                        <div className="lg:col-span-5 space-y-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                                {[
                                    {
                                        icon: Phone,
                                        label: "Phone",
                                        value: "+1 (555) 123-4567",
                                        sub: "Mon-Fri from 8am to 5pm",
                                        href: "tel:+15551234567"
                                    },
                                    {
                                        icon: Mail,
                                        label: "Email",
                                        value: "support@primesupps.com",
                                        sub: "We reply within 24 hours",
                                        href: "mailto:support@primesupps.com"
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Office",
                                        value: "123 Prime Street, Suite 100",
                                        sub: "Fitness City, CA 90210",
                                        href: "#"
                                    },
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="group flex items-start gap-4 p-6 rounded-3xl border border-slate-100 hover:border-transparent hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                            <item.icon size={22} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-base font-bold text-slate-900 group-hover:text-primaryDark transition-colors">
                                                {item.value}
                                            </p>
                                            <p className="text-sm text-slate-500 mt-1">{item.sub}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Working Hours Card */}
                            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl overflow-hidden relative">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Clock size={20} className="text-[#93D2D9]" />
                                        <span className="text-lg font-semibold">Store Hours</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { day: "Mon - Fri", time: "8:00 AM - 5:00 PM" },
                                            { day: "Saturday", time: "9:00 AM - 2:00 PM" },
                                            { day: "Sunday", time: "Closed", dim: true },
                                        ].map((slot, i) => (
                                            <div key={i} className={`flex justify-between items-center border-b border-white/10 pb-2 ${slot.dim ? 'opacity-50' : ''}`}>
                                                <span className="text-slate-400 text-sm">{slot.day}</span>
                                                <span className="font-medium text-sm tracking-wide">{slot.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Decorative Circle */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            </div>
                        </div>

                        {/* Right: Contact Form (7/12 columns on desktop) */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-slate-200/60">
                                <div className="mb-10">
                                    <h3 className={`${poppins.className} text-2xl font-bold text-slate-900 mb-3`}>
                                        Send us a Message
                                    </h3>
                                    <div className="w-12 h-1 bg-primaryDark rounded-full"></div>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 uppercase ml-1">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primaryDark transition-all outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-700 uppercase ml-1">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primaryDark transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primaryDark transition-all outline-none"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase ml-1">How can we help?</label>
                                        <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primaryDark transition-all outline-none appearance-none cursor-pointer">
                                            <option value="">Select a subject</option>
                                            <option value="support">Customer Support</option>
                                            <option value="sales">Sales Inquiry</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-700 uppercase ml-1">Message</label>
                                        <textarea
                                            placeholder="Tell us more about your inquiry..."
                                            rows={5}
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primaryDark transition-all outline-none resize-none"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-primaryDark hover:shadow-lg hover:shadow-primaryDark/30 active:scale-95 transition-all duration-300 group"
                                    >
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>

                                    <p className="text-[11px] text-center sm:text-left text-slate-400 leading-relaxed">
                                        By clicking send, you agree to our <span className="underline cursor-pointer hover:text-slate-600">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-slate-600">Terms</span>.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}