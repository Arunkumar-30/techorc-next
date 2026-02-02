// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-[#0cf2f2] to-[#00a8f2] hover:from-[#00a8f2] hover:to-[#008ecb] text-white px-7 py-2.5 rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all font-bold text-[15px] transform hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
