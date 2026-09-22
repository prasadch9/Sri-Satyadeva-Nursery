import Link from "next/link";
import HomeCarousel from "@/components/HomeCarousel";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="page-gradient">
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 blob bg-white/20" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 blob-alt bg-orange-300/25" />

        <section className="px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Sri Satyadeva Nursery"
          title="Colorful nursery moments"/>
        <div className="mt-10">
          <HomeCarousel />
        </div>
      </section>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-black text-emerald-800 shadow">
              🌱 Since 1950 • Kadiyam
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[.95] tracking-tight text-emerald-950 sm:text-7xl">
              Grow green.
              <br />
              <span className="text-orange-600">Live colorful.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-950/75">
              Welcome to Sri Satyadeva Nursery — a vibrant destination for plants, greenery and garden inspiration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plants" className="rounded-full bg-emerald-800 px-6 py-3 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500">
                Explore Gallery
              </Link>
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-black text-emerald-800 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="floaty relative mx-auto w-full max-w-md">
            <div className="blob overflow-hidden border-8 border-white/80 bg-emerald-700 p-4 shadow-2xl">
              <div className="blob-alt overflow-hidden bg-white">
                <img src="/home/9358a308-dc07-4e76-b371-f2a4e7ff26c3.jpg" alt="Tropical nursery plants" className="aspect-square w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Plant of the Week"
          title="A little green inspiration every week"
          text="Our featured section is ready for you to replace with your own plant-of-the-week image and details."
        />
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2.5rem] bg-emerald-800 p-6 text-white shadow-2xl md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-[.25em] text-lime-300">Featured Plant</p>
              <h3 className="mt-3 text-4xl font-black">Areca Palm</h3>
              <p className="mt-4 leading-7 text-white/80">
                A bright, tropical favorite that adds a lively green touch to indoor and outdoor spaces.
              </p>
              <Link href="/services" className="mt-6 inline-block rounded-full bg-yellow-300 px-6 py-3 font-black text-emerald-950 hover:bg-orange-400">
                Explore Services
              </Link>
            </div>
            <img src="/home/unnamed (4).webp" alt="Featured tropical plant" className="blob-alt aspect-video w-full object-cover" />
          </div>
        </div>
      </section>


      <section className="pattern px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["🌴", "Tropical Plants", "Bright, leafy and full of life."],
              ["🌼", "Colorful Gardens", "Bring playful colors into your space."],
              ["🪴", "Garden Support", "Friendly nursery guidance for your plants."]
            ].map(([icon, title, text]) => (
              <div key={title} className="hover-bounce rounded-[2rem] bg-white p-7 shadow-lg">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-xl font-black text-emerald-950">{title}</h3>
                <p className="mt-2 leading-7 text-emerald-900/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-lg">
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["500+", "Plant varieties"],
              ["70+", "Years of nursery experience"],
              ["5000+", "Happy customers"],
              ["7 days", "Open every week"]
            ].map(([num, label], i) => (
              <div
                key={label}
                className={`px-6 py-10 text-center ${i !== 0 ? "border-t sm:border-t-0 sm:border-l" : ""} border-emerald-900/10`}
              >
                <p className="text-4xl font-black text-emerald-800 sm:text-5xl">{num}</p>
                <p className="mt-2 font-bold text-emerald-950/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Browse the Nursery"
          title="A peek at what's growing right now"
          text="A small selection of the greenery you'll find when you visit — indoor favorites, flowering plants and outdoor statement pieces."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["/home/indoor plants.webp", "Indoor Plants", "Perfect for low-light corners and tabletops."],
            ["/home/outdoor plants.webp", "Outdoor Plants", "Hardy greenery for balconies and terraces."],
            ["/home/flower plants.webp", "Flowering Plants", "Colorful blooms all through the year."],
            ["/home/garden.webp", "Garden Favorites", "Our most-loved, easy-to-grow picks."]
          ].map(([src, title, text]) => (
            <Link
              key={title}
              href="/plants"
              className="hover-bounce group overflow-hidden rounded-[2rem] bg-white shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-emerald-950">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-emerald-900/65">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pattern px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="floaty relative">
            <div className="blob-alt overflow-hidden border-8 border-white bg-emerald-700 shadow-2xl">
              <img
                src="/home/sitting plant.webp"
                alt="Caring for plants at the nursery"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Easy Care Guide" title="Keep your plants happy" />
            <div className="mt-6 space-y-5">
              {[
                ["☀️", "Light", "Bright, indirect light suits most indoor plants best. Avoid harsh midday sun."],
                ["💧", "Water", "Check the top two inches of soil — water only once it feels dry."],
                ["🌿", "Feed", "A little fresh compost every month keeps growth strong and leaves vibrant."]
              ].map(([icon, title, text]) => (
                <div key={title} className="flex gap-4 rounded-[1.5rem] bg-white p-5 shadow">
                  <div className="text-3xl">{icon}</div>
                  <div>
                    <h4 className="font-black text-emerald-950">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-emerald-900/65">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="What People Say"
          title="Loved by plant parents"
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Phani Ajit", "A beautifully maintained nursery with a peaceful and refreshing atmosphere. The greenery and scenic surroundings create a calm and pleasant experience. The staff and management are extremely friendly, supportive, and welcoming, making visitors feel comfortable and valued. The plants are well cared for, and the overall environment reflects great dedication and professionalism. A wonderful place for plant lovers and nature enthusiasts."],
            ["Shiny Kondeti.", "I like this Nursery. There are so many plants available in this Nursery including fruit plants, flower plants, Decor plants and also a medicinal plants. I noted that, the nursery looks like Clean and Green...such a pleasant atmosphere. Everyday number of plants be Exported.... I Love Polyhouse which contains so many varieties of Indoor plants in it.. Most experienced about Horticulture. Thank you 😊."],
            ["Sravan Kumar.", "Biggest nursery in Kadiyam very good staff, Sending their plants to all over india, I visited this place on 08 Aug 2025 Supervisor Surendra bro treated me very well and given lot of information regarding Nursery business thanks bro, they even dropped me from their location to nearby Highway."]
          ].map(([name, text]) => (
            <figure key={name} className="hover-bounce rounded-[2rem] bg-white p-7 shadow-lg">
              <blockquote className="leading-7 text-emerald-950/75">“{text}”</blockquote>
              <figcaption className="mt-5 font-black text-emerald-800">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="hero-gradient relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-14 text-center shadow-2xl sm:px-14">
          <div className="absolute -left-16 -top-16 h-56 w-56 blob bg-white/20" />
          <div className="absolute -right-16 -bottom-16 h-56 w-56 blob-alt bg-orange-300/25" />
          <div className="relative">
            <h2 className="text-3xl font-black text-emerald-950 sm:text-5xl">Start your garden today</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-emerald-950/75">
              Visit us in Kadiyam or get in touch — we'll help you find the right plants for your space.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/plants" className="rounded-full bg-emerald-800 px-6 py-3 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500">
                Explore Gallery
              </Link>
              <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-black text-emerald-800 shadow-lg transition hover:-translate-y-1 hover:bg-yellow-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
