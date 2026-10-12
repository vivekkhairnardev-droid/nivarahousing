"use client";

import React from "react";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Anitha K",
    location: "Thalaghattapura, Karnataka",
    quote:
      "Applied for a home loan at the Thalaghattapura branch. Found the staff extremely helpful, the service prompt, and the overall approval process quick and seamless.",
    rating: 5,
  },
  {
    name: "Vijay Adhitiya",
    location: "Vijayawada, Andhra Pradesh",
    quote:
      "Great experience getting our home loan processed. The process was swift and got completed in just a couple of branch interactions with doorstep paperwork support.",
    rating: 5,
  },
  {
    name: "Gautam Krishna",
    location: "Hyderabad, Telangana",
    quote:
      "Very happy with the service from Nivara Home Finance. Their loan officer stayed in touch regularly and kept me informed on every milestone until disbursal.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-zinc-50 border-b border-zinc-200 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Real stories from homeowners who achieved their dreams of homeownership with Nivara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-lg border border-zinc-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3" aria-label="5 stars rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} weight="fill" />
                  ))}
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100">
                <span className="font-heading text-sm font-bold text-zinc-900 block">
                  {t.name}
                </span>
                <span className="text-xs text-zinc-500 block mt-0.5">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
