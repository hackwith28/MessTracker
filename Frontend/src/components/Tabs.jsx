export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="mb-6">
      <div className="flex gap-2 border-b border-slate-700 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-3 font-semibold whitespace-nowrap transition-all duration-200
              border-b-2 -mb-px
              ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-slate-400 hover:text-slate-300"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}
