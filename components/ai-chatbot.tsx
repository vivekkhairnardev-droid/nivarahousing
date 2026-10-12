"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    Sparkle,
    PaperPlaneTilt,
    ChatCenteredDots,
    X,
    ArrowClockwise,
    CaretRight,
    Calculator,
    House,
    MapPin,
    Phone,
    ShieldCheck,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    sender: "bot" | "user";
    text: string;
    timestamp: string;
    action?: {
        label: string;
        href: string;
        icon?: React.ElementType;
    };
    chips?: string[];
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: "msg-1",
        sender: "bot",
        text: "Namaste! 🙏 I am Nivara AI, your personal housing finance assistant. How can I assist with your home ownership journey today?",
        timestamp: "Just now",
        chips: [
            "Home loan interest rates",
            "Calculate EMI for ₹20 Lakhs",
            "Documents needed for self-employed",
            "Plot purchase & construction loan",
            "Locate nearest branch",
        ],
    },
];

// Helper to calculate EMI
function calculateEmi(principal: number, years: number, rate = 9.5) {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - principal;
    return {
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
    };
}

// AI response engine with intelligent keyword matching
function generateBotResponse(input: string): Omit<Message, "id" | "timestamp" | "sender"> {
    const q = input.toLowerCase().trim();

    // 1. EMI Calculation request with amounts
    const lakhMatch = q.match(/(\d+)\s*(lakh|lac|l)/i);
    const yearMatch = q.match(/(\d+)\s*(year|yr)/i);

    if (q.includes("emi") || q.includes("calculate") || lakhMatch) {
        let amount = 2000000; // default 20 lakh
        let years = 20; // default 20 years

        if (lakhMatch) {
            amount = parseInt(lakhMatch[1], 10) * 100000;
        } else if (q.includes("10 lakh")) amount = 1000000;
        else if (q.includes("15 lakh")) amount = 1500000;
        else if (q.includes("20 lakh")) amount = 2000000;
        else if (q.includes("25 lakh")) amount = 2500000;
        else if (q.includes("30 lakh")) amount = 3000000;
        else if (q.includes("50 lakh")) amount = 5000000;

        if (yearMatch) {
            years = Math.min(25, Math.max(5, parseInt(yearMatch[1], 10)));
        }

        const { emi, totalInterest } = calculateEmi(amount, years, 9.5);
        const inr = new Intl.NumberFormat("en-IN");

        return {
            text: `📊 **Estimated EMI Breakdown** at **9.50%* p.a.**:\n\n• **Loan Amount**: ₹${inr.format(amount)}\n• **Tenure**: ${years} Years\n• **Monthly EMI**: **₹${inr.format(emi)} / month**\n• **Estimated Total Interest**: ₹${inr.format(totalInterest)}\n\n*Would you like to fine-tune this with our interactive slider or start your application?*`,
            action: {
                label: "Open Full EMI Calculator",
                href: "/calculators/emi-calculator",
                icon: Calculator,
            },
            chips: ["Check loan eligibility", "Required documents", "Apply for this loan"],
        };
    }

    // 2. Interest rate queries
    if (q.includes("rate") || q.includes("interest") || q.includes("roi") || q.includes("percentage")) {
        return {
            text: `🏷️ **Nivara Home Loan Interest Rates**:\n\n• Home loan interest starts from **9.50%* p.a.**\n• **Tenure**: Flexible terms up to **25 years**\n• **Processing**: Minimal transparent paperwork with no hidden costs\n• **Doorstep Evaluation**: Tailored for both salaried & self-employed individuals with informal income.`,
            action: {
                label: "Explore Loan Products",
                href: "/loans/home-loan",
                icon: House,
            },
            chips: ["Calculate my EMI", "Self-employed eligibility", "Talk to advisor"],
        };
    }

    // 3. Self-employed & informal income
    if (q.includes("self") || q.includes("business") || q.includes("informal") || q.includes("salary slip") || q.includes("shopkeeper") || q.includes("income")) {
        return {
            text: `💼 **Specialized Fair Income Assessment**:\n\nAt Nivara, we proudly welcome **shopkeepers, small traders, artisans, and micro-entrepreneurs** who may not have standard salary slips or IT returns.\n\nOur doorstep credit specialists visit your business or premises to understand the way you actually earn and structure an affordable loan.`,
            action: {
                label: "Check Eligibility",
                href: "/calculators/eligibility-calculator",
                icon: ShieldCheck,
            },
            chips: ["Documents required", "Branch locator", "Apply online"],
        };
    }

    // 4. Documents needed
    if (q.includes("document") || q.includes("paper") || q.includes("kyc") || q.includes("proof")) {
        return {
            text: `📋 **Required Documents for Home Loan**:\n\n1. **KYC**: Aadhaar Card, PAN Card, Voter ID / Passport\n2. **Income Proof**: 6 months bank statements, business passbook or salary slips (if applicable)\n3. **Property Papers**: Registered sale deed, plot title document, approved building plan / estimate\n\n*Our doorstep advisor will visit you to collect copies and assist with any missing records.*`,
            action: {
                label: "Start Doorstep Application",
                href: "/apply",
                icon: House,
            },
            chips: ["Find nearest branch", "Check interest rate", "Calculate EMI"],
        };
    }

    // 5. Plot & Construction loan
    if (q.includes("plot") || q.includes("construct") || q.includes("build") || q.includes("land")) {
        return {
            text: `🏡 **Residential Plot & Construction Loans**:\n\n• **Plot Loan**: Buy residential land to build your future home.\n• **Construction Loan**: Milestone-based disbursements as work progresses on your owned plot.\n• **Composite Loan**: Single combined facility to acquire land and construct together.`,
            action: {
                label: "Explore Plot & Construction Loans",
                href: "/loans/construction-loan",
                icon: House,
            },
            chips: ["Calculate construction EMI", "Required property papers", "Locate branch"],
        };
    }

    // 6. Branch Locator & Locations
    if (q.includes("branch") || q.includes("location") || q.includes("near me") || q.includes("city") || q.includes("karnataka") || q.includes("tamil nadu") || q.includes("maharashtra") || q.includes("telangana") || q.includes("andhra")) {
        return {
            text: `📍 **119+ Branches Across 5 States**:\n\nNivara is present across **Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, and Maharashtra**.\n\nOur teams provide localized support in Kannada, Tamil, Telugu, Marathi, Hindi & English right at your doorstep.`,
            action: {
                label: "Find Your Nearest Branch",
                href: "/locate-branch",
                icon: MapPin,
            },
            chips: ["Call toll-free helpline", "Home loan rates", "Apply now"],
        };
    }

    // 7. Contact / Helpline
    if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("toll") || q.includes("help") || q.includes("support")) {
        return {
            text: `📞 **Get in Touch with Nivara Support**:\n\n• **Toll-Free Helpline**: [1800-420-2222](tel:18004202222)\n• **Hours**: Mon – Sat, 9:30 AM to 6:30 PM\n• **Email**: [contact@nivarahousing.com](mailto:contact@nivarahousing.com)\n• **Doorstep Service**: Available across all 119+ branch network areas.`,
            action: {
                label: "Call Toll-Free: 1800-420-2222",
                href: "tel:18004202222",
                icon: Phone,
            },
            chips: ["Check interest rate", "Locate nearest branch", "Calculate EMI"],
        };
    }

    // 8. General fallback with structured options
    return {
        text: `I'm happy to help you with anything related to **Nivara Housing Finance**! \n\nYou can ask me to:\n• Calculate your monthly EMI (e.g. *"EMI for 25 lakhs for 20 years"*)\n• Explain loan types (*Purchase, Construction, Plot, LAP*)\n• Check eligibility requirements (*Self-employed & salaried*)\n• Find branch locations or customer helpline details.`,
        action: {
            label: "Check Loan Eligibility",
            href: "/calculators/eligibility-calculator",
            icon: Calculator,
        },
        chips: [
            "Home loan interest rate",
            "Calculate EMI for ₹25 Lakhs",
            "Documents needed",
            "Find nearest branch",
        ],
    };
}

