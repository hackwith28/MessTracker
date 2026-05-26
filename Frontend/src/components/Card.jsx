export default function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
}) {
  const variants = {
    default: "bg-slate-800 border border-slate-700",
    gradient: "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700",
    elevated: "bg-slate-750 shadow-xl border border-slate-700",
  };

  return (
    <div
      className={`
        rounded-xl p-6
        ${variants[variant]}
        ${hover ? "hover:shadow-lg hover:border-slate-600 transition-all duration-200 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
