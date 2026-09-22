import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <div className="page-gradient min-h-screen">
      <section className="hero-gradient px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[.25em] text-emerald-900">About Us</p>
          <h1 className="mt-3 text-5xl font-black text-emerald-950 sm:text-6xl">Rooted in nature, grown with care.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-950/70">
            A green destination in Kadiyam, created to make beautiful plants and joyful garden spaces easier to discover.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white p-4 shadow-2xl">
          <img src="/gallery/plant-18.svg" alt="Sri Satyadeva Nursery plants" className="h-full min-h-[380px] w-full rounded-[2.5rem] object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-black uppercase tracking-[.2em] text-orange-600">Our Story</p>
          <h2 className="mt-3 text-4xl font-black text-emerald-950">A colorful place for plant lovers.</h2>
          <p className="mt-5 leading-8 text-emerald-900/70">
            Sri Satyadeva Nursery is presented here as a modern, welcoming nursery website. Replace this paragraph with your exact business story, founder information, milestones and nursery details.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="hover-bounce rounded-[2rem] bg-emerald-800 p-7 text-white">
              <h3 className="text-xl font-black text-lime-300">Our Mission</h3>
              <p className="mt-3 leading-7 text-white/80">To make healthy greenery, plant knowledge and beautiful garden choices accessible to everyone.</p>
            </div>
            <div className="hover-bounce rounded-[2rem] bg-orange-500 p-7 text-white">
              <h3 className="text-xl font-black text-yellow-100">Our Vision</h3>
              <p className="mt-3 leading-7 text-white/90">To inspire greener homes, greener spaces and a stronger connection with nature.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
