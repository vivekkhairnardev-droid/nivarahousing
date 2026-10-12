"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Phone,
    EnvelopeSimple,
    MapPin,
    Clock,
    Headset,
    ShieldCheck,
    Buildings,
    PaperPlaneRight,
    CheckCircle,
    ChatCircleDots,
    ArrowRight,
    User,
    IdentificationCard,
    CaretRight,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const REGIONAL_HUBS = [
    {
        state: "Karnataka",
        branches: "38+ Branches",
        hubCity: "Bengaluru (Head Office)",
        address: "No. 22-25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, JP Nagar 7th Phase, Bengaluru - 560078",
        phone: "+91 80 2655 2822",
        email: "bangalore@nivarahousing.com",
    },
    {
        state: "Tamil Nadu",
        branches: "32+ Branches",
        hubCity: "Chennai Regional Office",
        address: "Anna Salai, Guindy Industrial Estate, Chennai, Tamil Nadu - 600032",
        phone: "1800-420-2222",
        email: "tamilnadu@nivarahousing.com",
    },
    {
        state: "Andhra Pradesh",
        branches: "24+ Branches",
        hubCity: "Vijayawada Regional Office",
        address: "M.G. Road, Labbipet, Vijayawada, Andhra Pradesh - 520010",
        phone: "1800-420-2222",
        email: "ap@nivarahousing.com",
    },
    {
        state: "Telangana",
        branches: "16+ Branches",
        hubCity: "Hyderabad Regional Office",
        address: "Ameerpet Business Centre, Main Road, Hyderabad, Telangana - 500016",
        phone: "1800-420-2222",
        email: "telangana@nivarahousing.com",
    },
    {
        state: "Maharashtra",
        branches: "12+ Branches",
        hubCity: "Pune Regional Office",
        address: "Shivaji Nagar, Senapati Bapat Road, Pune, Maharashtra - 411016",
        phone: "1800-420-2222",
        email: "maharashtra@nivarahousing.com",
    },
];

const FAQS = [
    {
        q: "What is the standard response time for online inquiries?",
        a: "A dedicated Nivara loan relationship officer will reach out to you within 24 to 48 business hours after you submit your details.",
    },
    {
        q: "Can I request a doorstep document pickup or personal visit?",
        a: "Yes! Nivara specializes in doorstep service. Mention your preferred branch or area in your inquiry, and an advisor will coordinate a doorstep visit at your convenience.",
    },
    {
        q: "How can I escalate an unresolved complaint or grievance?",
        a: "You can write directly to our Nodal Grievance Redressal Officer at contact@nivarahousing.com or call +91 80 26552822. If unresolved within 30 days, you can escalate to the NHB GRIDS portal.",
    },
    {
        q: "What are customer helpline operating hours?",
        a: "Our toll-free helpline (1800-420-2222 / 1800-309-1516) operates Monday through Saturday from 9:30 AM to 6:30 PM (excluding 2nd & 4th Saturdays and public holidays).",
    },
];

