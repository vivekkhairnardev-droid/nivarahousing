"use client";

import React from "react";
import Link from "next/link";
import {
    House,
    Buildings,
    MapTrifold,
    UsersThree,
    ShieldCheck,
    CaretRight,
} from "@phosphor-icons/react";

const STATS = [
    {
        value: "19,300+",
        label: "Loans Disbursed",
        description: "Helping families own and construct their dream homes across semi-urban India.",
        tag: "Housing Impact",
        icon: House,
    },
    {
        value: "5",
        label: "States Covered",
        description: "Active footprint across Karnataka, Tamil Nadu, Andhra Pradesh, Telangana & Maharashtra.",
        tag: "Presence",
        icon: MapTrifold,
    },
    {
        value: "119+",
        label: "Branches",
        description: "Widespread local branch network providing doorstep customer service.",
        tag: "Doorstep Reach",
        icon: Buildings,
    },
    {
        value: "1,400+",
        label: "Team Strength",
        description: "Dedicated on-ground loan specialists and credit evaluation advisors.",
        tag: "On-Ground Support",
        icon: UsersThree,
    },
    {
        value: "98%",
        label: "Customer Trust",
        description: "High satisfaction with zero hidden charges and transparent terms.",
        tag: "Transparent",
        icon: ShieldCheck,
    },
];

export function ImpactStats() {
    return (
        <section
            aria-labelledby="impact-heading"
            className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-border/40"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
                    <div className="max-w-2xl">
                        <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold tracking-wider text-primary uppercase">
                            <i className="size-2 rounded-full bg-primary" />
                            Our Impact & Reach
                        </span>
                        <h2
                            id="impact-heading"
                            className="text-[clamp(2rem,3.6vw,2.875rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-balance text-foreground"
                        >
                            Building Dreams Across India
                        </h2>
                        <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                            Transforming lives by making formal home finance accessible to self-employed and informal income families with doorstep service.
                        </p>
                    </div>

                    <Link
                        href="/locate-branch"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group shrink-0"
                    >
                        <span>Locate nearest branch across 119+ locations</span>
                        <CaretRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {STATS.map(({ value, label, description, tag, icon: Icon }) => (
                        <div
                            key={label}
                            className="group relative flex flex-col justify-between rounded-[22px] border border-black/5 bg-[#faf5f4]/60 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1.5 hover:bg-white hover:border-primary/30 hover:shadow-[0_22px_45px_-20px_rgba(156,11,25,0.22)]"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <span className="grid size-12 place-items-center rounded-[14px] bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
                                        <Icon size={24} weight="bold" />
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-border/60 text-muted-foreground">
                                        {tag}
                                    </span>
                                </div>

                                <strong className="block text-[34px] sm:text-[38px] font-extrabold leading-none tracking-[-0.04em] text-[#9c0b19]">
                                    {value}
                                </strong>
                                <h3 className="text-base font-bold text-foreground mt-2 tracking-tight">
                                    {label}
                                </h3>
                            </div>

                            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ImpactStats;
