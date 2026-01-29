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
          className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
