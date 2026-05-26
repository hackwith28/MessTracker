export default function Input({
  label,
  error,
  icon: Icon,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-3.5 text-slate-400">
            <Icon size={20} />
          </div>
        )}
        <input
          className={`
            w-full px-4 py-3 rounded-lg bg-slate-800 border-2 text-white placeholder-slate-500
            transition-all duration-200 focus:outline-none
            ${Icon ? "pl-12" : ""}
            ${error 
              ? "border-red-500 focus:border-red-600 focus:shadow-lg focus:shadow-red-500/20" 
              : "border-slate-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20"
            }
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
