export default function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-3xl text-emerald-950 sm:text-4xl font-black ">{eyebrow}</p>
      <h6 className="mt-3 font-black text-lg text-orange-600">{title}</h6>
    </div>
  );
}
