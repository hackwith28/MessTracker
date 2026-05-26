export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {Icon && <Icon size={64} className="text-slate-500 mb-4" />}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-slate-400 text-center max-w-md mb-6">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