export function AiChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleOpenEvent = () => setIsOpen(true);
        const handleHashChange = () => {
            if (window.location.hash === "#ai-chat") setIsOpen(true);
        };

        window.addEventListener("open-ai-chat", handleOpenEvent);
        window.addEventListener("hashchange", handleHashChange);
        if (window.location.hash === "#ai-chat") setIsOpen(true);

        return () => {
            window.removeEventListener("open-ai-chat", handleOpenEvent);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            setTimeout(() => inputRef.current?.focus(), 150);
        }
    }, [isOpen, messages, isTyping]);

    const handleSend = (textToSend?: string) => {
        const query = (textToSend || input).trim();
        if (!query) return;

        const userMsg: Message = {
            id: `usr-${Date.now()}`,
            sender: "user",
            text: query,
            timestamp: "Just now",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulated AI response delay for natural feel
        setTimeout(() => {
            const botReply = generateBotResponse(query);
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                sender: "bot",
                text: botReply.text,
                action: botReply.action,
                chips: botReply.chips,
                timestamp: "Just now",
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 600);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    const handleReset = () => {
        setMessages(INITIAL_MESSAGES);
    };

    return (
        <>
            {/* FLOATING TRIGGER BUTTON */}
            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
                {!isOpen && (
                    <div className="hidden md:flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 shadow-[0_8px_25px_-5px_rgba(74,5,12,0.25)] border border-neutral-200/80 animate-in fade-in slide-in-from-right-4 duration-300">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                        </span>
                        <span>Ask Nivara AI</span>
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={cn(
                        "group relative flex size-14 items-center justify-center rounded-full text-white shadow-[0_12px_32px_-8px_rgba(156,11,25,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ffc65c]/60",
                        isOpen
                            ? "bg-neutral-900 hover:bg-neutral-800"
                            : "bg-gradient-to-tr from-[#800712] via-[#9c0b19] to-[#c8101f]"
                    )}
                    aria-label={isOpen ? "Close AI chat" : "Chat with Nivara AI Assistant"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X size={24} weight="bold" className="transition-transform group-hover:rotate-90 duration-200" />
                    ) : (
                        <div className="relative flex items-center justify-center">
                            <ChatCenteredDots size={28} weight="fill" />
                            <Sparkle
                                size={14}
                                weight="fill"
                                className="absolute -top-1 -right-1 text-[#ffc65c] animate-pulse"
                            />
                        </div>
                    )}
                </button>
            </div>

            {/* CHAT WINDOW MODAL */}
            {isOpen && (
                <div
                    role="dialog"
                    aria-label="Nivara AI Chat Assistant"
                    className="fixed bottom-22 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[410px] max-w-[420px] h-[580px] max-h-[82vh] rounded-[24px] bg-white border border-border shadow-[0_25px_60px_-15px_rgba(74,5,12,0.4)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-6 duration-200"
                >
                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-[#9c0b19] via-[#850814] to-[#60050e] text-white p-4 flex items-center justify-between shrink-0 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="relative size-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-sm">
                                <Sparkle size={20} weight="fill" className="text-[#ffc65c]" />
                                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 border-2 border-[#9c0b19]" />
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm font-bold tracking-tight">Nivara AI Assistant</h3>
                                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 font-medium">Sahayak</span>
                                </div>
                                <p className="text-[11px] text-[#ffdede] flex items-center gap-1.5">
                                    <span>Online</span> • <span>Instant Loan Guidance</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                onClick={handleReset}
                                title="Restart chat"
                                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                                aria-label="Restart conversation"
                            >
                                <ArrowClockwise size={18} weight="bold" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                title="Close"
                                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={18} weight="bold" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Scroll Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#fcfbfa]/90">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex flex-col gap-1.5 max-w-[86%]",
                                    msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                                )}
                            >
                                <div
                                    className={cn(
                                        "rounded-[18px] px-4 py-3 text-sm leading-relaxed",
                                        msg.sender === "user"
                                            ? "bg-[#9c0b19] text-white rounded-br-xs shadow-sm"
                                            : "bg-white text-neutral-800 rounded-bl-xs border border-neutral-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)]"
                                    )}
                                >
                                    <div className="whitespace-pre-line text-[13.5px]">
                                        {msg.text.split("\n").map((line, idx) => {
                                            if (line.startsWith("• ")) {
                                                return (
                                                    <div key={idx} className="flex gap-1.5 my-0.5">
                                                        <span className="text-primary font-bold">•</span>
                                                        <span>{line.replace("• ", "")}</span>
                                                    </div>
                                                );
                                            }
                                            return <p key={idx} className={line === "" ? "h-2" : ""}>{line}</p>;
                                        })}
                                    </div>

                                    {/* Action Button inside message */}
                                    {msg.action && (
                                        <div className="mt-3 pt-2.5 border-t border-neutral-100">
                                            <Link
                                                href={msg.action.href}
                                                onClick={() => setIsOpen(false)}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors group"
                                            >
                                                {msg.action.icon && React.createElement(msg.action.icon, { size: 14, weight: "bold" })}
                                                <span>{msg.action.label}</span>
                                                <CaretRight size={12} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Suggested Chips under Bot message */}
                                {msg.chips && msg.chips.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-1 pt-0.5">
                                        {msg.chips.map((chip) => (
                                            <button
                                                key={chip}
                                                type="button"
                                                onClick={() => handleSend(chip)}
                                                className="text-[11.5px] px-2.5 py-1 rounded-full bg-white hover:bg-primary hover:text-white border border-neutral-200 text-neutral-700 transition-colors shadow-2xs font-medium"
                                            >
                                                {chip}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing Animation Indicator */}
                        {isTyping && (
                            <div className="flex items-center gap-1 bg-white border border-neutral-200/80 rounded-[16px] px-3.5 py-2.5 w-fit shadow-2xs">
                                <span className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                                <span className="size-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                                <span className="size-1.5 rounded-full bg-primary animate-bounce" />
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Bar */}
                    <div className="p-3 bg-white border-t border-neutral-200/80 shrink-0">
                        <div className="flex items-center gap-2 bg-[#f6f4f2] rounded-full px-3.5 py-1.5 border border-neutral-200/80 focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about loans, EMI, eligibility..."
                                className="flex-1 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => handleSend()}
                                disabled={!input.trim()}
                                className="size-8 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-all shrink-0 active:scale-95"
                                aria-label="Send message"
                            >
                                <PaperPlaneTilt size={16} weight="bold" />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-neutral-400 mt-1.5">
                            Nivara AI provides indicative terms • Regulated under RBI guidelines
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default AiChatbot;
