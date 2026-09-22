import SectionTitle from "@/components/SectionTitle";

const services = [
  ["🌴", "Plant Selection", "Explore tropical, ornamental, palm, flowering and foliage plants for different spaces."],
  ["🌱", "Garden Planning", "Get practical ideas for arranging greenery around homes, offices and outdoor spaces."],
  ["🪴", "Indoor Greenery", "Find attractive plant options to add a fresh green feel to interiors."],
  ["🌳", "Outdoor Plants", "Choose plants suitable for entrances, avenues, balconies and garden areas."],
  ["✂️", "Plant Care Guidance", "Simple guidance for watering, sunlight, soil and everyday plant care."],
  ["🚚", "Nursery Enquiries", "Contact the nursery for availability, quantities and current plant requirements."]
];

export default function Services() {
  return (
    <div className="page-gradient min-h-screen px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="What We Offer"
        title="Services for greener spaces"
        text="Replace or expand these service descriptions with your nursery's exact offerings."
      />

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([icon, title, text]) => (
          <article key={title} className="hover-bounce rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100 text-3xl">{icon}</div>
            <h2 className="mt-6 text-2xl font-black text-emerald-950">{title}</h2>
            <p className="mt-3 leading-7 text-emerald-900/65">{text}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-5xl rounded-[2.5rem] bg-gradient-to-r from-emerald-800 to-emerald-600 p-8 text-white shadow-2xl md:p-12">
        <p className="font-black uppercase tracking-[.25em] text-yellow-300">Plant of the Week</p>
        <h2 className="mt-3 text-4xl font-black">Make one plant the star of your nursery.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-white/80">
          Update this banner every week with a featured plant, image, care tips and enquiry call-to-action.
        </p>
      </div>
    </div>
  );
}
