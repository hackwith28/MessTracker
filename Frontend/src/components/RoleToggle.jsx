export default function RoleToggle({ role, setRole, roles = ["STUDENT", "ADMIN"] }) {
  return (
    <div className="flex gap-4 justify-center mb-6">
      {roles.map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          className={`
            px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform
            ${
              role === r
                ? r === "ADMIN"
                  ? "bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/50 scale-105"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/50 scale-105"
                : "bg-slate-700 hover:bg-slate-600"
            }
            text-white shadow-lg hover:shadow-xl
          `}
        >
          {r.charAt(0) + r.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
}
