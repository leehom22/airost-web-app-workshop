'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-red-50 rounded-lg">
      <h2 className="text-2xl font-bold text-red-700">Something went wrong!</h2>
      <p className="text-gray-600 mt-2 mb-6">{error.message || "Failed to load data."}</p>
      
      <button
        onClick={() => reset()} // Attempts to re-render the segment
        className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}