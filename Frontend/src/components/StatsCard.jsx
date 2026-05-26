import Card from "./Card";

export default function StatsCard({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  color = "blue",
}) {
  const colorClasses = {
    blue: "from-blue-600/20 to-blue-400/10 border-blue-500/20",
    green: "from-green-600/20 to-green-400/10 border-green-500/20",
    red: "from-red-600/20 to-red-400/10 border-red-500/20",
    purple: "from-purple-600/20 to-purple-400/10 border-purple-500/20",
    orange: "from-orange-600/20 to-orange-400/10 border-orange-500/20",
  };

  const iconColors = {
    blue: "bg-blue-500/20 text-blue-400",
    green: "bg-green-500/20 text-green-400",
    red: "bg-red-500/20 text-red-400",
    purple: "bg-purple-500/20 text-purple-400",
    orange: "bg-orange-500/20 text-orange-400",
  };

  return (
    <Card
      className={`bg-gradient-to-br ${colorClasses[color]}`}
      variant="gradient"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg ${iconColors[color]}`}>
            <Icon size={24} />
          </div>
        )}
      </div>
      {subtitle && <p className="text-slate-500 text-sm">{subtitle}</p>}
      {trend && (
        <p className={`text-sm mt-2 font-semibold ${trend > 0 ? "text-green-400" : "text-red-400"}`}>
          {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% from last period
        </p>
      )}
    </Card>
  );
}