export default function ContactUsPage() {
    const [selectedState, setSelectedState] = useState<string>("Karnataka");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        city: "",
        loanType: "Home Loan for Purchase",
        message: "",
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    const activeHub = REGIONAL_HUBS.find((h) => h.state === selectedState) || REGIONAL_HUBS[0];

    return (
        <div className="flex flex-col flex-1 bg-background text-foreground">
            {/* HERO / HEADER SECTION */}
            <section className="relative bg-[#4a050c] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
                {/* Background decorative radial glow */}
                <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 80% 20%, #ff8a99 0%, transparent 40%), radial-gradient(circle at 15% 80%, #ff526c 0%, transparent 45%)",
                    }}
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs text-white/70 mb-4">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <CaretRight size={12} />
                        <span className="text-white font-medium">Contact Us</span>
                    </div>

                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white border border-white/15 mb-4 backdrop-blur-sm">
                            <Headset size={14} className="text-[#ff94a2]" />
                            <span>Customer Care & Support</span>
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                            We&apos;re Here to Help You Own Your Dream Home
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                            Have questions about eligibility, interest rates, or your ongoing loan application?
                            Connect with our team online, over the phone, or visit any of our 119+ branches across India.
                        </p>
                    </div>
                </div>
            </section>

            {/* QUICK CONTACT CHIPS */}
            <section className="-mt-8 relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1: Toll Free */}
                        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Phone size={20} weight="bold" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                                        Toll-Free Helpline
                                    </span>
                                    <a
                                        href="tel:18004202222"
                                        className="text-base font-bold text-foreground hover:text-primary transition-colors block mt-0.5"
                                    >
                                        1800-420-2222
                                    </a>
                                    <a
                                        href="tel:18003091516"
                                        className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        Alt: 1800-309-1516
                                    </a>
                                </div>
                            </div>
                            <span className="text-[11px] text-muted-foreground mt-3 pt-3 border-t border-border flex items-center gap-1">
                                <Clock size={13} className="text-primary" />
                                Mon - Sat (9:30 AM - 6:30 PM)
                            </span>
                        </div>

                        {/* Card 2: Email */}
                        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <EnvelopeSimple size={20} weight="bold" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                                        Email Support
                                    </span>
                                    <a
                                        href="mailto:contact@nivarahousing.com"
                                        className="text-sm font-bold text-foreground hover:text-primary transition-colors block mt-0.5 truncate"
                                    >
                                        contact@nivarahousing.com
                                    </a>
                                    <span className="text-xs text-muted-foreground block">
                                        For loan queries & documentation
                                    </span>
                                </div>
                            </div>
                            <span className="text-[11px] text-muted-foreground mt-3 pt-3 border-t border-border flex items-center gap-1">
                                <CheckCircle size={13} className="text-emerald-600" />
                                Responds within 24-48 hrs
                            </span>
                        </div>

                        {/* Card 3: Head Office */}
                        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Buildings size={20} weight="bold" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                                        Corporate Office
                                    </span>
                                    <span className="text-sm font-bold text-foreground block mt-0.5">
                                        BNR Complex, JP Nagar
                                    </span>
                                    <span className="text-xs text-muted-foreground block line-clamp-1">
                                        7th Phase, Bengaluru - 560078
                                    </span>
                                </div>
                            </div>
                            <span className="text-[11px] text-muted-foreground mt-3 pt-3 border-t border-border flex items-center gap-1">
                                <MapPin size={13} className="text-primary" />
                                Karnataka, India
                            </span>
                        </div>

                        {/* Card 4: Grievance Desk */}
                        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                            <div className="flex items-start gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <ShieldCheck size={20} weight="bold" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                                        Grievance Officer
                                    </span>
                                    <span className="text-sm font-bold text-foreground block mt-0.5">
                                        Rajesh CA (Nodal Officer)
                                    </span>
                                    <a
                                        href="tel:08026552822"
                                        className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors block"
                                    >
                                        +91 80 2655 2822
                                    </a>
                                </div>
                            </div>
                            <span className="text-[11px] text-muted-foreground mt-3 pt-3 border-t border-border flex items-center gap-1">
                                <ShieldCheck size={13} className="text-primary" />
                                Fair Practice Redressal
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT: INQUIRY FORM & OFFICE DETAILS */}
            <section className="py-14 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                        {/* LEFT COLUMN: GET IN TOUCH FORM */}
                        <div className="lg:col-span-7 bg-card rounded-3xl p-6 sm:p-9 border border-border shadow-sm">
                            <div className="mb-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                    Send Us a Message
                                </span>
                                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                                    Request a Callback or Loan Consultation
                                </h2>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                                    Fill out the form below and an authorized Nivara Home Finance advisor will get in touch to assist with your requirements.
                                </p>
                            </div>

                            {formSubmitted ? (
                                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center space-y-3 animate-in fade-in-0 duration-200">
                                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                                        <CheckCircle size={32} weight="fill" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-foreground">
                                        Thank You, {formData.fullName || "Applicant"}!
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                        Your request has been received. Our loan relationship team will contact you at{" "}
                                        <strong className="text-foreground">{formData.mobileNumber || "your mobile number"}</strong>{" "}
                                        shortly.
                                    </p>
                                    <div className="pt-3">
                                        <Button
                                            variant="outline"
                                            className="rounded-full cursor-pointer"
                                            onClick={() => {
                                                setFormSubmitted(false);
                                                setFormData({
                                                    fullName: "",
                                                    mobileNumber: "",
                                                    email: "",
                                                    city: "",
                                                    loanType: "Home Loan for Purchase",
                                                    message: "",
                                                });
                                            }}
                                        >
                                            Submit Another Inquiry
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Full Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                                                <span>Full Name</span>
                                                <span className="text-primary">*</span>
                                            </label>
                                            <div className="relative">
                                                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. Ramesh Kumar"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile Number */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                                                <span>Mobile Number</span>
                                                <span className="text-primary">*</span>
                                            </label>
                                            <div className="relative">
                                                <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                                <input
                                                    type="tel"
                                                    required
                                                    maxLength={10}
                                                    placeholder="10-digit mobile number"
                                                    value={formData.mobileNumber}
                                                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Email Address */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground">Email Address</label>
                                            <div className="relative">
                                                <EnvelopeSimple size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                                <input
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* City / Town */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                                                <span>City / Town</span>
                                                <span className="text-primary">*</span>
                                            </label>
                                            <div className="relative">
                                                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. Bengaluru, Hosur, Hubballi"
                                                    value={formData.city}
                                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Interested In */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-foreground">Product of Interest</label>
                                        <select
                                            value={formData.loanType}
                                            onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                                            className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                                        >
                                            <option value="Home Loan for Purchase">Home Loan for Purchase</option>
                                            <option value="Home Loan for Construction">Home Loan for Construction</option>
                                            <option value="Composite Home Loan">Composite Home Loan (Plot + Construction)</option>
                                            <option value="Improvement & Extension Loan">Improvement & Extension Loan</option>
                                            <option value="Loan Against Property">Loan Against Property (LAP)</option>
                                            <option value="Refinance Loan">Refinance Loan</option>
                                            <option value="Balance Transfer">Balance Transfer & Top-Up</option>
                                            <option value="Existing Loan Query">Existing Loan Query / Customer Service</option>
                                        </select>
                                    </div>

                                    {/* Message / Remarks */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-foreground">Message / Query Details</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Tell us about the property, required loan amount or specific question..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full p-3.5 rounded-xl text-sm bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            className="w-full sm:w-auto rounded-full px-8 h-11 text-sm font-semibold cursor-pointer shadow-sm hover:shadow"
                                        >
                                            <PaperPlaneRight size={16} weight="bold" />
                                            <span>Submit Inquiry</span>
                                        </Button>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground pt-1">
                                        By clicking &apos;Submit Inquiry&apos;, you authorize Nivara Home Finance Limited to contact you via Call, SMS, or WhatsApp regarding your home loan requirement.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* RIGHT COLUMN: REGIONAL NETWORK & OFFICES */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Regional Office Tabs Card */}
                            <div className="bg-card rounded-3xl p-6 border border-border shadow-sm space-y-5">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                        Presence Across India
                                    </span>
                                    <h3 className="font-heading text-xl font-extrabold text-foreground mt-0.5">
                                        119+ Branches in 5 States
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Select a state to view our principal hub and support coordinate:
                                    </p>
                                </div>

                                {/* State Pills */}
                                <div className="flex flex-wrap gap-1.5">
                                    {REGIONAL_HUBS.map((hub) => (
                                        <button
                                            key={hub.state}
                                            type="button"
                                            onClick={() => setSelectedState(hub.state)}
                                            className={cn(
                                                "px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border",
                                                selectedState === hub.state
                                                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                                                    : "bg-muted/50 hover:bg-muted text-foreground border-border/70"
                                            )}
                                        >
                                            {hub.state}
                                        </button>
                                    ))}
                                </div>

                                {/* Active Hub Details Card */}
                                <div className="p-4 rounded-2xl bg-accent/40 border border-border/80 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-heading font-bold text-sm text-foreground">
                                            {activeHub.hubCity}
                                        </h4>
                                        <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                            {activeHub.branches}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-xs text-muted-foreground">
                                        <div className="flex items-start gap-2">
                                            <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                                            <span>{activeHub.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone size={15} className="text-primary shrink-0" />
                                            <a href={`tel:${activeHub.phone.replace(/[^0-9]/g, "")}`} className="hover:text-primary font-medium">
                                                {activeHub.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <EnvelopeSimple size={15} className="text-primary shrink-0" />
                                            <a href={`mailto:${activeHub.email}`} className="hover:text-primary font-medium">
                                                {activeHub.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Need Instant Help Banner */}
                            <div className="rounded-3xl p-6 bg-gradient-to-br from-[#4a050c] to-[#70101b] text-white border border-[#4a050c]/80 shadow-md space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                    <ChatCircleDots size={22} weight="bold" />
                                </div>
                                <h3 className="font-heading text-lg font-bold">
                                    Chat with Nivara AI Assistant
                                </h3>
                                <p className="text-xs text-white/80 leading-relaxed">
                                    Get instant automated answers for EMI estimations, eligibility criteria, and required loan documents 24/7.
                                </p>
                                <a
                                    href="#ai-chat"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-full transition-all cursor-pointer border border-white/20 mt-1"
                                >
                                    <span>Open AI Chatbot</span>
                                    <ArrowRight size={13} weight="bold" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="bg-[#faf5f4] py-14 lg:py-16 border-t border-border/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center mb-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            Got Questions?
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1.5">
                            Everything you need to know about reaching out and getting support from Nivara.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-3.5">
                        {FAQS.map((faq, idx) => (
                            <div key={idx} className="bg-card rounded-2xl p-5 border border-border/80 shadow-2xs">
                                <h3 className="font-heading font-bold text-sm sm:text-base text-foreground">
                                    {faq.q}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
