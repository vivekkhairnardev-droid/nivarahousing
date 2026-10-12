"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeft, CaretRight, Pause, Play } from "@phosphor-icons/react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const AUTOPLAY_MS = 5000;
const ARCH = "rounded-[999px_999px_18px_18px]";

type Cta = { label: string; href: string; style: "solid" | "outline" };
type Slide = {
    id: string;
    image: string;
    imageAlt: string;
    pill?: React.ReactNode;
    title: string;
    description: string;
    ctas: Cta[];
};

/** Edit copy / links here – this is the only place you need to touch for content. */
const SLIDES: Slide[] = [
    {
        id: "build",
        image: "/hero-1.png",
        imageAlt: "Build your home with confidence - Nivara Housing Finance",
        pill: (
            <>
                Home loans from <b className="font-extrabold">9.50%* p.a.</b>
            </>
        ),
        title: "Build your home with confidence",
        description:
            "Get financing for your residential plot and home construction with flexible loan options and convenient disbursements.",
        ctas: [
            { label: "Explore home loans", href: "/loans/home-loan", style: "solid" },
            { label: "Calculate EMI", href: "/calculators/emi-calculator", style: "outline" },
        ],
    },
    {
        id: "plot",
        image: "/hero-2.png",
        imageAlt: "Residential plot loans to buy the land your future home will stand on",
        title: "Own the plot. Build when you're ready.",
        description: "Residential plot loans to buy the land your future home will stand on.",
        ctas: [
            { label: "Explore plot loans", href: "/loans/plot", style: "solid" },
            { label: "Check eligibility", href: "/calculators/eligibility-calculator", style: "outline" },
        ],
    },
    {
        id: "construction",
        image: "/hero-3.png",
        imageAlt: "Turn your plot into a home with milestone construction disbursements",
        title: "Turn your plot into a home",
        description:
            "Construction loans for the land you already own, with disbursements that follow your build.",
        ctas: [
            { label: "Explore construction loans", href: "/loans/construction-loan", style: "solid" },
            { label: "Calculate EMI", href: "/calculators/emi-calculator", style: "outline" },
        ],
    },
    {
        id: "purchase",
        image: "/hero-4.jpg",
        imageAlt: "Move into a home you love with Nivara home purchase loan",
        title: "Move into a home you love",
        description:
            "Home loans to buy a flat or independent house, new or resale, for your own family.",
        ctas: [
            { label: "Explore home purchase loans", href: "/loans/home-loan", style: "solid" },
            { label: "Check eligibility", href: "/calculators/eligibility-calculator", style: "outline" },
        ],
    },
    {
        id: "emi",
        image: "/hero-5.jpg",
        imageAlt: "Know your EMI and repayments before you apply",
        title: "Know your EMI before you apply",
        description: "Calculate your monthly instalment with clear terms, competitive rates, and no sign-up needed.",
        ctas: [
            { label: "Open full calculator", href: "/calculators/emi-calculator", style: "solid" },
            { label: "Apply now", href: "/customer/pay-emi", style: "outline" },
        ],
    },
];

function usePrefersReducedMotion() {
    const [reduced, setReduced] = React.useState(false);
    React.useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return reduced;
}

function ArchFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative mx-auto w-[min(74%,320px)] lg:w-[min(100%,400px)]">
            <div
                aria-hidden
                className={cn(
                    "pointer-events-none absolute -inset-3.5 translate-x-3.5 -translate-y-1.5 border-2 border-[#ffc65c]",
                    ARCH,
                )}
            />
            <div
                className={cn(
                    "relative aspect-[4/5] overflow-hidden bg-neutral-800 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]",
                    ARCH,
                )}
            >
                {children}
            </div>
        </div>
    );
}

function SlideVisual({ slide, priority }: { slide: Slide; priority?: boolean }) {
    return (
        <ArchFrame>
            <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 400px, 320px"
                className="object-cover object-center"
            />
        </ArchFrame>
    );
}

const ctaClass = "h-auto rounded-full px-7 py-4 text-base font-bold max-sm:w-full";

