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
      />


      {/* Nursery Transport Facility */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[.25em] text-orange-600">
              Reliable Plant Transportation
            </p>

            <h2 className="mt-3 text-4xl font-black text-emerald-950">
              Big transport facility for plants
            </h2>

            <p className="mt-5 leading-8 text-emerald-900/70">
              Sri Satyadeva Nursery has a strong transportation facility to
              safely move plants in different quantities and sizes. Our
              transport support includes large lorries and mini vans,
              helping customers receive their plants conveniently and
              efficiently.
            </p>

            <p className="mt-4 leading-8 text-emerald-900/70">
              Whether you need a few plants for your home or a larger
              quantity for a garden, landscaping project, avenue plantation
              or commercial space, the nursery can arrange suitable
              transportation according to the requirement.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-xl">
            <img
              src="/service/unnamed.webp"
              alt="Sri Satyadeva Nursery transport facility"
              className="h-[320px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Garden Building Service */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-xl lg:order-1">
            <img
              src="/service/unnamed (1).webp"
              alt="Garden building and landscaping service"
              className="h-[320px] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-black uppercase tracking-[.25em] text-orange-600">
              Garden Development
            </p>

            <h2 className="mt-3 text-4xl font-black text-emerald-950">
              We come to your home and build your garden
            </h2>

            <p className="mt-5 leading-8 text-emerald-900/70">
              Sri Satyadeva Nursery also provides garden development support
              at your home. Our team can visit your space, understand the
              available area and help create a beautiful green garden using
              suitable plants and arrangements.
            </p>

            <p className="mt-4 leading-8 text-emerald-900/70">
              From selecting the right plants to arranging greenery in the
              available space, the goal is to create a garden that looks
              natural, attractive and easy to maintain.
            </p>
          </div>
        </div>
      </section>

      {/* Garden Renovation */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[.25em] text-orange-600">
              Garden Renovation
            </p>

            <h2 className="mt-3 text-4xl font-black text-emerald-950">
              Give your old or damaged garden a new look
            </h2>

            <p className="mt-5 leading-8 text-emerald-900/70">
              An old garden does not always need to be removed completely.
              Sri Satyadeva Nursery can help transform existing or damaged
              garden spaces into fresh and attractive green areas.
            </p>

            <p className="mt-4 leading-8 text-emerald-900/70">
              Old plants, empty spaces and damaged garden areas can be
              reorganized with suitable new plants and a fresh arrangement.
              This gives the existing space a renewed appearance while
              making better use of the garden area.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-xl">
            <img
              src="/service/unnamed (2).webp"
              alt="Garden renovation service"
              className="h-[320px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* India Wide Delivery */}
      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-xl lg:order-1">
            <img
              src="/service/unnamed (3).webp"
              alt="Plant delivery across India"
              className="h-[320px] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="font-black uppercase tracking-[.25em] text-orange-600">
              Delivery Across India
            </p>

            <h2 className="mt-3 text-4xl font-black text-emerald-950">
              Plants delivered to every state in India
            </h2>

            <p className="mt-5 leading-8 text-emerald-900/70">
              Sri Satyadeva Nursery provides plant delivery support across
              India. Customers from different states can enquire about the
              plants they need, available quantities and suitable
              transportation options.
            </p>

            <p className="mt-4 leading-8 text-emerald-900/70">
              With nursery transportation facilities and experience in
              handling plants, the nursery works to make it easier for
              customers to bring greenery from Kadiyam to their homes,
              gardens, offices and other spaces across the country.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-14 max-w-5xl rounded-[2.5rem] bg-gradient-to-r from-emerald-800 to-emerald-600 p-8 text-white shadow-2xl md:p-12">
        <p className="font-black uppercase tracking-[.25em] text-yellow-300">Plant of the Week</p>
        <h2 className="mt-3 text-4xl font-black">Make one plant the star of your planting.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-white/80">
          Update this banner every week with a featured plant, image, care tips and enquiry call-to-action.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([icon, title, text]) => (
          <article key={title} className="hover-bounce rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100 text-3xl">{icon}</div>
            <h2 className="mt-6 text-2xl font-black text-emerald-950">{title}</h2>
            <p className="mt-3 leading-7 text-emerald-900/65">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

