import Image from "next/image";

export default function PlantCard({ src, name, index }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white fun-shadow hover-bounce">
      <div className="relative aspect-[4/3] overflow-hidden bg-lime-50">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          loading={index < 6 ? "eager" : "lazy"}
        />
        <span className="absolute left-3 top-3 rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-emerald-950">
          Plant {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black text-emerald-950">{name}</h3>
        <p className="mt-1 text-sm text-emerald-900/60">Healthy nursery plant</p>
        <button className="mt-4 rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-500">
          Get details
        </button>
      </div>
    </article>
  );
}
