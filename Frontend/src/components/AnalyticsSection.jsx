import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { Card, SectionHeader } from "./index";

import { BarChart3 } from "lucide-react";

export default function AnalyticsSection({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <>
      <SectionHeader
        title="Analytics & Reports"
        icon={BarChart3}
      />

      <div className="space-y-8">
        {stats.map((meal) => {
          const totalResponses =
            (meal.yesCount || 0) +
            (meal.noCount || 0);

          const pieData = [
            {
              name: "Accepted",
              value: meal.yesCount || 0,
            },
            {
              name: "Rejected",
              value: meal.noCount || 0,
            },
          ];

          const barData = [
            {
              name: meal.mealType,

              Accepted:
                meal.yesCount || 0,

              Rejected:
                meal.noCount || 0,
            },
          ];

          return (
            <Card key={meal.mealId}>
              <h3 className="text-2xl font-bold text-white mb-2">
                {meal.mealType}
              </h3>

              <p className="text-slate-300 mb-6">
                {meal.menu}
              </p>

              {/* STATS */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <p className="text-3xl font-bold text-green-400">
                    {meal.yesCount || 0}
                  </p>

                  <p className="text-slate-400 text-sm mt-2">
                    Accepted
                  </p>
                </div>

                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <p className="text-3xl font-bold text-red-400">
                    {meal.noCount || 0}
                  </p>

                  <p className="text-slate-400 text-sm mt-2">
                    Rejected
                  </p>
                </div>

                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <p className="text-3xl font-bold text-blue-400">
                    {totalResponses}
                  </p>

                  <p className="text-slate-400 text-sm mt-2">
                    Total
                  </p>
                </div>
              </div>

              {/* CHARTS */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {totalResponses > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Response Distribution
                    </h4>

                    <ResponsiveContainer
                      width="100%"
                      height={250}
                    >
                      <PieChart>
                        <Pie
                          data={pieData}
                          dataKey="value"
                          outerRadius={80}
                          label
                        >
                          <Cell fill="#22c55e" />

                          <Cell fill="#ef4444" />
                        </Pie>

                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1e293b",
                            border:
                              "1px solid #475569",
                          }}
                        />

                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Response Summary
                  </h4>

                  <ResponsiveContainer
                    width="100%"
                    height={250}
                  >
                    <BarChart data={barData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#475569"
                      />

                      <XAxis
                        dataKey="name"
                        stroke="#94a3b8"
                      />

                      <YAxis stroke="#94a3b8" />

                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1e293b",
                          border:
                            "1px solid #475569",
                        }}
                      />

                      <Legend />

                      <Bar
                        dataKey="Accepted"
                        fill="#22c55e"
                      />

                      <Bar
                        dataKey="Rejected"
                        fill="#ef4444"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}