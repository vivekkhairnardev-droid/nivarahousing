"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    CaretDown,
    Phone,
    MapPin,
    House,
    Calculator,
    CreditCard,
    User,
    List,
    X,
    ArrowRight,
    ShieldCheck,
    Buildings,
    Receipt,
    Clock,
    Briefcase,
    FileText,
    Headset,
    CheckCircle,
    CurrencyInr,
    Wrench,
    ArrowsLeftRight,
    ChartLineUp,
    Info,
    MagnifyingGlass,
    Sparkle,
    Bank,
    Percent,
    Scales,
    Question,
    Gavel,
    Users,
    GraduationCap,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropdownItem {
    title: string;
    description?: string;
    href: string;
    icon?: React.ElementType;
    badge?: string;
}

interface DropdownColumn {
    title: string;
    items: DropdownItem[];
}

interface NavSection {
    title: string;
    href?: string;
    dropdown?: {
        items?: DropdownItem[];
        columns?: DropdownColumn[];
        featuredPromo?: {
            title: string;
            desc: string;
            ctaText: string;
            ctaHref: string;
            tag?: string;
        };
    };
}

const navSections: NavSection[] = [
    {
        title: "Loans & Products",
        dropdown: {
            items: [
                {
                    title: "Home Loan for Construction",
                    description: "Build your dream home on your owned residential plot",
                    href: "/services/construction-loan",
                    icon: Buildings,
                },
                {
                    title: "Home Loan for Purchase",
                    description: "Finance for ready-to-move or under-construction homes",
                    href: "/services/home-loan",
                    icon: House,
                },
                {
                    title: "Composite Home Loan",
                    description: "Combined funding facility to acquire land and construct your home",
                    href: "/services/composite-loan",
                    icon: ShieldCheck,
                },
                {
                    title: "Improvement & Extension Loan",
                    description: "Revamp, add extra rooms or renovate existing property",
                    href: "/services/improvementandextension",
                    icon: Wrench,
                },
                {
                    title: "Loan Against Property",
                    description: "Unlock high-value funds against residential or commercial property",
                    href: "/services/lap",
                    icon: CurrencyInr,
                },
                {
                    title: "Refinance Loan",
                    description: "Refinance existing loan obligations with competitive rates",
                    href: "/services/refinance-loan",
                    icon: ArrowsLeftRight,
                },
                {
                    title: "Balance Transfer",
                    description: "Transfer existing loans to Nivara for lower EMI & bonus funds",
                    href: "/services/balance-transfer",
                    icon: ArrowsLeftRight,
                },
            ],
            featuredPromo: {
                title: "Fast Approvals within 48 Hours*",
                desc: "Special schemes for self-employed & informal income segments with minimal paperwork.",
                ctaText: "Check Eligibility",
                ctaHref: "#eligibility",
            },
        },
    },
    {
        title: "About Nivara",
        dropdown: {
            items: [
                {
                    title: "Company Profile",
                    description: "Empowering affordable housing dreams across India",
                    href: "/about/company-profile",
                    icon: Buildings,
                },
                {
                    title: "Leadership & Board",
                    description: "Guided by veterans in banking, risk management & finance",
                    href: "/about/leadership",
                    icon: User,
                },
                {
                    title: "Investor Relations & Disclosures",
                    description: "Annual reports, financial statements & regulatory filings",
                    href: "/about/investors",
                    icon: Briefcase,
                },
                {
                    title: "Careers @ Nivara",
                    description: "Join our fast-growing, mission-driven financial team",
                    href: "/about/careers",
                    icon: Briefcase,
                },
            ],
            featuredPromo: {
                tag: "Trust & Growth",
                title: "60+ Branches Across 5 States",
                desc: "Serving thousands of happy families in their journey to home ownership.",
                ctaText: "Our Story",
                ctaHref: "/about",
            },
        },
    },
    {
        title: "Customer & Services",
        dropdown: {
            columns: [
                {
                    title: "Mandates & Forms",
                    items: [
                        {
                            title: "E-NACH Mandate",
                            href: "/customercenter/e-nach",
                            icon: Bank,
                        },
                        {
                            title: "ECS Mandate",
                            href: "/customercenter/ecs-mandate",
                            icon: Receipt,
                        },
                        {
                            title: "E-NACH Bank Code",
                            href: "/customercenter/enach-bankcode",
                            icon: Buildings,
                        },
                        {
                            title: "Application Form",
                            href: "/customercenter/app-form",
                            icon: FileText,
                        },
                        {
                            title: "Consumer Education",
                            href: "/customercenter/consumer-education",
                            icon: GraduationCap,
                        },
                    ],
                },
                {
                    title: "Rates & Compliance",
                    items: [
                        {
                            title: "Interest Rates",
                            href: "/customercenter/interest-rate",
                            icon: Percent,
                        },
                        {
                            title: "Risk Based Pricing",
                            href: "/customercenter/risk-based-pricing",
                            icon: Scales,
                        },
                        {
                            title: "MITC",
                            href: "/customercenter/mitc",
                            icon: ShieldCheck,
                        },
                        {
                            title: "Fair Practice Code",
                            href: "/customercenter/fair-practice-code",
                            icon: CheckCircle,
                        },
                        {
                            title: "Grievance & Complaint",
                            href: "/customercenter/complaint",
                            icon: Headset,
                        },
                    ],
                },
                {
                    title: "Support & Assets",
                    items: [
                        {
                            title: "EMI Calculator",
                            href: "/customercenter/calculator",
                            icon: Calculator,
                        },
                        {
                            title: "FAQs",
                            href: "/customercenter/faqs",
                            icon: Question,
                        },
                        {
                            title: "Auction Properties",
                            href: "/customercenter/auction-properties",
                            icon: Gavel,
                        },
                        {
                            title: "Recovery Agents",
                            href: "/customercenter/recovery-agents",
                            icon: Users,
                        },
                    ],
                },
            ],
        },
    },
    {
        title: "Corporate Governance",
        href: "/corporate-governance",
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
];

interface SearchItem {
    title: string;
    description: string;
    category: "Loans" | "Calculators" | "Services" | "Help";
    href: string;
    icon: React.ElementType;
    keywords?: string[];
}

const SEARCH_ITEMS: SearchItem[] = [
    {
        title: "Home Loan for Construction",
        description: "Milestone-based funding to build your house on an owned plot",
        category: "Loans",
        href: "/services/construction-loan",
        icon: Buildings,
        keywords: ["build", "construction", "plot", "disbursement", "house"],
    },
    {
        title: "Home Loan for Purchase",
        description: "Finance for ready-to-move or under-construction apartments and houses",
        category: "Loans",
        href: "/services/home-loan",
        icon: House,
        keywords: ["buy", "flat", "house", "new", "resale", "purchase"],
    },
    {
        title: "Composite Home Loan",
        description: "Combined funding facility to acquire a plot and construct your home",
        category: "Loans",
        href: "/services/composite-loan",
        icon: ShieldCheck,
        keywords: ["both", "land and house", "plot build", "composite"],
    },
    {
        title: "Improvement & Extension Loan",
        description: "Revamp, add extra rooms or renovate existing property",
        category: "Loans",
        href: "/services/improvementandextension",
        icon: Wrench,
        keywords: ["repair", "renovate", "upgrade", "paint", "extend", "improvement"],
    },
    {
        title: "Loan Against Property",
        description: "Unlock high-value funds against residential or commercial property",
        category: "Loans",
        href: "/services/lap",
        icon: CurrencyInr,
        keywords: ["mortgage", "lap", "equity", "funds", "property loan"],
    },
    {
        title: "Refinance Loan",
        description: "Refinance existing loans with better terms and competitive rates",
        category: "Loans",
        href: "/services/refinance-loan",
        icon: ArrowsLeftRight,
        keywords: ["refinance", "switch", "transfer", "lower emi"],
    },
    {
        title: "Balance Transfer",
        description: "Transfer existing loans to Nivara for lower EMI & bonus funds",
        category: "Loans",
        href: "/services/balance-transfer",
        icon: ArrowsLeftRight,
        keywords: ["switch", "refinance", "lower rate", "topup", "transfer"],
    },
    {
        title: "Home Loan EMI Calculator",
        description: "Calculate monthly instalments, principal and interest breakdowns",
        category: "Calculators",
        href: "/calculators/emi-calculator",
        icon: Calculator,
        keywords: ["emi", "monthly payment", "interest rate", "tenure"],
    },
    {
        title: "Loan Eligibility Calculator",
        description: "Estimate loan amount based on income and existing obligations",
        category: "Calculators",
        href: "/calculators/eligibility-calculator",
        icon: ChartLineUp,
        keywords: ["how much", "qualification", "salary", "limit"],
    },
    {
        title: "Balance Transfer Savings Calculator",
        description: "Calculate how much you can save by switching your loan to Nivara",
        category: "Calculators",
        href: "/calculators/balance-transfer",
        icon: ArrowsLeftRight,
        keywords: ["save", "reduce emi", "transfer calc"],
    },
    {
        title: "PMAY Subsidy Calculator",
        description: "Estimate interest subsidy benefits under credit-linked subsidy schemes",
        category: "Calculators",
        href: "/calculators/pmay-subsidy",
        icon: Calculator,
        keywords: ["pmay", "government", "subsidy", "pradhan mantri"],
    },
    {
        title: "Pay EMI Online",
        description: "Instant, safe online loan repayment via UPI, NetBanking or Debit Card",
        category: "Services",
        href: "/customer/pay-emi",
        icon: CreditCard,
        keywords: ["pay", "bill", "repay", "installment", "online payment"],
    },
    {
        title: "Download Certificates & Statements",
        description: "Get provisional/final interest certificate, statement of account",
        category: "Services",
        href: "/customer/statements",
        icon: Receipt,
        keywords: ["tax", "it certificate", "statement", "download"],
    },
    {
        title: "Track Application Status",
        description: "Real-time tracking of your submitted loan application",
        category: "Services",
        href: "/customer/track-application",
        icon: FileText,
        keywords: ["status", "check application", "reference number"],
    },
    {
        title: "Customer Login Portal",
        description: "Sign in to manage your loan account, view repayment schedules",
        category: "Services",
        href: "/customer/login",
        icon: User,
        keywords: ["portal", "signin", "account"],
    },
    {
        title: "E-NACH Mandate",
        description: "Electronic National Automated Clearing House mandate setup & download",
        category: "Services",
        href: "/customercenter/e-nach",
        icon: Bank,
        keywords: ["enach", "nach", "mandate", "auto debit", "autopay"],
    },
    {
        title: "ECS Mandate",
        description: "Electronic Clearing Service mandate forms & guidelines",
        category: "Services",
        href: "/customercenter/ecs-mandate",
        icon: Receipt,
        keywords: ["ecs", "clearing", "mandate", "bank"],
    },
    {
        title: "E-NACH Bank Code Directory",
        description: "List of participating live banks and utility codes for E-NACH",
        category: "Services",
        href: "/customercenter/enach-bankcode",
        icon: Buildings,
        keywords: ["bank code", "utility code", "ifsc", "live banks"],
    },
    {
        title: "Application Form",
        description: "Download physical loan application forms and checklists",
        category: "Services",
        href: "/customercenter/app-form",
        icon: FileText,
        keywords: ["application form", "form", "pdf", "apply offline"],
    },
    {
        title: "Consumer Education",
        description: "Financial literacy guides, loan awareness and borrower education",
        category: "Services",
        href: "/customercenter/consumer-education",
        icon: GraduationCap,
        keywords: ["education", "consumer", "awareness", "guide", "literacy"],
    },
    {
        title: "Interest Rates",
        description: "Current benchmark lending rates and product-wise interest schedules",
        category: "Services",
        href: "/customercenter/interest-rate",
        icon: Percent,
        keywords: ["interest rate", "roi", "percentage", "floating", "fixed"],
    },
    {
        title: "Risk Based Pricing Policy",
        description: "Criteria and methodology for credit risk assessment and pricing",
        category: "Services",
        href: "/customercenter/risk-based-pricing",
        icon: Scales,
        keywords: ["risk", "pricing", "policy", "credit score"],
    },
    {
        title: "MITC (Most Important Terms & Conditions)",
        description: "Key loan terms, fee structure and regulatory disclosures",
        category: "Services",
        href: "/customercenter/mitc",
        icon: ShieldCheck,
        keywords: ["mitc", "terms", "conditions", "charges", "fees"],
    },
    {
        title: "Fair Practice Code",
        description: "NHB & RBI aligned standards and fair treatment guidelines",
        category: "Services",
        href: "/customercenter/fair-practice-code",
        icon: CheckCircle,
        keywords: ["fair practice", "code", "rbi", "nhb", "conduct"],
    },
    {
        title: "Grievance & Complaint Redressal",
        description: "Nodal grievance officers, escalate unresolved complaints",
        category: "Help",
        href: "/customercenter/complaint",
        icon: Headset,
        keywords: ["complaint", "grievance", "escalation", "ombudsman", "dispute"],
    },
    {
        title: "FAQs (Frequently Asked Questions)",
        description: "Answers to common queries regarding home loans and services",
        category: "Help",
        href: "/customercenter/faqs",
        icon: Question,
        keywords: ["faq", "help", "questions", "answers", "how to"],
    },
    {
        title: "Auction Properties",
        description: "SARFAESI and bank public auction properties open for bids",
        category: "Services",
        href: "/customercenter/auction-properties",
        icon: Gavel,
        keywords: ["auction", "sarfaesi", "properties", "bid", "sale"],
    },
    {
        title: "Recovery Agents Directory",
        description: "Authorised collection and recovery agencies representing Nivara",
        category: "Services",
        href: "/customercenter/recovery-agents",
        icon: Users,
        keywords: ["recovery", "agents", "collection", "agency", "verification"],
    },
    {
        title: "Contact Us",
        description: "Get in touch with Nivara customer care, head office & local branches",
        category: "Help",
        href: "/contact-us",
        icon: Phone,
        keywords: ["contact", "support", "touch", "reach", "email", "helpline", "call", "address"],
    },
    {
        title: "Branch Locator",
        description: "Find your nearest Nivara branch across 119+ locations in 5 states",
        category: "Help",
        href: "/locate-branch",
        icon: MapPin,
        keywords: ["branch", "office", "address", "near me", "location"],
    },
    {
        title: "Toll-Free Helpline (1800-420-2222)",
        description: "Speak directly with customer support (Mon-Sat: 9:30 AM - 6:30 PM)",
        category: "Help",
        href: "tel:18004202222",
        icon: Phone,
        keywords: ["call", "phone", "contact", "support", "helpline"],
    },
    {
        title: "Chat with Nivara AI Assistant",
        description: "Instant AI answers for interest rates, EMI calculations, and eligibility",
        category: "Help",
        href: "#ai-chat",
        icon: Sparkle,
        keywords: ["ai", "chatbot", "chat", "assistant", "bot", "sahayak", "ask"],
    },
    {
        title: "Grievance Redressal & Policies",
        description: "Customer charter, nodal officers, ombudsman and Fair Practice Code",
        category: "Help",
        href: "/customer/grievance",
        icon: ShieldCheck,
        keywords: ["complaint", "nodal", "ombudsman", "policy"],
    },
    {
        title: "Corporate Governance",
        description: "Board guidelines, statutory policies, whistleblower & code of conduct",
        category: "Help",
        href: "/corporate-governance",
        icon: Scales,
        keywords: ["governance", "board", "compliance", "ethics", "policy", "corporate"],
    },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
    const [applyModalOpen, setApplyModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Search state
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Quick form state inside modal
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        city: "",
        loanType: "Home Purchase Loan",
        loanAmount: "15",
    });

    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Filter search results
    const filteredSearchItems = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const q = searchQuery.toLowerCase().trim();
        return SEARCH_ITEMS.filter(
            (item) =>
                item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q) ||
                item.keywords?.some((k) => k.toLowerCase().includes(q))
        );
    }, [searchQuery]);

    // Focus input on search modal open
    useEffect(() => {
        if (searchOpen) {
            setTimeout(() => searchInputRef.current?.focus(), 50);
        } else {
            setSearchQuery("");
        }
    }, [searchOpen]);

    // Keyboard shortcuts for search (Cmd+K or / to open, Esc to close)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
                (e.key === "/" && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement))
            ) {
                e.preventDefault();
                setSearchOpen((prev) => !prev);
            } else if (e.key === "Escape" && searchOpen) {
                setSearchOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [searchOpen]);

    // Lock body scroll when mobile menu, apply modal or search modal is open
    useEffect(() => {
        if (mobileMenuOpen || applyModalOpen || searchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen, applyModalOpen, searchOpen]);

    const handleMouseEnter = (title: string) => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setActiveDropdown(title);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    const toggleMobileAccordion = (title: string) => {
        setMobileExpandedSection(mobileExpandedSection === title ? null : title);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setApplyModalOpen(false);
            setFormData({
                fullName: "",
                phone: "",
                city: "",
                loanType: "Home Purchase Loan",
                loanAmount: "15",
            });
        }, 2200);
    };

    return (
        <>
            <header
                className={cn(
                    "w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
                    isScrolled
                        ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-md border-b border-border/60"
                        : "bg-white dark:bg-zinc-950 border-b border-border/40"
                )}
            >
                {/* TOP UTILITY STRIP */}
                <div
                    className={cn(
                        "bg-[#4a050c] text-[#F8FAFC] text-xs border-b border-black/10 overflow-hidden transition-all duration-300 ease-in-out",
                        isScrolled
                            ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none border-transparent"
                            : "max-h-12 opacity-100 translate-y-0"
                    )}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between text-[11px] sm:text-xs">
                        {/* Left Info: Contact & Working Hours & Interest rate */}
                        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                            <a
                                href="tel:18004202222"
                                className="flex items-center gap-1.5 text-[#F8FAFC] hover:text-white transition-colors group shrink-0"
                                title="Toll-Free Helpline"
                            >
                                <Phone size={12} weight="bold" className="text-white/80 shrink-0" />
                                <span className="font-medium tracking-wide">
                                    <span className="hidden sm:inline">Toll Free: </span>1800-420-2222
                                </span>
                            </a>

                            <span className="hidden md:block h-3.5 w-px bg-white/25 shrink-0" aria-hidden="true" />

                            <div className="hidden lg:flex items-center gap-1.5 text-[#F8FAFC]/90">
                                <Clock size={12} className="text-[#F8FAFC]/80 shrink-0" />
                                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
                            </div>

                            <span className="hidden xl:block h-3.5 w-px bg-white/25 shrink-0" aria-hidden="true" />

                            <div className="hidden sm:flex items-center gap-1.5 text-[#F8FAFC]/90">
                                <span>Home Loans from</span>
                                <span className="font-semibold text-white">9.50%* p.a.</span>
                            </div>
                        </div>

                        {/* Right Quick Links */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 font-medium shrink-0">
                            <Link
                                href="/locate-branch"
                                className="hidden md:flex items-center gap-1.5 text-[#F8FAFC] hover:text-white transition-colors"
                            >
                                <MapPin size={12} weight="bold" className="text-white/80 shrink-0" />
                                <span>Branch Locator</span>
                            </Link>

                            <span className="hidden md:block h-3.5 w-px bg-white/25 shrink-0" aria-hidden="true" />

                            <a
                                href="#pay-emi"
                                className="flex items-center gap-1.5 text-[#F8FAFC] hover:text-white transition-colors"
                            >
                                <CreditCard size={12} weight="bold" className="text-white/80 shrink-0" />
                                <span>Pay EMI Online</span>
                            </a>

                            <span className="h-3.5 w-px bg-white/25 shrink-0" aria-hidden="true" />

                            <Link
                                href="/customer/login"
                                className="flex items-center gap-1.5 text-[#F8FAFC] hover:text-white transition-colors"
                            >
                                <User size={12} weight="bold" className="text-white/80 shrink-0" />
                                <span>Customer Login</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* MAIN NAVIGATION BAR */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-18 sm:h-20 flex items-center justify-between gap-4">
                        {/* LOGO */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 -ml-1"
                            aria-label="Nivara Housing Finance Home"
                        >
                            <div className="relative h-11 sm:h-12 w-[140px] sm:w-[160px] flex items-center">
                                <Image
                                    src="/logo-logo.png"
                                    alt="Nivara Housing Finance"
                                    fill
                                    priority
                                    className="object-contain object-left"
                                    sizes="(max-width: 640px) 140px, 160px"
                                />
                            </div>
                        </Link>

                        {/* DESKTOP NAV ITEMS */}
                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            {navSections.map((section) => {
                                const hasDropdown = !!section.dropdown;
                                const isOpen = activeDropdown === section.title;

                                if (!hasDropdown) {
                                    return (
                                        <Link
                                            key={section.title}
                                            href={section.href || "#"}
                                            className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent/40"
                                        >
                                            {section.title}
                                        </Link>
                                    );
                                }

                                return (
                                    <div
                                        key={section.title}
                                        className="relative"
                                        onMouseEnter={() => handleMouseEnter(section.title)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button
                                            type="button"
                                            aria-expanded={isOpen}
                                            className={cn(
                                                "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all outline-none cursor-pointer",
                                                isOpen
                                                    ? "text-primary bg-primary/5"
                                                    : "text-foreground/85 hover:text-primary hover:bg-accent/40"
                                            )}
                                        >
                                            <span>{section.title}</span>
                                            <CaretDown
                                                size={13}
                                                weight="bold"
                                                className={cn(
                                                    "transition-transform duration-200 text-muted-foreground",
                                                    isOpen && "rotate-180 text-primary"
                                                )}
                                            />
                                        </button>

                                        {/* MEGAMENU / DROPDOWN CONTAINER */}
                                        {isOpen && section.dropdown && (
                                            <div
                                                className={cn(
                                                    "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50",
                                                    section.dropdown.columns
                                                        ? "w-[800px] max-w-[95vw]"
                                                        : (section.dropdown.items && section.dropdown.items.length > 4 ? "w-[700px]" : "w-[620px]")
                                                )}
                                            >
                                                <div className="bg-white text-zinc-900 rounded-xl shadow-xl border border-zinc-200 p-5 overflow-hidden">
                                                    {section.dropdown.columns ? (
                                                        <div className="space-y-4">
                                                            <div className="grid grid-cols-3 gap-6">
                                                                {section.dropdown.columns.map((col, idx) => (
                                                                    <div key={col.title} className={cn("space-y-2.5", idx > 0 && "border-l border-zinc-100 pl-6")}>
                                                                        <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                                            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
                                                                                {col.title}
                                                                            </h4>
                                                                        </div>
                                                                        <ul className="space-y-1">
                                                                            {col.items.map((item) => {
                                                                                const ItemIcon = item.icon;
                                                                                return (
                                                                                    <li key={item.title}>
                                                                                        <Link
                                                                                            href={item.href}
                                                                                            onClick={() => setActiveDropdown(null)}
                                                                                            className="group flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-700 hover:text-primary hover:bg-zinc-50 transition-colors"
                                                                                        >
                                                                                            {ItemIcon && (
                                                                                                <span className="w-6 h-6 rounded bg-zinc-100 text-zinc-600 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                                                                    <ItemIcon size={13} weight="bold" />
                                                                                                </span>
                                                                                            )}
                                                                                            <span className="truncate flex-1">{item.title}</span>
                                                                                            <ArrowRight
                                                                                                size={11}
                                                                                                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary shrink-0"
                                                                                            />
                                                                                        </Link>
                                                                                    </li>
                                                                                );
                                                                            })}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            {/* Quick Assistance Footer */}
                                                            <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 bg-zinc-50 -mx-5 -mb-5 px-5 py-2.5 rounded-b-xl">
                                                                <div className="flex items-center gap-2">
                                                                    <Headset size={15} className="text-primary shrink-0" />
                                                                    <span>Customer Care: <strong className="text-zinc-800">1800-420-2222</strong> (Mon-Sat 9:30 AM - 6:30 PM)</span>
                                                                </div>
                                                                <Link
                                                                    href="/customercenter/calculator"
                                                                    onClick={() => setActiveDropdown(null)}
                                                                    className="text-primary hover:underline font-semibold flex items-center gap-1 shrink-0"
                                                                >
                                                                    <span>EMI Calculator</span>
                                                                    <ArrowRight size={12} weight="bold" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="grid grid-cols-12 gap-5">
                                                            {/* Items List */}
                                                            <div className="col-span-7 grid grid-cols-1 gap-1">
                                                                {section.dropdown.items?.map((item) => {
                                                                    const ItemIcon = item.icon;
                                                                    return (
                                                                        <Link
                                                                            key={item.title}
                                                                            href={item.href}
                                                                            onClick={() => setActiveDropdown(null)}
                                                                            className="group flex items-start gap-3 p-2 rounded-md hover:bg-zinc-50 transition-colors text-left"
                                                                        >
                                                                            <div className="w-8 h-8 rounded bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-hover:text-primary transition-colors">
                                                                                {ItemIcon && <ItemIcon size={16} />}
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <span className="text-sm font-medium text-zinc-900 group-hover:text-primary transition-colors block">
                                                                                    {item.title}
                                                                                </span>
                                                                                {item.description && (
                                                                                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">
                                                                                        {item.description}
                                                                                    </p>
                                                                                )}
                                                                            </div>
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </div>

                                                            {/* Featured Side Promo Card */}
                                                            {section.dropdown.featuredPromo && (
                                                                <div className="col-span-5 bg-zinc-50 rounded-lg p-4 border border-zinc-200 flex flex-col justify-between">
                                                                    <div>
                                                                        {section.dropdown.featuredPromo.tag && (
                                                                            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-1.5">
                                                                                {section.dropdown.featuredPromo.tag}
                                                                            </span>
                                                                        )}
                                                                        <h4 className="font-heading font-semibold text-sm text-zinc-900 leading-snug">
                                                                            {section.dropdown.featuredPromo.title}
                                                                        </h4>
                                                                        <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                                                                            {section.dropdown.featuredPromo.desc}
                                                                        </p>
                                                                    </div>

                                                                    <div className="mt-4 pt-3 border-t border-zinc-200">
                                                                        <Button
                                                                            size="sm"
                                                                            className="w-full justify-between"
                                                                            onClick={() => {
                                                                                setActiveDropdown(null);
                                                                                setApplyModalOpen(true);
                                                                            }}
                                                                        >
                                                                            <span>{section.dropdown.featuredPromo.ctaText}</span>
                                                                            <ArrowRight size={14} weight="bold" />
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* RIGHT ACTION BUTTONS */}
                        <div className="hidden lg:flex items-center gap-2.5">
                            {/* SEARCH TRIGGER BUTTON */}
                            <button
                                type="button"
                                onClick={() => setSearchOpen(true)}
                                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted border border-border/60 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="Search website"
                                title="Search (⌘K or /)"
                            >
                                <MagnifyingGlass size={16} weight="bold" className="text-foreground/70" />
                                <span className="hidden xl:inline">Search...</span>
                                <kbd className="hidden xl:inline-flex text-[10px] bg-background/80 px-1.5 py-0.5 rounded border border-border/80 text-muted-foreground/90 font-mono">
                                    ⌘K
                                </kbd>
                            </button>

                            <Button
                                onClick={() => setApplyModalOpen(true)}
                                className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-5 sm:px-6 h-9 sm:h-10 text-sm shadow-sm hover:shadow transition-all cursor-pointer"
                            >
                                <span>Apply Now</span>
                            </Button>
                        </div>

                        {/* MOBILE ACTION BUTTONS */}
                        <div className="flex items-center gap-1.5 lg:hidden">
                            <button
                                type="button"
                                onClick={() => setSearchOpen(true)}
                                className="p-2 rounded-lg text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                aria-label="Search website"
                            >
                                <MagnifyingGlass size={20} weight="bold" className="text-foreground" />
                            </button>

                            <Button
                                size="xs"
                                className="sm:hidden rounded-full font-medium px-3 cursor-pointer"
                                onClick={() => setApplyModalOpen(true)}
                            >
                                Apply
                            </Button>

                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={mobileMenuOpen}
                            >
                                {mobileMenuOpen ? (
                                    <X size={24} weight="bold" className="text-foreground" />
                                ) : (
                                    <List size={24} weight="bold" className="text-foreground" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE SLIDE-DOWN / DRAWER MENU */}
                {mobileMenuOpen && (
                    <div
                        className={cn(
                            "lg:hidden fixed inset-x-0 bottom-0 bg-background/98 backdrop-blur-xl border-t border-border z-40 overflow-y-auto animate-in slide-in-from-top-4 duration-200 transition-all",
                            isScrolled ? "top-[72px] sm:top-[80px]" : "top-[104px] sm:top-[116px]"
                        )}
                    >
                        <div className="px-4 py-5 flex flex-col gap-4">
                            {/* Quick Actions at Top of Mobile Menu */}
                            <div className="grid grid-cols-2 gap-2 pb-2">
                                <Button
                                    className="w-full rounded-full"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setApplyModalOpen(true);
                                    }}
                                >
                                    <span>Apply Loan</span>
                                </Button>
                                <Button
                                    className="w-full rounded-full"
                                    variant="outline"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        window.location.hash = "pay-emi";
                                    }}
                                >
                                    <CreditCard size={15} />
                                    <span>Pay EMI</span>
                                </Button>
                            </div>

                            {/* Accordion Navigation */}
                            <div className="divide-y divide-border/60 border-y border-border/60">
                                {navSections.map((section) => {
                                    const hasDropdown = !!section.dropdown;
                                    const isExpanded = mobileExpandedSection === section.title;

                                    if (!hasDropdown) {
                                        return (
                                            <div key={section.title} className="py-3">
                                                <Link
                                                    href={section.href || "#"}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary"
                                                >
                                                    <span>{section.title}</span>
                                                    <ArrowRight size={14} className="text-muted-foreground" />
                                                </Link>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={section.title} className="py-3">
                                            <button
                                                type="button"
                                                onClick={() => toggleMobileAccordion(section.title)}
                                                className="w-full flex items-center justify-between text-sm font-semibold text-foreground cursor-pointer"
                                            >
                                                <span>{section.title}</span>
                                                <CaretDown
                                                    size={15}
                                                    weight="bold"
                                                    className={cn(
                                                        "transition-transform text-muted-foreground",
                                                        isExpanded && "rotate-180 text-primary"
                                                    )}
                                                />
                                            </button>

                                            {isExpanded && section.dropdown && (
                                                <div className="mt-3 pl-2 pr-1 space-y-2 animate-in fade-in-0 duration-150">
                                                    {section.dropdown.columns ? (
                                                        <div className="space-y-4 pt-1">
                                                            {section.dropdown.columns.map((col) => (
                                                                <div key={col.title} className="space-y-1">
                                                                    <div className="flex items-center gap-1.5 px-2 py-1">
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                                                            {col.title}
                                                                        </h4>
                                                                    </div>
                                                                    <div className="space-y-0.5">
                                                                        {col.items.map((item) => {
                                                                            const ItemIcon = item.icon;
                                                                            return (
                                                                                <Link
                                                                                    key={item.title}
                                                                                    href={item.href}
                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                    className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-accent/60 transition-colors text-xs font-medium text-foreground"
                                                                                >
                                                                                    {ItemIcon && (
                                                                                        <div className="w-6 h-6 rounded bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0">
                                                                                            <ItemIcon size={13} weight="bold" />
                                                                                        </div>
                                                                                    )}
                                                                                    <span>{item.title}</span>
                                                                                </Link>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        section.dropdown.items?.map((item) => {
                                                            const ItemIcon = item.icon;
                                                            return (
                                                                <Link
                                                                    key={item.title}
                                                                    href={item.href}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/60 transition-colors"
                                                                >
                                                                    <div className="w-8 h-8 rounded bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0">
                                                                        {ItemIcon && <ItemIcon size={16} />}
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-sm font-medium text-foreground block">
                                                                            {item.title}
                                                                        </span>
                                                                        {item.description && (
                                                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                                                                {item.description}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile Contact & Support Details */}
                            <div className="pt-2 pb-6 space-y-3">
                                <div className="p-3.5 rounded-xl bg-accent/40 border border-border/80 space-y-2">
                                    <div className="text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-1.5">
                                        <Headset size={14} className="text-primary" />
                                        <span>Customer Assistance</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                                        <span>Toll Free Number</span>
                                        <a
                                            href="tel:18004202222"
                                            className="font-bold text-foreground hover:text-primary"
                                        >
                                            1800-420-2222
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span>Support Hours</span>
                                        <span>Mon - Sat (9:30 AM - 6:30 PM)</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
                                    <Link
                                        href="/customer/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-1 font-semibold text-primary hover:underline"
                                    >
                                        <User size={13} />
                                        <span>Borrower Portal Login</span>
                                    </Link>
                                    <Link
                                        href="/locate-branch"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-1 text-foreground hover:text-primary"
                                    >
                                        <MapPin size={13} />
                                        <span>Branch Locator</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* QUICK APPLY / INQUIRY MODAL */}
            {applyModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
                    <div
                        className="relative w-full max-w-lg bg-card text-card-foreground rounded-2xl shadow-2xl border border-border p-6 sm:p-7 overflow-hidden animate-in zoom-in-95 duration-200"
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setApplyModalOpen(false)}
                            className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                            aria-label="Close dialog"
                        >
                            <X size={20} weight="bold" />
                        </button>

                        {submitted ? (
                            <div className="py-8 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center mb-4">
                                    <CheckCircle size={36} weight="fill" />
                                </div>
                                <h3 className="font-heading font-bold text-xl text-foreground">
                                    Application Received!
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                                    Thank you, <span className="font-semibold text-foreground">{formData.fullName}</span>. Our loan expert will call you shortly on{" "}
                                    <span className="font-semibold text-foreground">{formData.phone}</span>.
                                </p>
                                <div className="mt-4 px-3 py-1.5 rounded-lg bg-accent text-xs text-muted-foreground">
                                    Reference ID: NIV-{Math.floor(100000 + Math.random() * 900000)}
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="mb-5">
                                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                                        Apply for a Home Loan
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                                        Submit your details and our housing specialist will assist you with loan sanction.
                                    </p>
                                </div>

                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-foreground mb-1">
                                            Loan Type
                                        </label>
                                        <select
                                            value={formData.loanType}
                                            onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option>Home Purchase Loan</option>
                                            <option>Home Construction Loan</option>
                                            <option>Home Extension & Renovation</option>
                                            <option>Loan Against Property (LAP)</option>
                                            <option>Balance Transfer & Top-Up</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-foreground mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Ramesh Kumar"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-foreground mb-1">
                                                Mobile Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                pattern="[0-9]{10}"
                                                placeholder="10-digit mobile number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-foreground mb-1">
                                                City / Town *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Bengaluru, Pune, Chennai"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-foreground mb-1">
                                                Required Loan Amount: <span className="text-primary font-bold">₹{formData.loanAmount} Lakhs</span>
                                            </label>
                                            <input
                                                type="range"
                                                min="3"
                                                max="50"
                                                step="1"
                                                value={formData.loanAmount}
                                                onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                                className="w-full accent-primary h-2 bg-secondary rounded-lg cursor-pointer mt-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pt-1 text-[11px] text-muted-foreground">
                                        <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                                        <span>Your data is 100% confidential and protected by RBI banking guidelines.</span>
                                    </div>

                                    <div className="pt-2">
                                        <Button
                                            type="submit"
                                            className="w-full"
                                        >
                                            Submit Loan Inquiry
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* SEARCH MODAL */}
            {searchOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 animate-in fade-in duration-150"
                    onClick={() => setSearchOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search site"
                >
                    <div
                        className="w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[80vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Input Header */}
                        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-background">
                            <MagnifyingGlass size={20} weight="bold" className="text-primary shrink-0" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search loans, calculators, branches, services..."
                                className="flex-1 bg-transparent border-none text-sm sm:text-base text-foreground placeholder:text-muted-foreground outline-none"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted"
                                    aria-label="Clear search"
                                >
                                    <X size={16} weight="bold" />
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={() => setSearchOpen(false)}
                                className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground hover:text-foreground font-medium"
                            >
                                ESC
                            </button>
                        </div>

                        {/* Results or Suggestions */}
                        <div className="overflow-y-auto p-4 space-y-4">
                            {searchQuery.trim() === "" ? (
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                                        Popular Searches
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {[
                                            "Ask AI Assistant",
                                            "EMI Calculator",
                                            "Residential Plot Loan",
                                            "Construction Loan",
                                            "Pay EMI Online",
                                            "Branch Locator",
                                        ].map((tag) => (
                                            <button
                                                key={tag}
                                                type="button"
                                                onClick={() => {
                                                    if (tag === "Ask AI Assistant") {
                                                        setSearchOpen(false);
                                                        window.dispatchEvent(new CustomEvent("open-ai-chat"));
                                                    } else {
                                                        setSearchQuery(tag);
                                                    }
                                                }}
                                                className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>

                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                                        Quick Links
                                    </p>
                                    <div className="space-y-1">
                                        {SEARCH_ITEMS.slice(0, 4).map((item) => {
                                            const ItemIcon = item.icon;
                                            return (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    onClick={() => {
                                                        setSearchOpen(false);
                                                        if (item.href === "#ai-chat") {
                                                            window.dispatchEvent(new CustomEvent("open-ai-chat"));
                                                        }
                                                    }}
                                                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-accent group transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                            <ItemIcon size={18} weight="bold" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </p>
                                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : filteredSearchItems.length > 0 ? (
                                <div className="space-y-1.5">
                                    <p className="text-xs text-muted-foreground mb-2">
                                        Found {filteredSearchItems.length} result{filteredSearchItems.length > 1 ? "s" : ""}
                                    </p>
                                    {filteredSearchItems.map((item) => {
                                        const ItemIcon = item.icon;
                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                onClick={() => {
                                                    setSearchOpen(false);
                                                    if (item.href === "#ai-chat") {
                                                        window.dispatchEvent(new CustomEvent("open-ai-chat"));
                                                    }
                                                }}
                                                className="flex items-center justify-between p-3 rounded-xl hover:bg-accent group transition-colors border border-transparent hover:border-border/60"
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                        <ItemIcon size={20} weight="bold" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                                                {item.title}
                                                            </p>
                                                            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-8 text-center">
                                    <MagnifyingGlass size={32} className="mx-auto text-muted-foreground/60 mb-2" />
                                    <p className="text-sm font-medium text-foreground">No results for &ldquo;{searchQuery}&rdquo;</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Try searching for &ldquo;EMI&rdquo;, &ldquo;Plot&rdquo;, &ldquo;Construction&rdquo;, or &ldquo;Branch&rdquo;
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-2.5 border-t border-border bg-muted/40 text-[11px] text-muted-foreground flex items-center justify-between">
                            <span>Navigate Nivara Housing Finance</span>
                            <span>ESC to close</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
