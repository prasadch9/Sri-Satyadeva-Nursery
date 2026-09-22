import SectionTitle from "@/components/SectionTitle";
import PlantCard from "@/components/PlantCard";

const plants = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/plant-${String(i + 1).padStart(2, "0")}.svg`,
  name: [
    "Areca Palm", "Royal Palm", "Golden Bamboo", "Croton", "Jade Plant",
    "Ficus", "Bougainvillea", "Peace Lily", "Dracaena", "Hibiscus",
    "Ixora", "Bird of Paradise", "Money Plant", "Rose", "Philodendron",
    "Snake Plant", "Coconut Palm", "Lucky Bamboo", "Adenium", "Alocasia",
    "Bonsai", "Fiddle Leaf Fig", "Spider Plant", "Aglaonema", "Tecoma",
    "Gardenia", "Lemon Plant", "Guava Plant", "Mango Plant", "Ornamental Palm"
  ][i]
}));

export default function Gallery() {
  return (
    <div className="page-gradient min-h-screen px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="30 Plant Images"
        title="Our colorful nursery gallery"
        text="All 30 images are local placeholder SVGs. You can replace them later inside public/gallery without changing the page layout."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {plants.map((plant, i) => <PlantCard key={plant.src} {...plant} index={i} />)}
      </div>
    </div>
  );
}
