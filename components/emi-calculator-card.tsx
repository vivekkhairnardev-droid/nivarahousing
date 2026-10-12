"use client";

import * as React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const RATE = 9.5; // % p.a. – keep in sync with the "from 9.50%*" pill

const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

export function calcEmi(principal: number, years: number, annualRate = RATE) {
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const f = Math.pow(1 + r, n);
    return (principal * r * f) / (f - 1);
}

function formatLakh(value: number) {
    const lakh = value / 100000;
    return `₹${parseFloat(lakh.toFixed(2))} lakh`;
}

export function EmiCalculatorCard({ onInteract }: { onInteract?: () => void }) {
    const [amount, setAmount] = React.useState(1500000);
    const [years, setYears] = React.useState(15);

    const emi = Math.round(calcEmi(amount, years));

    return (
        // data-no-swipe: the hero slider ignores swipe / arrow keys that start here
        <div
            data-no-swipe
            className="mx-auto w-full max-w-[400px] rounded-3xl bg-card p-6 text-card-foreground shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)] outline outline-2 outline-offset-[10px] outline-[#ffc65c] sm:p-7"
        >
            <h3 className="mb-5 text-[15px] font-semibold text-muted-foreground">
                Estimate at {RATE.toFixed(2)}%* p.a.
            </h3>

            <div className="mb-5 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Loan amount</span>
                    <output className="font-bold text-foreground">{formatLakh(amount)}</output>
                </div>
                <Slider
                    aria-label="Loan amount"
                    min={500000}
                    max={5000000}
                    step={50000}
                    value={[amount]}
                    onValueChange={(val) => {
                        const v = Array.isArray(val) ? val[0] : (val as number);
                        setAmount(v);
                        onInteract?.();
                    }}
                />
            </div>

            <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tenure</span>
                    <output className="font-bold text-foreground">{years} years</output>
                </div>
                <Slider
                    aria-label="Loan tenure in years"
                    min={5}
                    max={25}
                    step={1}
                    value={[years]}
                    onValueChange={(val) => {
                        const v = Array.isArray(val) ? val[0] : (val as number);
                        setYears(v);
                        onInteract?.();
                    }}
                />
            </div>

            <div className="flex items-baseline gap-2 border-t py-4">
                <strong className="text-[38px] font-extrabold leading-none tracking-tight">
                    ₹{inr.format(emi)}
                </strong>
                <span className="text-sm text-muted-foreground">per month</span>
            </div>

            <Link
                href="/apply"
                className={cn(buttonVariants(), "h-auto w-full rounded-full py-3.5 text-[15px] font-bold")}
            >
                Check my eligibility
            </Link>
            <p className="mt-2.5 text-xs text-muted-foreground">
                *Indicative figure. Your rate depends on your profile.
            </p>
        </div>
    );
}