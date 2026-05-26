export default function Badge({
  children,
  variant = "primary",
  size = "md",
}) {
  const variants = {
    primary:
      "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    success:
      "bg-green-500/20 text-green-400 border border-green-500/30",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30",
    warning:
      "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    info: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs rounded",
    md: "px-3 py-1 text-sm rounded-md",
    lg: "px-4 py-2 text-base rounded-lg",
  };

  return (
    <span
      className={`inline-flex items-center font-semibold ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}
