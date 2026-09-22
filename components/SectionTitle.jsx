export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[.25em] text-orange-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black text-emerald-950 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-emerald-900/70">{text}</p>}
    </div>
  );
}
