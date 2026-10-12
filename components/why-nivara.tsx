"use client";

import React from "react";
import { Users, ChartBar, House, MapPin } from "@phosphor-icons/react";

const FEATURES: { title: string; text: string; Icon: React.ElementType }[] = [
    {
        title: "Self-employed and salaried",
        text: "Shopkeepers, traders, professionals and employees are all welcome to apply.",
        Icon: Users,
    },
    {
        title: "Fair income assessment",
        text: "We understand earnings that rise and fall, and we assess them with that in mind.",
        Icon: ChartBar,
    },
    {
        title: "Plot, build or buy",
        text: "One lender for the land, the construction, and the finished home.",
        Icon: House,
    },
    {
        title: "A branch near you",
        text: "Talk to a real person in your own language, close to where you live.",
        Icon: MapPin,
    },
];

export function WhyNivara() {
    return (
        <section
            aria-labelledby="why-heading"
            className="relative overflow-hidden text-white"
            style={{ backgroundImage: "linear-gradient(135deg, #5a0610 0%, #3d040a 100%)" }}
        >
            {/* Faint roof-line motif, echoes the logo. Decorative only. */}
            <svg
                aria-hidden
                viewBox="0 0 400 300"
                fill="none"
                stroke="#fff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute -bottom-8 -right-14 h-auto w-[620px] opacity-[0.09]"
            >
                <path d="M10 150L200 12l190 138" />
                <path d="M50 128v160h300V128" />
                <path d="M160 288V190h80v98" />
            </svg>

            <div className="container relative mx-auto grid items-center gap-11 px-4 sm:px-6 lg:px-8 py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-[72px] lg:py-[88px]">
                <div>
                    <h2
                        id="why-heading"
                        className="mb-4 text-[clamp(1.875rem,3.6vw,2.875rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-balance"
                    >
                        Home loans for the way you actually earn
                    </h2>
                    <p className="max-w-[30em] text-lg text-[#f0c9cc]">
                        Not every income comes with a salary slip. We build loans around self-employed and
                        salaried families alike, so your plans don&apos;t wait on paperwork that doesn&apos;t fit.
                    </p>
                </div>

                <ul className="grid gap-x-9 gap-y-8 sm:grid-cols-2">
                    {FEATURES.map(({ title, text, Icon }) => (
                        <li key={title}>
                            <span className="mb-3.5 grid size-12 place-items-center rounded-full border-[1.5px] border-[#ffc65c] text-[#ffc65c]">
                                <Icon className="size-[22px]" weight="bold" aria-hidden />
                            </span>
                            <h3 className="mb-1.5 text-[19px] font-bold tracking-tight">{title}</h3>
                            <p className="text-[15px] text-[#f0c9cc]">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}