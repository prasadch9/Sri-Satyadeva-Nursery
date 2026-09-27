import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="absolute -right-20 -top-24 h-72 w-72 blob bg-lime-400/15" />
      <div className="absolute -bottom-28 -left-20 h-80 w-80 blob-alt bg-orange-400/10" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-black text-lime-300">Sri Satyadeva Nursery</p>
          <p className="mt-3 max-w-md leading-7 text-emerald-100">
            Bringing colorful greenery, healthy plants and joyful garden ideas to homes and spaces.
          </p>
        </div>

        <div>
          <p className="font-black text-yellow-300">Quick Links</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-emerald-100">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/plants" className="hover:text-white">Plants</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>

        <div>
           <p className=" text-emerald-100"><span className="font-black text-yellow-300">Phone:</span> 093460 81444</p>
          <p className="mt-2 text-emerald-100">
            <span className="font-black text-yellow-300">Address: </span> Pulla Satyanarayana (Chantiyya Garu), Veeravaram Rd,
            Kadiyapulanka, Andhra Pradesh 533126
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/satyadevanursery/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 transition hover:-translate-y-1 hover:bg-pink-500"><FaInstagram /></a>
            <a aria-label="Facebook" href="https://www.facebook.com/satyadevanursery" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 transition hover:-translate-y-1 hover:bg-blue-500"><FaFacebookF /></a>
            <a aria-label="WhatsApp" href="https://wa.me/9346081444/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 transition hover:-translate-y-1 hover:bg-green-500"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-5 text-center text-sm text-emerald-200">
        © {new Date().getFullYear()} Sri Satyadeva Nursery. All rights reserved.
      </div>
    </footer>
  );
}
