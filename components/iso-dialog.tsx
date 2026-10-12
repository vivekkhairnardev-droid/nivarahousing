"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, CheckCircle, LockKey, X, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export function IsoCertificationDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the certification in this session
    const hasSeenNotice = sessionStorage.getItem("nivara_iso_notice_viewed");
    if (!hasSeenNotice) {
      // Small delay for natural entrance after page paints
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("nivara_iso_notice_viewed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in-0 duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="iso-dialog-title"
    >
      <div className="relative w-full max-w-lg bg-white text-zinc-900 rounded-xl shadow-2xl border border-zinc-200 p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close dialog"
        >
          <X size={20} weight="bold" />
        </button>

        {/* Header Icon & Certification Badge */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#17365D]/10 text-[#17365D] flex items-center justify-center shrink-0 border border-[#17365D]/15">
            <ShieldCheck size={28} weight="fill" />
          </div>
          <div>
            <span className="inline-block text-[11px] font-semibold text-[#17365D] uppercase tracking-wider bg-[#17365D]/8 px-2 py-0.5 rounded border border-[#17365D]/15">
              ISO/IEC 27001:2022 Certified
            </span>
            <h2 id="iso-dialog-title" className="font-heading font-bold text-xl sm:text-2xl text-zinc-900 mt-1 leading-tight">
              We&apos;re ISO 27001:2022 Certified!
            </h2>
          </div>
        </div>

        {/* Official Statement */}
        <p className="text-sm text-zinc-600 leading-relaxed mt-3">
          Nivara has officially been awarded the <strong className="text-zinc-800 font-semibold">ISO/IEC 27001:2022 certification</strong> for our Information Security Management System. This milestone highlights our commitment to top-tier information security and trust.
        </p>

        {/* Key Security Pillars */}
        <div className="mt-5 space-y-2.5 bg-zinc-50 border border-zinc-200/80 rounded-lg p-3.5">
          <div className="flex items-center gap-2.5 text-xs text-zinc-700">
            <LockKey size={15} weight="bold" className="text-primary shrink-0" />
            <span>Robust protection of customer data & loan documentation</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-zinc-700">
            <CheckCircle size={15} weight="bold" className="text-emerald-600 shrink-0" />
            <span>Strict compliance with global financial information standards</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleClose}
            className="w-full sm:flex-1 inline-flex items-center justify-center h-10 px-4 rounded-md bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Continue to Website
          </button>

          <Link
            href="/about/company-profile"
            onClick={handleClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-md bg-white border border-zinc-300 text-zinc-700 font-medium text-sm hover:bg-zinc-50 hover:border-zinc-400 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IsoCertificationDialog;
