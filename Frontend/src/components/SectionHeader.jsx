export default function SectionHeader({ title, subtitle, icon: Icon }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon size={28} className="text-blue-400" />}
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && <p className="text-slate-400 text-lg">{subtitle}</p>}
    </div>
  );
}
