'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { Container } from '../shared/Container';
import Link from 'next/link';
// Your existing pricing data
const pricingData = [
  {
    name: "8 Classes / month",
    highlights: [
      "2 days per week",
      "One-on-one session",
      "30 minutes daily",
    ],
    prices: {
      USD: { symbol: "$", amount: 30, code: "us", name: "United States" },
      CAD: { symbol: "C$", amount: 40, code: "ca", name: "Canada" },
      AUD: { symbol: "A$", amount: 40, code: "au", name: "Australia" },
      GBP: { symbol: "£", amount: 25, code: "gb", name: "United Kingdom" },
      EUR: { symbol: "€", amount: 25, code: "eu", name: "European Union" },
    },
  },
  {
    name: "12 Classes / month",
    highlights: [
      "3 days per week",
      "One-on-one session",
      "30 minutes daily",
    ],
    prices: {
      USD: { symbol: "$", amount: 45, code: "us", name: "United States" },
      CAD: { symbol: "C$", amount: 60, code: "ca", name: "Canada" },
      AUD: { symbol: "A$", amount: 60, code: "au", name: "Australia" },
      GBP: { symbol: "£", amount: 35, code: "gb", name: "United Kingdom" },
      EUR: { symbol: "€", amount: 35, code: "eu", name: "European Union" },
    },
  },
  {
    name: "16 Classes / month",
    highlights: [
      "4 days per week",
      "One-on-one session",
      "30 minutes daily",
    ],
    prices: {
      USD: { symbol: "$", amount: 55, code: "us", name: "United States" },
      CAD: { symbol: "C$", amount: 70, code: "ca", name: "Canada" },
      AUD: { symbol: "A$", amount: 70, code: "au", name: "Australia" },
      GBP: { symbol: "£", amount: 40, code: "gb", name: "United Kingdom" },
      EUR: { symbol: "€", amount: 40, code: "eu", name: "European Union" },
    },
  },
  {
    name: "20 Classes / month",
    highlights: [
      "5 days per week",
      "One-on-one session",
      "30 minutes daily",
    ],
    prices: {
      USD: { symbol: "$", amount: 65, code: "us", name: "United States" },
      CAD: { symbol: "C$", amount: 80, code: "ca", name: "Canada" },
      AUD: { symbol: "A$", amount: 80, code: "au", name: "Australia" },
      GBP: { symbol: "£", amount: 45, code: "gb", name: "United Kingdom" },
      EUR: { symbol: "€", amount: 45, code: "eu", name: "European Union" },
    },
  },
  {
    name: "Weekend Classes",
    highlights: [
      "8 classes per month",
      "One-on-one session",
      "30 minutes on weekends",
    ],
    prices: {
      USD: { symbol: "$", amount: 45, code: "us", name: "United States" },
      CAD: { symbol: "C$", amount: 60, code: "ca", name: "Canada" },
      AUD: { symbol: "A$", amount: 60, code: "au", name: "Australia" },
      GBP: { symbol: "£", amount: 35, code: "gb", name: "United Kingdom" },
      EUR: { symbol: "€", amount: 35, code: "eu", name: "European Union" },
    },
  },
  {
    name: "Hifz Classes",
    highlights: [
      "20 classes per month",
      "One-on-one session",
      "1 hour daily",
    ],
    prices: {
      USD: { symbol: "$", amount: 120, code: "us", name: "United States" },
      CAD: { symbol: "C$", amount: 155, code: "ca", name: "Canada" },
      AUD: { symbol: "A$", amount: 155, code: "au", name: "Australia" },
      GBP: { symbol: "£", amount: 80, code: "gb", name: "United Kingdom" },
      EUR: { symbol: "€", amount: 80, code: "eu", name: "European Union" },
    },
  },
];

export default function PricingCard() {
  const [currency, setCurrency] = useState("USD");

  const availableCurrencies = Object.keys(pricingData[0].prices);

  return (
    <Container className="bg-gray-50 py-12 sm:py-16">
      <div className="relative ">
        <div className="absolute inset-x-0 top-48 bottom-0  " />
        <div className="relative ">
          {/* Currency Selector */}
          <div className="mb-10 flex justify-center gap-3 flex-wrap">
            {availableCurrencies.map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currency === cur
                    ? "bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {pricingData.map((plan) => {
              const { symbol, amount } = plan.prices[currency];
              return (
                <div
                  key={plan.name}
                  className="rounded-3xl bg-white ring-1 ring-black/5 shadow p-8 flex flex-col justify-between"
                >
                  <div>
                    <h2 className=" font-semibold text-primary">{plan.name}</h2>
                    <p className="mt-4 text-2xl font-bold text-gray-900">
                      {symbol}
                      {amount}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{currency} / month</p>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {plan.highlights.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/register-now"
                      className="inline-block w-full text-center bg-gradient-to-r from-[#A86739] to-[#DC913F] hover:bg-amber-500 text-white font-medium py-2 rounded-md"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
