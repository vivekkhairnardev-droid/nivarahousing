"use client";

import Link from "next/link";
import { House, Hammer, Calculator, CaretRight } from "@phosphor-icons/react";

const OPTIONS = [
    {
        title: "Residential plot loan",
        text: "Buy the plot you want to build on.",
        href: "/loans/plot",
        cta: "Know more",
        Icon: House,
    },
    {
        title: "Home construction loan",
        text: "Fund your build, with disbursements as the work progresses.",
        href: "/loans/construction",
        cta: "Know more",
        Icon: Hammer,
    },
    {
        title: "EMI calculator",
        text: "Check your monthly instalment before you apply.",
        href: "/calculators/emi",
        cta: "Calculate EMI",
        Icon: Calculator,
    },
];

/** Sits under the hero and overlaps it – the hero's bottom padding makes room. */
export function LoanOptions() {
    return (
        <section className="relative bg-[#faf5f4] flow-root">
            <div className="container relative mx-auto -mt-[90px] grid gap-5 px-4 pb-12 sm:px-6 md:grid-cols-3 lg:-mt-[120px] lg:pb-16 lg:px-8">
                {OPTIONS.map(({ title, text, href, cta, Icon }) => (
                    <Link
                        key={title}
                        href={href}
                        className="group flex flex-col gap-2.5 rounded-[20px] border border-black/5 bg-white p-7 text-card-foreground shadow-[0_22px_40px_-26px_rgba(74,5,12,0.6)] transition hover:-translate-y-1 hover:border-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                        <span className="mb-1.5 grid size-[52px] place-items-center rounded-[14px] bg-primary text-primary-foreground">
                            <Icon className="size-[26px]" weight="bold" />
                        </span>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">{title}</h2>
                        <p className="text-[15px] text-muted-foreground">{text}</p>
                        <span className="mt-auto flex items-center gap-1.5 pt-2.5 text-[15px] font-bold text-primary">
                            {cta}
                            <CaretRight className="size-4" weight="bold" />
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}