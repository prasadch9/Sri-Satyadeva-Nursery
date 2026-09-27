"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlantCard({ src, name, category }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Plant Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={src}
            alt="Sri Satyadeva Nursery"
            fill
            className="object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-black text-gray-900">
            Sri Satyadeva Nursery
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Healthy nursery plant
          </p>

          <button
            onClick={() => setShowDetails(true)}
            className="cursor-pointer mt-4 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Get details
          </button>
        </div>
      </article>

      {/* Details Popup */}
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setShowDetails(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-700 shadow-lg transition hover:bg-red-500 hover:text-white"
            >
              ×
            </button>

            {/* Big Plant Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-gray-100">
              <Image
                src={src}
                alt="Sri Satyadeva Nursery"
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-[.25em] text-orange-500">
                Sri Satyadeva Nursery
              </p>

              <h2 className="mt-2 text-3xl font-black text-gray-900">
                Nursery Plant
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Healthy and carefully maintained plant available at
                Sri Satyadeva Nursery. Contact us for availability,
                plant size, pricing and more information.
              </p>

              {/* Normal Details */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    Nursery
                  </p>
                  <p className="mt-1 font-bold text-gray-800">
                    Sri Satyadeva Nursery
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    Category
                  </p>
                  <p className="mt-1 font-bold text-gray-800">
                    {category || "Nursery Plants"}
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    Availability
                  </p>
                  <p className="mt-1 font-bold text-gray-800">
                    Contact Nursery
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    Location
                  </p>
                  <p className="mt-1 font-bold text-gray-800">
                    Kadiyam
                  </p>
                </div>

              </div>

              {/* Close */}
              <button
                onClick={() => setShowDetails(false)}
                className="mt-7 rounded-full bg-gray-900 px-6 py-3 font-bold text-white transition hover:bg-orange-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}