"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
    MapPin,
    Phone,
    EnvelopeSimple,
    Clock,
    MagnifyingGlass,
    Buildings,
    NavigationArrow,
    CheckCircle,
    User,
    ArrowRight,
    CaretRight,
    ShieldCheck,
    House,
    CalendarCheck,
    X,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Branch {
    id: string;
    name: string;
    type: "Head Office" | "Regional Hub" | "Branch";
    state: "Karnataka" | "Tamil Nadu" | "Andhra Pradesh" | "Telangana" | "Maharashtra";
    district: string;
    address: string;
    pincode: string;
    phone: string;
    email: string;
    timing: string;
    mapsQuery: string;
}

const BRANCHES_DATA: Branch[] = [
    // KARNATAKA
    {
        id: "ka-blr-ho",
        name: "Bengaluru - Corporate & Head Office",
        type: "Head Office",
        state: "Karnataka",
        district: "Bengaluru Urban",
        address: "No. 22-25/101/3, 3rd Floor, BNR Complex, Sri Rama Layout, JP Nagar 7th Phase, Kothnur Main Road",
        pincode: "560078",
        phone: "+91 80 2655 2822",
        email: "contact@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Nivara Housing Finance BNR Complex JP Nagar 7th Phase Bangalore",
    },
    {
        id: "ka-blr-north",
        name: "Bengaluru - Yelahanka Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Bengaluru Urban",
        address: "1st Floor, Sri Krishna Complex, BB Road, Near Yelahanka Police Station, Yelahanka",
        pincode: "560064",
        phone: "1800-420-2222",
        email: "yelahanka@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Yelahanka Bangalore Karnataka",
    },
    {
        id: "ka-blr-east",
        name: "Bengaluru - KR Puram Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Bengaluru Urban",
        address: "2nd Floor, Above Syndicate Bank, Old Madras Road, KR Puram",
        pincode: "560036",
        phone: "1800-420-2222",
        email: "krpuram@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "KR Puram Bangalore Karnataka",
    },
    {
        id: "ka-mysuru",
        name: "Mysuru Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Mysuru",
        address: "Door No. 142/B, 1st Floor, D. Devaraj Urs Road, Subbarayanakere, Chamrajpura",
        pincode: "570001",
        phone: "1800-420-2222",
        email: "mysuru@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Devaraj Urs Road Mysore Karnataka",
    },
    {
        id: "ka-hubballi",
        name: "Hubballi - Dharwad Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Dharwad",
        address: "3rd Floor, Marvel Artisa, Opp. KIMS Hospital, Vidyanagar, Hubballi",
        pincode: "580021",
        phone: "1800-420-2222",
        email: "hubli@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Vidyanagar Hubballi Karnataka",
    },
    {
        id: "ka-belagavi",
        name: "Belagavi Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Belagavi",
        address: "City Point Complex, 2nd Floor, Khade Bazar, Raviwar Peth",
        pincode: "590001",
        phone: "1800-420-2222",
        email: "belagavi@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Khade Bazar Belagavi Karnataka",
    },
    {
        id: "ka-tumakuru",
        name: "Tumakuru Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Tumakuru",
        address: "1st Floor, Vinayaka Towers, BH Road, Near Town Hall, Ashoka Nagar",
        pincode: "572102",
        phone: "1800-420-2222",
        email: "tumakuru@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "BH Road Tumkur Karnataka",
    },
    {
        id: "ka-shivamogga",
        name: "Shivamogga Branch",
        type: "Branch",
        state: "Karnataka",
        district: "Shivamogga",
        address: "Shankar Mutt Road, 2nd Cross, Durgigudi, Shivamogga",
        pincode: "577201",
        phone: "1800-420-2222",
        email: "shivamogga@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Durgigudi Shimoga Karnataka",
    },

    // TAMIL NADU
    {
        id: "tn-chn-hub",
        name: "Chennai - Regional Hub (Guindy)",
        type: "Regional Hub",
        state: "Tamil Nadu",
        district: "Chennai",
        address: "Olympia Tech Park Area, Anna Salai, Guindy Industrial Estate, Chennai",
        pincode: "600032",
        phone: "+91 44 2235 1200",
        email: "chennai@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Guindy Industrial Estate Chennai Tamil Nadu",
    },
    {
        id: "tn-cbe",
        name: "Coimbatore Branch",
        type: "Branch",
        state: "Tamil Nadu",
        district: "Coimbatore",
        address: "No. 45, 2nd Floor, Cross Cut Road, Gandhipuram, Coimbatore",
        pincode: "641012",
        phone: "1800-420-2222",
        email: "coimbatore@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Cross Cut Road Gandhipuram Coimbatore",
    },
    {
        id: "tn-mdu",
        name: "Madurai Branch",
        type: "Branch",
        state: "Tamil Nadu",
        district: "Madurai",
        address: "1st Floor, West Veli Street, Near Madurai Junction, Madurai Main",
        pincode: "625001",
        phone: "1800-420-2222",
        email: "madurai@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "West Veli Street Madurai Tamil Nadu",
    },
    {
        id: "tn-slm",
        name: "Salem Branch",
        type: "Branch",
        state: "Tamil Nadu",
        district: "Salem",
        address: "Sarada College Main Road, Alagapuram, Salem",
        pincode: "636016",
        phone: "1800-420-2222",
        email: "salem@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Sarada College Road Salem Tamil Nadu",
    },
    {
        id: "tn-try",
        name: "Tiruchirappalli (Trichy) Branch",
        type: "Branch",
        state: "Tamil Nadu",
        district: "Tiruchirappalli",
        address: "Salai Road, Thillai Nagar 10th Cross, Tiruchirappalli",
        pincode: "620018",
        phone: "1800-420-2222",
        email: "trichy@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Thillai Nagar Trichy Tamil Nadu",
    },
    {
        id: "tn-vellore",
        name: "Vellore Branch",
        type: "Branch",
        state: "Tamil Nadu",
        district: "Vellore",
        address: "Officers Line, Near Tollgate Circle, Kosapet, Vellore",
        pincode: "632001",
        phone: "1800-420-2222",
        email: "vellore@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Officers Line Vellore Tamil Nadu",
    },

    // ANDHRA PRADESH
    {
        id: "ap-vja-hub",
        name: "Vijayawada - Regional Hub",
        type: "Regional Hub",
        state: "Andhra Pradesh",
        district: "NTR District",
        address: "M.G. Road, Opp. Sub-Collector Office, Labbipet, Vijayawada",
        pincode: "520010",
        phone: "+91 866 248 3122",
        email: "vijayawada@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Labbipet MG Road Vijayawada Andhra Pradesh",
    },
    {
        id: "ap-vizag",
        name: "Visakhapatnam (Vizag) Branch",
        type: "Branch",
        state: "Andhra Pradesh",
        district: "Visakhapatnam",
        address: "2nd Floor, Dwaraka Nagar 3rd Lane, Diamond Park Junction, Visakhapatnam",
        pincode: "530016",
        phone: "1800-420-2222",
        email: "vizag@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Dwaraka Nagar Visakhapatnam Andhra Pradesh",
    },
    {
        id: "ap-gnt",
        name: "Guntur Branch",
        type: "Branch",
        state: "Andhra Pradesh",
        district: "Guntur",
        address: "Arundelpet 5th Line, Main Road, Guntur",
        pincode: "522002",
        phone: "1800-420-2222",
        email: "guntur@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Arundelpet Guntur Andhra Pradesh",
    },
    {
        id: "ap-tpt",
        name: "Tirupati Branch",
        type: "Branch",
        state: "Andhra Pradesh",
        district: "Tirupati",
        address: "Air Bypass Road, Near Annamaiah Circle, Tirupati",
        pincode: "517501",
        phone: "1800-420-2222",
        email: "tirupati@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Air Bypass Road Tirupati Andhra Pradesh",
    },
    {
        id: "ap-knl",
        name: "Kurnool Branch",
        type: "Branch",
        state: "Andhra Pradesh",
        district: "Kurnool",
        address: "Park Road, Near Old Bus Stand, Kurnool",
        pincode: "518001",
        phone: "1800-420-2222",
        email: "kurnool@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Park Road Kurnool Andhra Pradesh",
    },

    // TELANGANA
    {
        id: "tg-hyd-hub",
        name: "Hyderabad - Regional Hub (Ameerpet)",
        type: "Regional Hub",
        state: "Telangana",
        district: "Hyderabad",
        address: "Ameerpet Business Centre, Main Road, Metro Pillar 1042, Hyderabad",
        pincode: "500016",
        phone: "+91 40 2374 8812",
        email: "hyderabad@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Ameerpet Hyderabad Telangana",
    },
    {
        id: "tg-kphb",
        name: "Hyderabad - Kukatpally (KPHB) Branch",
        type: "Branch",
        state: "Telangana",
        district: "Medchal-Malkajgiri",
        address: "Road No. 1, KPHB Colony, Opp. Remedy Hospital, Kukatpally, Hyderabad",
        pincode: "500072",
        phone: "1800-420-2222",
        email: "kukatpally@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "KPHB Colony Kukatpally Hyderabad Telangana",
    },
    {
        id: "tg-warangal",
        name: "Warangal - Hanamkonda Branch",
        type: "Branch",
        state: "Telangana",
        district: "Hanumakonda",
        address: "Chowrasta Main Road, Nakkalagutta, Hanamkonda, Warangal",
        pincode: "506001",
        phone: "1800-420-2222",
        email: "warangal@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Nakkalagutta Hanamkonda Telangana",
    },
    {
        id: "tg-khammam",
        name: "Khammam Branch",
        type: "Branch",
        state: "Telangana",
        district: "Khammam",
        address: "Wyra Road, Near Zilla Parishad Center, Khammam",
        pincode: "507001",
        phone: "1800-420-2222",
        email: "khammam@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Wyra Road Khammam Telangana",
    },
    {
        id: "tg-nizamabad",
        name: "Nizamabad Branch",
        type: "Branch",
        state: "Telangana",
        district: "Nizamabad",
        address: "Hyderabad Road, Near Collectorate, Khaleelwadi, Nizamabad",
        pincode: "503001",
        phone: "1800-420-2222",
        email: "nizamabad@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Khaleelwadi Nizamabad Telangana",
    },

    // MAHARASHTRA
    {
        id: "mh-pune-hub",
        name: "Pune - Regional Hub (Shivaji Nagar)",
        type: "Regional Hub",
        state: "Maharashtra",
        district: "Pune",
        address: "Senapati Bapat Road, Shivaji Nagar, Next to ICC Trade Tower, Pune",
        pincode: "411016",
        phone: "+91 20 2566 4120",
        email: "pune@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Senapati Bapat Road Shivaji Nagar Pune Maharashtra",
    },
    {
        id: "mh-nasik",
        name: "Nashik Branch",
        type: "Branch",
        state: "Maharashtra",
        district: "Nashik",
        address: "College Road, Thatte Nagar, Opp. KTHM College Ground, Nashik",
        pincode: "422005",
        phone: "1800-420-2222",
        email: "nashik@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "College Road Nashik Maharashtra",
    },
    {
        id: "mh-kolhapur",
        name: "Kolhapur Branch",
        type: "Branch",
        state: "Maharashtra",
        district: "Kolhapur",
        address: "Station Road, Shahupuri 2nd Lane, Kolhapur",
        pincode: "416001",
        phone: "1800-420-2222",
        email: "kolhapur@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Shahupuri Kolhapur Maharashtra",
    },
    {
        id: "mh-solapur",
        name: "Solapur Branch",
        type: "Branch",
        state: "Maharashtra",
        district: "Solapur",
        address: "Saat Rasta, Railway Lines, Solapur Main",
        pincode: "413001",
        phone: "1800-420-2222",
        email: "solapur@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Saat Rasta Solapur Maharashtra",
    },
    {
        id: "mh-nagpur",
        name: "Nagpur Branch",
        type: "Branch",
        state: "Maharashtra",
        district: "Nagpur",
        address: "Central Avenue Road, Gandhibagh, Near Telephone Exchange Square, Nagpur",
        pincode: "440002",
        phone: "1800-420-2222",
        email: "nagpur@nivarahousing.com",
        timing: "Mon - Sat: 9:30 AM - 6:30 PM",
        mapsQuery: "Central Avenue Road Nagpur Maharashtra",
    },
];

