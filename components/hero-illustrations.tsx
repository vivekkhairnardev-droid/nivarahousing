/**
 * Placeholder illustrations for slides 2-4.
 * Swap these for real photos (next/image) whenever the client supplies them.
 */
const svgProps = {
    viewBox: "0 0 400 500",
    preserveAspectRatio: "xMidYMid slice",
    role: "img",
    className: "block h-full w-full",
} as const;

export function PlotIllustration() {
    return (
        <svg {...svgProps} aria-label="Illustration of a marked-out residential plot">
            <defs>
                <linearGradient id="nv-sky-plot" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff3e2" />
                    <stop offset="1" stopColor="#ffc7bb" />
                </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#nv-sky-plot)" />
            <circle cx="285" cy="150" r="48" fill="#ffc65c" />
            <g fill="#e8a39a">
                <rect x="14" y="296" width="42" height="70" />
                <rect x="62" y="272" width="30" height="94" />
                <rect x="304" y="284" width="52" height="82" />
                <rect x="360" y="306" width="40" height="60" />
            </g>
            <rect y="360" width="400" height="140" fill="#83b968" />
            <rect y="395" width="400" height="105" fill="#74ab5b" />
            <polygon points="88,420 312,420 360,478 40,478" fill="#e7c89b" stroke="#fff" strokeWidth="3" strokeDasharray="10 8" />
            <g stroke="#fff" strokeWidth="3" strokeLinecap="round">
                <path d="M88 420v-34M312 420v-34M360 478v-40M40 478v-40" />
            </g>
            <g fill="#c8101f">
                <path d="M88 386l24 8-24 8z" />
                <path d="M312 386l24 8-24 8z" />
                <path d="M360 438l26 8-26 8z" />
                <path d="M40 438l26 8-26 8z" />
            </g>
            <g transform="translate(150 300)">
                <rect width="100" height="56" rx="6" fill="#fff" />
                <path d="M50 56v40" stroke="#fff" strokeWidth="6" />
                <path d="M26 18h48M26 32h32" stroke="#c8101f" strokeWidth="6" strokeLinecap="round" />
            </g>
        </svg>
    );
}

export function ConstructionIllustration() {
    return (
        <svg {...svgProps} aria-label="Illustration of a house under construction with a crane">
            <defs>
                <linearGradient id="nv-sky-build" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff3e2" />
                    <stop offset="1" stopColor="#ffcfc2" />
                </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#nv-sky-build)" />
            <circle cx="90" cy="120" r="38" fill="#ffc65c" />
            <rect y="410" width="400" height="90" fill="#74ab5b" />
            {/* crane */}
            <g stroke="#c8101f" strokeWidth="5" fill="none" strokeLinecap="round">
                <path d="M340 410V120" />
                <path d="M340 140H170M340 120l-120 20" />
                <path d="M340 140h30" />
                <path d="M336 410h-14M344 410h14" />
            </g>
            <g stroke="#c8101f" strokeWidth="2.5" fill="none">
                <path d="M332 410l16-30-16-30 16-30-16-30 16-30-16-30" />
                <path d="M348 410l-16-30 16-30-16-30 16-30-16-30 16-30" />
            </g>
            <path d="M200 140v70" stroke="#fff" strokeWidth="3" />
            <rect x="186" y="210" width="28" height="18" rx="3" fill="#fff" />
            {/* house structure */}
            <rect x="70" y="330" width="190" height="80" fill="#fff" />
            <rect x="94" y="352" width="34" height="58" fill="#f3c6bd" />
            <rect x="198" y="352" width="34" height="34" fill="#f3c6bd" />
            <g fill="#fff">
                <rect x="70" y="252" width="12" height="78" />
                <rect x="152" y="252" width="12" height="78" />
                <rect x="248" y="252" width="12" height="78" />
                <rect x="70" y="244" width="190" height="10" />
            </g>
            <path d="M60 244L165 176L270 244" stroke="#c8101f" strokeWidth="6" fill="none" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M165 176V244M112 210v34M218 210v34" stroke="#c8101f" strokeWidth="3" />
            {/* scaffold + bricks */}
            <g stroke="#ffc65c" strokeWidth="3">
                <path d="M40 410V250M56 410V250M40 330h16M40 290h16M40 370h16M40 250h16" />
            </g>
            <g fill="#e7a89c">
                <rect x="285" y="392" width="30" height="18" />
                <rect x="317" y="392" width="30" height="18" />
                <rect x="301" y="374" width="30" height="18" />
            </g>
        </svg>
    );
}

export function PurchaseIllustration() {
    return (
        <svg {...svgProps} aria-label="Illustration of an apartment building with lit windows">
            <defs>
                <linearGradient id="nv-sky-buy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff0df" />
                    <stop offset="1" stopColor="#ffc4b6" />
                </linearGradient>
            </defs>
            <rect width="400" height="500" fill="url(#nv-sky-buy)" />
            <circle cx="310" cy="120" r="40" fill="#ffc65c" />
            <rect x="52" y="250" width="70" height="170" fill="#eaa79d" />
            <rect x="290" y="270" width="64" height="150" fill="#eaa79d" />
            <rect x="120" y="150" width="170" height="270" rx="4" fill="#fff" />
            <rect x="112" y="140" width="186" height="16" rx="3" fill="#c8101f" />
            <g fill="#f1c9c1">
                <rect x="136" y="176" width="30" height="34" />
                <rect x="190" y="176" width="30" height="34" />
                <rect x="244" y="176" width="30" height="34" />
                <rect x="136" y="232" width="30" height="34" />
                <rect x="244" y="232" width="30" height="34" />
                <rect x="136" y="288" width="30" height="34" />
                <rect x="190" y="288" width="30" height="34" />
                <rect x="136" y="344" width="30" height="34" />
                <rect x="244" y="344" width="30" height="34" />
            </g>
            <g fill="#ffc65c">
                <rect x="190" y="232" width="30" height="34" />
                <rect x="244" y="288" width="30" height="34" />
                <rect x="190" y="344" width="30" height="34" />
            </g>
            <rect x="188" y="378" width="34" height="42" rx="17" fill="#c8101f" />
            <rect y="420" width="400" height="80" fill="#74ab5b" />
            <g fill="#4f9150">
                <circle cx="82" cy="418" r="26" />
                <circle cx="326" cy="418" r="30" />
            </g>
            <g stroke="#6b4a3a" strokeWidth="5">
                <path d="M82 440v-14M326 446v-16" />
            </g>
        </svg>
    );
}