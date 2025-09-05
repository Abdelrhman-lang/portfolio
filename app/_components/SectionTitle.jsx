export default function SectionTitle({ title, icon }) {
  return (
    <div>
      <h4 className="flex items-center gap-4 text-xs border border-color px-5 py-2.5 rounded-full uppercase mb-14 w-[fit-content]">
        {icon} {title}
      </h4>
    </div>
  );
}
