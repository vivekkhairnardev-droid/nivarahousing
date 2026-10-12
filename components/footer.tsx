"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, EnvelopeSimple, MapPin, ShieldCheck } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 text-xs border-t border-zinc-800">
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Company Profile & Reg */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-[140px]">
              <Image
                src="/logo-Cr8leaAj.png"
                alt="Nivara Housing Finance"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="140px"
              />
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-sm mt-3">
              Nivara Home Finance is an NHB-registered Housing Finance Company providing affordable, accessible home loans and doorstep guidance to aspiring families across India.
            </p>

            <div className="pt-2 space-y-2 text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D60000] shrink-0 mt-0.5" />
                <span>
                  3rd Floor, BNR Complex, 25/101/3, opp. RBI Layout Main Rd, Puttenahalli, JP Nagar 7th Phase, Bengaluru, Karnataka 560078
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#D60000] shrink-0" />
                <a href="tel:18003091516" className="hover:text-white transition-colors">
                  Toll-Free: 1800-309-1516 / 1800-420-2222
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <EnvelopeSimple size={15} className="text-[#D60000] shrink-0" />
                <a href="mailto:contact@nivarahousing.com" className="hover:text-white transition-colors">
                  contact@nivarahousing.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Loan Products */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider text-xs mb-3.5">
              Loan Products
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/loans/home-loan" className="hover:text-white transition-colors">
                  Home Purchase Loan
                </Link>
              </li>
              <li>
                <Link href="/loans/construction-loan" className="hover:text-white transition-colors">
                  Home Construction Loan
                </Link>
              </li>
              <li>
                <Link href="/loans/plot-construction" className="hover:text-white transition-colors">
                  Composite Home Loan
                </Link>
              </li>
              <li>
                <Link href="/loans/loan-against-property" className="hover:text-white transition-colors">
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link href="/loans/balance-transfer" className="hover:text-white transition-colors">
                  Balance Transfer & Top-Up
                </Link>
              </li>
              <li>
                <Link href="/loans/renovation-loan" className="hover:text-white transition-colors">
                  Home Renovation Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Corner */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider text-xs mb-3.5">
              Customer Corner
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/customer/pay-emi" className="hover:text-white transition-colors">
                  Pay EMI Online
                </Link>
              </li>
              <li>
                <Link href="/customer/statements" className="hover:text-white transition-colors">
                  Interest Certificate & IT
                </Link>
              </li>
              <li>
                <Link href="/customer/track-application" className="hover:text-white transition-colors">
                  Track Application Status
                </Link>
              </li>
              <li>
                <Link href="/customer/grievance" className="hover:text-white transition-colors">
                  Grievance Redressal Policy
                </Link>
              </li>
              <li>
                <Link href="/customer/fair-practices" className="hover:text-white transition-colors">
                  Fair Practices Code
                </Link>
              </li>
              <li>
                <Link href="/locate-branch" className="hover:text-white transition-colors">
                  Branch Locator (119+ Branches)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About & Disclosures */}
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider text-xs mb-3.5">
              Corporate & Governance
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/about/company-profile" className="hover:text-white transition-colors">
                  Company Profile & Vision
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-white transition-colors">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/about/investors" className="hover:text-white transition-colors">
                  Investor Disclosures & Filings
                </Link>
              </li>
              <li>
                <Link href="/about/csr" className="hover:text-white transition-colors">
                  Corporate Social Responsibility
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="hover:text-white transition-colors">
                  Careers @ Nivara
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Institutional Credentials Bar */}
        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>CIN: <strong>U65922KA2014PLC077547</strong></span>
            <span>Credit Rating: <strong>A-; Stable (ICRA)</strong></span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={14} className="text-emerald-400" />
              ISO/IEC 27001:2022 Certified
            </span>
          </div>
          <div>
            <span>Grievance Officer: Rajesh CA (080-26552822)</span>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-6 pt-4 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-500 text-[11px]">
          <p>
            © 2026 Nivara Home Finance Limited. All Rights Reserved. Registered with National Housing Bank (NHB).
          </p>
          <p>
            Loans are granted at the sole discretion of Nivara Home Finance Limited. Terms & conditions apply.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
