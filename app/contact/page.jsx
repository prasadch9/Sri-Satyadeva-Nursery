"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SectionTitle from "@/components/SectionTitle";

const details = [
  [FiMapPin, "Visit Us", "Pulla Satyanarayana (Chantiyya Garu), Veeravaram Rd, Kadiyapulanka, Andhra Pradesh 533126"],
  [FiPhone, "Call Us", "+91 093460 81444"],
  [FiMail, "Email", "satyadevanursery@gmail.com"],
  [FiClock, "Opening Hours", "Mon – Sun • Nursery working days"]
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    setTimeout(() => {
      form.reset();
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 2500);
    }, 1000);
  };

  return (
    <div className="page-gradient min-h-screen px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Contact Us"
        title="Let's make your space greener."
        />

      <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-[2.5rem] bg-emerald-900 p-8 text-white shadow-2xl">
          <h2 className="text-3xl font-black text-lime-300">Get in touch</h2>

          <div className="mt-8 space-y-6">
            {details.map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-yellow-300">
                  <Icon />
                </div>

                <div>
                  <p className="font-black">{title}</p>
                  <p className="mt-1 text-sm text-white/70">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 border-t border-white/10 pt-7">
            <p className="font-black text-yellow-300">Follow us</p>

            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/satyadevanursery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 hover:bg-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/satyadevanursery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 hover:bg-blue-500"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/9346081444/"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-white/10 p-3 hover:bg-green-500"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-white p-8 shadow-xl md:p-10">
          <h2 className="text-3xl font-black text-emerald-950">
            Send an enquiry
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-5 sm:grid-cols-2"
          >
            <label className="sm:col-span-1">
              <span className="text-sm font-bold text-emerald-900">
                Name
              </span>

              <input
                required
                className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-emerald-50 px-4 py-3 outline-none focus:border-emerald-600"
                placeholder="Your name"
              />
            </label>

            <label>
              <span className="text-sm font-bold text-emerald-900">
                Phone
              </span>

              <input
                required
                type="tel"
                className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-emerald-50 px-4 py-3 outline-none focus:border-emerald-600"
                placeholder="Phone number"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="text-sm font-bold text-emerald-900">
                Email
              </span>

              <input
                required
                type="email"
                className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-emerald-50 px-4 py-3 outline-none focus:border-emerald-600"
                placeholder="you@example.com"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="text-sm font-bold text-emerald-900">
                Message
              </span>

              <textarea
                rows="5"
                className="mt-2 w-full rounded-2xl border border-emerald-900/15 bg-emerald-50 px-4 py-3 outline-none focus:border-emerald-600"
                placeholder="Tell us what plants you are looking for..."
              />
            </label>

            <button
              type="submit"
              className="cursor-pointer sm:col-span-2 rounded-full bg-orange-500 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-700"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-xl">
        <iframe
          title="Sri Satyadeva Nursery Location"
          src="https://www.google.com/maps?q=16.8915784,81.8189247&z=17&output=embed"
          className="h-80 w-full border-0 md:h-96"
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Success Popup */}
      {sent && (
        <div className="fixed right-5 top-5 z-[100] rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-2xl">
          Enquiry sent successfully!
        </div>
      )}
    </div>
  );
}