export function HeroSlider() {
    const reduced = usePrefersReducedMotion();
    const [current, setCurrent] = React.useState(0);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const touchX = React.useRef<number | null>(null);

    const nextSlide = React.useCallback(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, []);

    const prevSlide = React.useCallback(() => {
        setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    const goToSlide = React.useCallback((index: number) => {
        setCurrent(index);
    }, []);

    const toggleAutoplay = React.useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    React.useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, AUTOPLAY_MS);

        return () => clearInterval(timer);
    }, [isPlaying, current]);

    const ghostBtn =
        "size-11 rounded-full border-white/50 bg-transparent text-white hover:border-white hover:bg-white/15 hover:text-white";

    return (
        <section
            aria-label="Featured home loans"
            className="text-white"
            style={{
                backgroundImage:
                    "radial-gradient(760px 520px at 80% 25%, rgba(255,120,110,.35), transparent 65%), linear-gradient(135deg, #c8101f 0%, #9c0b19 55%, #6f0711 100%)",
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-[150px] pt-10 lg:pb-[190px] lg:pt-14">
                <div
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Featured home loans"
                    onKeyDown={(e) => {
                        if ((e.target as HTMLElement).closest("[data-no-swipe]")) return;
                        if (e.key === "ArrowLeft") prevSlide();
                        if (e.key === "ArrowRight") nextSlide();
                    }}
                    onTouchStart={(e) => {
                        touchX.current = (e.target as HTMLElement).closest("[data-no-swipe]")
                            ? null
                            : e.touches[0].clientX;
                    }}
                    onTouchEnd={(e) => {
                        if (touchX.current === null) return;
                        const dx = e.changedTouches[0].clientX - touchX.current;
                        if (Math.abs(dx) > 50) {
                            if (dx < 0) nextSlide();
                            else prevSlide();
                        }
                        touchX.current = null;
                    }}
                >
                    {/* All slides sit in the same grid cell and cross-fade */}
                    <div className="grid">
                        {SLIDES.map((slide, i) => {
                            const active = i === current;
                            const Heading = i === 0 ? "h1" : "h2";
                            return (
                                <div
                                    key={slide.id}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${i + 1} of ${SLIDES.length}`}
                                    aria-hidden={!active}
                                    className={cn(
                                        "col-start-1 row-start-1 grid items-center gap-9 transition-[opacity,visibility] duration-500 motion-reduce:transition-none lg:grid-cols-[1.1fr_0.9fr] lg:gap-10",
                                        active ? "visible opacity-100" : "invisible opacity-0",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "transition-transform duration-[600ms] motion-reduce:transition-none",
                                            active ? "translate-y-0" : "translate-y-2.5",
                                        )}
                                    >
                                        {slide.pill && (
                                            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 py-2 pl-3 pr-4 text-sm font-medium">
                                                <i className="size-[9px] rounded-full bg-[#ffc65c] shadow-[0_0_0_4px_rgba(255,198,92,0.28)]" />
                                                <span>{slide.pill}</span>
                                            </span>
                                        )}
                                        <Heading className="mb-5 max-w-[14em] text-[clamp(2.375rem,5vw,4.125rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-balance">
                                            {slide.title}
                                        </Heading>
                                        <p className="mb-8 max-w-[30em] text-[19px] leading-relaxed text-[#ffdede]">
                                            {slide.description}
                                        </p>
                                        <div className="flex flex-wrap gap-3.5">
                                            {slide.ctas.map((cta) => (
                                                <Link
                                                    key={cta.label}
                                                    href={cta.href}
                                                    tabIndex={active ? 0 : -1}
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: cta.style === "solid" ? "secondary" : "outline",
                                                        }),
                                                        ctaClass,
                                                        cta.style === "solid"
                                                            ? "bg-white text-[#9c0b19] hover:bg-[#ffe9e9]"
                                                            : "border-white/55 bg-transparent text-white hover:bg-white/15 hover:text-white",
                                                    )}
                                                >
                                                    {cta.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <SlideVisual slide={slide} priority={i === 0} />
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="mt-10 flex flex-wrap items-center gap-3.5">
                        <Button
                            variant="outline"
                            size="icon"
                            className={ghostBtn}
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <CaretLeft className="size-[18px]" weight="bold" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className={ghostBtn}
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <CaretRight className="size-[18px]" weight="bold" />
                        </Button>

                        <div className="mx-1.5 flex gap-1.5">
                            {SLIDES.map((slide, i) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    aria-label={`Go to slide ${i + 1}`}
                                    aria-current={i === current ? "true" : undefined}
                                    onClick={() => goToSlide(i)}
                                    className="grid h-7 w-[34px] items-center rounded-sm sm:w-[46px]"
                                >
                                    <span className="relative block h-1 overflow-hidden rounded bg-white/30">
                                        {i === current && (
                                            <span
                                                key={current}
                                                className="absolute inset-0 origin-left bg-white"
                                                style={
                                                    reduced
                                                        ? undefined
                                                        : {
                                                            animation: `nivara-fill ${AUTOPLAY_MS}ms linear forwards`,
                                                            animationPlayState: isPlaying ? "running" : "paused",
                                                        }
                                                }
                                            />
                                        )}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className={ghostBtn}
                            onClick={toggleAutoplay}
                            aria-label={isPlaying ? "Pause automatic slide change" : "Start automatic slide change"}
                        >
                            {isPlaying ? <Pause className="size-4" weight="fill" /> : <Play className="size-4" weight="fill" />}
                        </Button>

                        <span aria-hidden className="min-w-[3.2em] text-[13px] tabular-nums text-[#ffd5d5]">
                            {current + 1} / {SLIDES.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}