"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import PlantCard from "@/components/PlantCard";

import { plantCategories, plantsByCategory } from "./plantData";

const categories = plantCategories;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Indoor");

  const filteredPlants = (plantsByCategory[selectedCategory] || []).map((plant) => ({
    ...plant,
    category: selectedCategory,
  }));

  return (
    <div className="page-gradient min-h-screen px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Sri Satyadeva Nursery"
        title="Our colorful nursery gallery"
        text="Explore our collection of beautiful nursery plants."
      />

      {/* Categories */}
      <div className="mx-auto mt-10 flex max-w-7xl justify-center gap-3 overflow-x-auto pb-4">
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${
                active
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Plants */}
      <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPlants.map((plant, i) => (
          <PlantCard
            key={plant.image}
            src={plant.image}
            category={plant.category}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}