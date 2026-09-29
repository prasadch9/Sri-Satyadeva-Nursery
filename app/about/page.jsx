import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <div className="page-gradient min-h-screen">
      <section className="hero-gradient px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-3xl text-emerald-950 sm:text-4xl font-black ">
            About Us
          </p>

          <h1 className="mt-3 font-black text-lg text-orange-600">
            Rooted in nature, grown with care.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-950/70">
            A vibrant destination in Kadiyam for plants, greenery and garden
            inspiration, bringing generations of nursery experience together
            with a passion for beautiful green spaces.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white p-4 shadow-2xl">
          <img
            src="/about/unnamed (1).webp"
            alt="Sri Satyadeva Nursery plants"
            className="h-full min-h-[380px] w-full rounded-[2.5rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-black uppercase tracking-[.2em] text-orange-600">
            Our Story
          </p>

          <h2 className="mt-3 text-4xl font-black text-emerald-950">
            A colorful place for plant lovers.
          </h2>

          <p className="mt-5 leading-8 text-emerald-900/70">
            Sri Satyadeva Nursery is a vibrant destination for plants,
            greenery and garden inspiration in Kadiyam. Since 1950, the
            nursery has been connected with the world of plants and has
            built more than seven decades of nursery experience.
          </p>

          <p className="mt-4 leading-8 text-emerald-900/70">
            With experience passed through generations and a strong
            understanding of plants, the nursery brings together a wide
            collection of greenery for homes, gardens, offices, landscapes
            and other outdoor spaces.
          </p>

          <p className="mt-4 leading-8 text-emerald-900/70">
            Today, Sri Satyadeva Nursery continues to grow with a large
            collection of more than 500 plant varieties, supported by a
            dedicated team of employees who work to care for plants and
            assist customers in finding the right greenery for their needs.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-[2rem] bg-emerald-800 p-6 text-white shadow-lg">
              <p className="text-3xl font-black text-lime-300">70+</p>
              <p className="mt-2 font-bold">Years of Nursery Experience</p>
            </div>

            <div className="rounded-[2rem] bg-orange-500 p-6 text-white shadow-lg">
              <p className="text-3xl font-black text-yellow-100">500+</p>
              <p className="mt-2 font-bold">Plant Varieties</p>
            </div>

            <div className="rounded-[2rem] bg-lime-700 p-6 text-white shadow-lg">
              <p className="text-3xl font-black text-lime-200">1950</p>
              <p className="mt-2 font-bold">Nursery Journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Nursery */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid items-center gap-10 rounded-[3rem] bg-white p-6 shadow-xl md:p-10 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[.2em] text-orange-600">
              More Than A Nursery
            </p>

            <h2 className="mt-3 text-4xl font-black text-emerald-950">
              A vibrant destination for plants, greenery and garden inspiration.
            </h2>

            <p className="mt-5 leading-8 text-emerald-900/70">
              Walking through Sri Satyadeva Nursery is an opportunity to
              discover different types of plants, explore new garden ideas
              and find greenery that can bring life to a space. From
              decorative plants to garden favourites, the nursery offers
              choices for different styles and requirements.
            </p>

            <p className="mt-4 leading-8 text-emerald-900/70">
              The nursery is supported by an experienced team of employees
              who help maintain the plants and support customers with their
              requirements. The focus is on creating a welcoming place where
              plant lovers, families, gardeners and landscaping enthusiasts
              can explore greenery comfortably.
            </p>

            <p className="mt-4 leading-8 text-emerald-900/70">
              Whether you are creating a small home garden, refreshing an
              existing outdoor space or looking for plants for a larger
              landscape, Sri Satyadeva Nursery is a place to explore,
              discover and get inspired.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-emerald-50 p-3 shadow-lg">
            <img
              src="/about/unnamed.webp"
              alt="Sri Satyadeva Nursery garden and plants"
              className="h-[360px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-white p-4 shadow-2xl">
          <img
            src="/about/unnamed (4).webp"
            alt="Our Mission - Sri Satyadeva Nursery"
            className="h-[380px] w-full rounded-[2.5rem] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-black uppercase tracking-[.2em] text-orange-600">
            Our Mission
          </p>

          <h2 className="mt-3 text-4xl font-black text-emerald-950">
            Helping people bring more greenery into their lives.
          </h2>

          <p className="mt-5 leading-8 text-emerald-900/70">
            Our mission is to make plants, greenery and garden possibilities
            easier for people to discover. We aim to provide a wide variety
            of healthy plants while creating a welcoming environment for
            everyone who loves nature.
          </p>

          <p className="mt-4 leading-8 text-emerald-900/70">
            With decades of nursery experience, our team works to care for
            plants, maintain variety and support customers in choosing
            greenery suitable for their homes, gardens, offices and outdoor
            spaces.
          </p>

          <p className="mt-4 leading-8 text-emerald-900/70">
            We believe that even a small addition of greenery can make a
            space feel fresher, more beautiful and closer to nature.
          </p>

          <div className="mt-7 rounded-[2rem] bg-emerald-800 p-7 text-white shadow-lg">
            <h3 className="text-xl font-black text-lime-300">
              Growing greenery with care
            </h3>

            <p className="mt-3 leading-7 text-white/80">
              From selecting plants to helping customers discover new garden
              ideas, our work is centered around creating greener and more
              enjoyable spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center lg:order-1">
          <p className="font-black uppercase tracking-[.2em] text-orange-600">
            Our Vision
          </p>

          <h2 className="mt-3 text-4xl font-black text-emerald-950">
            Inspiring greener homes, gardens and communities.
          </h2>

          <p className="mt-5 leading-8 text-emerald-900/70">
            Our vision is to continue growing as a trusted destination for
            plants and garden inspiration while encouraging more people to
            bring greenery into their everyday surroundings.
          </p>

          <p className="mt-4 leading-8 text-emerald-900/70">
            We look forward to creating a future where homes, offices,
            streets, gardens and open spaces are filled with healthy plants
            and beautiful greenery.
          </p>

          <p className="mt-4 leading-8 text-emerald-900/70">
            By combining long-standing nursery experience with a growing
            collection of plant varieties and a dedicated team, Sri
            Satyadeva Nursery aims to remain a place where plant lovers can
            discover, learn and find inspiration.
          </p>

          <div className="mt-7 rounded-[2rem] bg-orange-500 p-7 text-white shadow-lg">
            <h3 className="text-xl font-black text-yellow-100">
              A greener tomorrow starts today
            </h3>

            <p className="mt-3 leading-7 text-white/90">
              Every plant has the potential to add beauty and life to its
              surroundings. Our vision is to help make that possibility part
              of more spaces.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[3rem] bg-white p-4 shadow-2xl lg:order-2">
          <img
            src="/about/unnamed (2).webp"
            alt="Our Vision - Sri Satyadeva Nursery"
            className="h-full min-h-[380px] w-full rounded-[2.5rem] object-cover"
          />
        </div>
      </section>

      {/* Mission and Vision Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="hover-bounce rounded-[2rem] bg-emerald-800 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-black text-lime-300">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-white/80">
              To make healthy greenery, plant knowledge and beautiful garden
              choices accessible to everyone while continuing a tradition of
              nursery care built over generations.
            </p>
          </div>

          <div className="hover-bounce rounded-[2rem] bg-orange-500 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-black text-yellow-100">
              Our Vision
            </h3>

            <p className="mt-4 leading-8 text-white/90">
              To inspire greener homes, greener spaces and a stronger
              connection with nature, while growing into an even more vibrant
              destination for plant lovers across India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