const STATES = ["All States", "Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana", "Maharashtra"] as const;

export default function LocateBranchPage() {
    const [selectedState, setSelectedState] = useState<string>("All States");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedBranchForModal, setSelectedBranchForModal] = useState<Branch | null>(null);
    const [doorstepSubmitted, setDoorstepSubmitted] = useState<boolean>(false);
    const [doorstepForm, setDoorstepForm] = useState({
        name: "",
        phone: "",
        pincode: "",
        preferredBranch: "",
        loanAmount: "15",
    });

    const filteredBranches = useMemo(() => {
        return BRANCHES_DATA.filter((b) => {
            const matchesState = selectedState === "All States" || b.state === selectedState;
            const q = searchQuery.toLowerCase().trim();
            if (!q) return matchesState;

            const matchesSearch =
                b.name.toLowerCase().includes(q) ||
                b.district.toLowerCase().includes(q) ||
                b.address.toLowerCase().includes(q) ||
                b.pincode.includes(q) ||
                b.state.toLowerCase().includes(q);

            return matchesState && matchesSearch;
        });
    }, [selectedState, searchQuery]);

    const handleDoorstepSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDoorstepSubmitted(true);
        setTimeout(() => {
            setDoorstepSubmitted(false);
            setSelectedBranchForModal(null);
            setDoorstepForm({
                name: "",
                phone: "",
                pincode: "",
                preferredBranch: "",
                loanAmount: "15",
            });
        }, 2500);
    };

    return (
        <div className="flex-1 flex flex-col bg-background text-foreground">
            {/* HERO / HEADER SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#4a050c] via-[#5c0811] to-[#360308] text-white py-14 sm:py-20 border-b border-border/40">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
                
                {/* Floating glow effects */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-white/70 mb-6 font-medium">
                        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                            <House size={13} weight="fill" />
                            <span>Home</span>
                        </Link>
                        <CaretRight size={11} className="text-white/40" />
                        <span className="text-white font-semibold">Locate Branch</span>
                    </nav>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200 mb-4 shadow-xs">
                            <MapPin size={14} weight="fill" className="text-rose-400" />
                            <span>60+ Branches Across 5 Southern & Western States</span>
                        </div>
                        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            Find Your Nearest <span className="text-rose-300">Nivara Branch</span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                            Visit your local branch to meet dedicated housing finance specialists, submit paperwork in person, or schedule a personalized doorstep consultation at your convenience.
                        </p>

                        {/* Quick Stats Badges */}
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/15">
                            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                                <span className="block text-xl sm:text-2xl font-extrabold text-white">60+</span>
                                <span className="text-xs text-white/70">Physical Branches</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                                <span className="block text-xl sm:text-2xl font-extrabold text-white">5 States</span>
                                <span className="text-xs text-white/70">Deep Presence</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                                <span className="block text-xl sm:text-2xl font-extrabold text-white">Doorstep</span>
                                <span className="text-xs text-white/70">Document Pickup</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
                                <span className="block text-xl sm:text-2xl font-extrabold text-white">1800-420-2222</span>
                                <span className="text-xs text-white/70">Toll Free Helpline</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEARCH AND FILTERS STRIP */}
            <section className="sticky top-[72px] sm:top-[80px] z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-xs py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                        {/* Search Input Box */}
                        <div className="relative flex-1 max-w-lg">
                            <MagnifyingGlass
                                size={18}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
                            />
                            <input
                                type="text"
                                placeholder="Search by city, branch name, district or pincode..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl bg-card border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/70"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 rounded cursor-pointer"
                                >
                                    <X size={15} />
                                </button>
                            )}
                        </div>

                        {/* State Filter Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                            {STATES.map((state) => {
                                const isSelected = selectedState === state;
                                return (
                                    <button
                                        key={state}
                                        type="button"
                                        onClick={() => setSelectedState(state)}
                                        className={cn(
                                            "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer",
                                            isSelected
                                                ? "bg-primary text-primary-foreground shadow-xs"
                                                : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
                                        )}
                                    >
                                        {state}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Results count indicator */}
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-medium">
                        <span>
                            Showing <strong className="text-foreground">{filteredBranches.length}</strong> branch locations
                            {selectedState !== "All States" && ` in ${selectedState}`}
                            {searchQuery && ` matching "${searchQuery}"`}
                        </span>
                        {(selectedState !== "All States" || searchQuery) && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedState("All States");
                                    setSearchQuery("");
                                }}
                                className="text-primary hover:underline cursor-pointer"
                            >
                                Reset filters
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* BRANCH CARDS GRID */}
            <section className="py-10 sm:py-14 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredBranches.length === 0 ? (
                        <div className="text-center py-16 px-4 bg-muted/20 border border-dashed border-border rounded-2xl max-w-xl mx-auto">
                            <MapPin size={40} className="mx-auto text-muted-foreground mb-3 opacity-60" />
                            <h3 className="font-heading text-lg font-bold text-foreground">No branches found</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                We couldn't find any branch matching &ldquo;{searchQuery}&rdquo;. Try another city name, pincode, or reset the filter.
                            </p>
                            <Button
                                className="mt-5 rounded-full"
                                variant="outline"
                                onClick={() => {
                                    setSelectedState("All States");
                                    setSearchQuery("");
                                }}
                            >
                                View All Branches
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                            {filteredBranches.map((branch) => {
                                const isHO = branch.type === "Head Office";
                                const isRegional = branch.type === "Regional Hub";
                                const encodedQuery = encodeURIComponent(branch.mapsQuery);

                                return (
                                    <div
                                        key={branch.id}
                                        className={cn(
                                            "flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 border bg-card hover:shadow-lg group",
                                            isHO
                                                ? "border-primary/50 ring-1 ring-primary/20 bg-gradient-to-b from-primary/5 via-card to-card"
                                                : "border-border hover:border-primary/40"
                                        )}
                                    >
                                        <div>
                                            {/* Type Badge & State */}
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <span
                                                    className={cn(
                                                        "text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                                                        isHO
                                                            ? "bg-primary text-primary-foreground shadow-2xs"
                                                            : isRegional
                                                            ? "bg-rose-100 text-[#8B0000] dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-900"
                                                            : "bg-muted text-muted-foreground"
                                                    )}
                                                >
                                                    {branch.type}
                                                </span>
                                                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    {branch.state}
                                                </span>
                                            </div>

                                            {/* Branch Name */}
                                            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                {branch.name}
                                            </h3>

                                            {/* Address */}
                                            <div className="mt-3.5 flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                                                <MapPin size={16} weight="fill" className="text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p>{branch.address}</p>
                                                    <p className="font-semibold text-foreground mt-0.5">
                                                        PIN: {branch.pincode} ({branch.district})
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Working Hours */}
                                            <div className="mt-3 flex items-center gap-2.5 text-xs text-muted-foreground">
                                                <Clock size={15} className="text-muted-foreground/80 shrink-0" />
                                                <span>{branch.timing}</span>
                                            </div>

                                            {/* Phone & Email */}
                                            <div className="mt-3 space-y-1.5 pt-3 border-t border-border/60 text-xs">
                                                <div className="flex items-center gap-2">
                                                    <Phone size={14} weight="bold" className="text-primary shrink-0" />
                                                    <a
                                                        href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                                                        className="font-medium text-foreground hover:text-primary transition-colors"
                                                    >
                                                        {branch.phone}
                                                    </a>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <EnvelopeSimple size={14} className="text-muted-foreground shrink-0" />
                                                    <a
                                                        href={`mailto:${branch.email}`}
                                                        className="text-muted-foreground hover:text-primary transition-colors truncate"
                                                    >
                                                        {branch.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-6 pt-4 border-t border-border/80 flex items-center gap-2">
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-muted hover:bg-accent text-foreground hover:text-primary transition-colors"
                                            >
                                                <NavigationArrow size={13} weight="bold" />
                                                <span>Directions</span>
                                            </a>
                                            <Button
                                                size="sm"
                                                className="flex-1 rounded-xl text-xs"
                                                onClick={() => {
                                                    setSelectedBranchForModal(branch);
                                                    setDoorstepForm((prev) => ({
                                                        ...prev,
                                                        preferredBranch: branch.name,
                                                        pincode: branch.pincode,
                                                    }));
                                                }}
                                            >
                                                <CalendarCheck size={13} weight="bold" />
                                                <span>Book Visit</span>
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* DOORSTEP SERVICE PROMO BANNER */}
            <section className="py-12 bg-muted/30 border-y border-border">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-[#4a050c] to-[#730a15] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl space-y-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-rose-200 text-xs font-semibold uppercase tracking-wider">
                                <ShieldCheck size={14} weight="fill" />
                                <span>Zero-Hassle Micro-Housing Finance</span>
                            </span>
                            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                Can&apos;t Visit a Branch? We Come to Your Doorstep!
                            </h2>
                            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                                Our relationship managers visit your residence or workplace for KYC collection, property guidance, and complete loan documentation with zero advance processing charges.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/90 pt-2">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle size={15} weight="fill" className="text-rose-300" />
                                    <span>Same-Day Document Collection</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle size={15} weight="fill" className="text-rose-300" />
                                    <span>Free Eligibility Assessment</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle size={15} weight="fill" className="text-rose-300" />
                                    <span>Multilingual Advisors</span>
                                </div>
                            </div>
                        </div>

                        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-white text-[#4a050c] hover:bg-rose-50 rounded-full font-bold shadow-md cursor-pointer"
                                onClick={() => {
                                    setSelectedBranchForModal(BRANCHES_DATA[0]);
                                    setDoorstepForm((prev) => ({
                                        ...prev,
                                        preferredBranch: "Bengaluru - Corporate & Head Office",
                                    }));
                                }}
                            >
                                <CalendarCheck size={16} weight="bold" />
                                <span>Request Doorstep Visit</span>
                            </Button>
                            <a
                                href="tel:18004202222"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
                            >
                                <Phone size={15} weight="bold" />
                                <span>Call 1800-420-2222</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BRANCH VISIT FAQS */}
            <section className="py-14 sm:py-18 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                            Frequently Asked Questions About Branch Visits
                        </h2>
                        <p className="text-sm text-muted-foreground mt-2">
                            Everything you need to know before visiting your nearby Nivara branch office.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-5 rounded-2xl bg-card border border-border">
                            <h4 className="font-heading text-base font-semibold text-foreground">
                                What documents should I carry when visiting a branch?
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                                Please bring your Aadhaar Card, PAN Card, passport-sized photographs, 6 months bank statement, and proof of income (salary slips/Form 16 for salaried, or ITR and business receipts for self-employed/micro-enterprises). Property documents can be brought in copy form for immediate evaluation.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-card border border-border">
                            <h4 className="font-heading text-base font-semibold text-foreground">
                                What are the branch operating hours and working days?
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                                All Nivara branches are open Monday to Saturday from <strong>9:30 AM to 6:30 PM</strong>. Branches remain closed on the 2nd and 4th Saturdays of every month, Sundays, and official national/state public holidays.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-card border border-border">
                            <h4 className="font-heading text-base font-semibold text-foreground">
                                Can I make loan EMI payments in cash at any branch?
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                                While we encourage digital EMI payments via our secure online portal, BBPS, or NACH auto-debit, branch offices can accept demand drafts, cheques, and designated cash deposits against official computer-generated Nivara payment receipts.
                            </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-card border border-border">
                            <h4 className="font-heading text-base font-semibold text-foreground">
                                Do I need an appointment before walking into a branch?
                            </h4>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                                No prior appointment is required! Walk-in customers are warmly welcomed by our front-desk loan officers. However, booking an appointment in advance guarantees zero waiting time and dedicated officer availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DOORSTEP VISIT / APPOINTMENT BOOKING MODAL */}
            {selectedBranchForModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
                    <div
                        className="bg-card text-foreground rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-border shadow-2xl relative animate-in zoom-in-95 duration-200"
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedBranchForModal(null)}
                            className="absolute right-5 top-5 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X size={18} weight="bold" />
                        </button>

                        <div className="mb-5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                Schedule Free Consultation
                            </span>
                            <h3 className="font-heading text-xl font-bold text-foreground mt-0.5">
                                Book Visit at {selectedBranchForModal.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                                Fill in your details below and a branch executive will confirm your appointment within 2 hours.
                            </p>
                        </div>

                        {doorstepSubmitted ? (
                            <div className="text-center py-8 space-y-3">
                                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle size={32} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-foreground">
                                    Appointment Request Received!
                                </h4>
                                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                                    Thank you! Our relationship manager from <strong>{selectedBranchForModal.name}</strong> will contact you shortly on <strong>{doorstepForm.phone}</strong>.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleDoorstepSubmit} className="space-y-3.5">
                                <div>
                                    <label className="block text-xs font-semibold text-foreground mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        value={doorstepForm.name}
                                        onChange={(e) => setDoorstepForm({ ...doorstepForm, name: e.target.value })}
                                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-foreground mb-1">
                                            Mobile Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            maxLength={10}
                                            placeholder="10-digit number"
                                            value={doorstepForm.phone}
                                            onChange={(e) =>
                                                setDoorstepForm({
                                                    ...doorstepForm,
                                                    phone: e.target.value.replace(/[^0-9]/g, ""),
                                                })
                                            }
                                            className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-foreground mb-1">
                                            Area PIN Code *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            maxLength={6}
                                            placeholder="e.g. 560078"
                                            value={doorstepForm.pincode}
                                            onChange={(e) =>
                                                setDoorstepForm({
                                                    ...doorstepForm,
                                                    pincode: e.target.value.replace(/[^0-9]/g, ""),
                                                })
                                            }
                                            className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-foreground mb-1">
                                        Required Loan Amount (₹ Lakhs)
                                    </label>
                                    <select
                                        value={doorstepForm.loanAmount}
                                        onChange={(e) => setDoorstepForm({ ...doorstepForm, loanAmount: e.target.value })}
                                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    >
                                        <option value="5">₹5 Lakhs - ₹10 Lakhs</option>
                                        <option value="15">₹10 Lakhs - ₹25 Lakhs</option>
                                        <option value="35">₹25 Lakhs - ₹50 Lakhs</option>
                                        <option value="50">Above ₹50 Lakhs</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" className="w-full rounded-full text-xs font-bold py-2.5">
                                        Confirm Appointment Request
                                    </Button>
                                    <p className="text-[11px] text-muted-foreground text-center mt-2">
                                        🔒 Your contact info is strictly confidential and protected by Nivara Privacy Policy.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
