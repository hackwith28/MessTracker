export default function Select({
  label,
  options = [],
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
          <div className="absolute left-4 top-3.5 text-slate-400 pointer-events-none">
            <Icon size={20} />
          </div>
        )}
        <select
          className={`
            w-full px-4 py-3 rounded-lg bg-slate-800 border-2 text-white appearance-none
            transition-all duration-200 focus:outline-none
            ${Icon ? "pl-12" : ""}
            ${error 
              ? "border-red-500 focus:border-red-600" 
              : "border-slate-700 focus:border-blue-500"
            }
          `}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-3.5 pointer-events-none text-slate-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
