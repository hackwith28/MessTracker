import { CheckCircle, Clock, Utensils } from "lucide-react";
import Card from "./Card";
import Button from "./Button";

export default function MealCard({
  meal,
  onRespond,
  userResponse,
  isAdmin = false,
}) {
  const getMealIcon = (type) => {
    const icons = {
      BREAKFAST: "🌅",
      LUNCH: "🍽️",
      DINNER: "🌙",
      SNACKS: "🥗",
    };
    return icons[type] || "🍴";
  };

  const getMealColor = (type) => {
    const colors = {
      BREAKFAST: "blue",
      LUNCH: "green",
      DINNER: "purple",
      SNACKS: "orange",
    };
    return colors[type] || "slate";
  };

  const borderColors = {
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    purple: "border-purple-500/30",
    orange: "border-orange-500/30",
    slate: "border-slate-500/30",
  };

  return (
    <Card
      className={`border-l-4 ${
        borderColors[getMealColor(meal.mealType)]
      }`}
      hover={!isAdmin}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{getMealIcon(meal.mealType)}</div>

          <div>
            <p className="text-slate-400 text-sm uppercase tracking-wider">
              {meal.mealType}
            </p>

            <h3 className="text-xl font-bold text-white">
              {meal.menuDescription}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-slate-300">
          <Clock size={16} className="text-blue-400" />

          <span className="text-sm">
            <span className="font-semibold">Serving:</span>{" "}
            {meal.servingTime}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <Utensils size={16} className="text-green-400" />

          <span className="text-sm">
            <span className="font-semibold">Deadline:</span>{" "}
            {meal.deadline}
          </span>
        </div>
      </div>

      {isAdmin ? (
        <div className="bg-slate-700/30 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">
                {meal.totalResponses || 0}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Responses
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {meal.acceptedCount || 0}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Accepted
              </p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-red-400">
                {meal.rejectedCount || 0}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                Rejected
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {userResponse ? (
            <div
              className={`flex items-center gap-3 p-3 rounded-lg ${
                userResponse === "YES"
                  ? "bg-green-500/20 border border-green-500/30"
                  : "bg-red-500/20 border border-red-500/30"
              }`}
            >
              <CheckCircle
                size={20}
                className={
                  userResponse === "YES"
                    ? "text-green-400"
                    : "text-red-400"
                }
              />

              <span
                className={
                  userResponse === "YES"
                    ? "text-green-400 font-semibold"
                    : "text-red-400 font-semibold"
                }
              >
                You {userResponse === "YES" ? "Accepted" : "Rejected"} this meal
              </span>
            </div>
          ) : (
            <div className="flex gap-3">
              <Button
                variant="success"
                size="sm"
                fullWidth
                onClick={() => onRespond(meal.id, "YES")}
              >
                Accept
              </Button>

              <Button
                variant="danger"
                size="sm"
                fullWidth
                onClick={() => onRespond(meal.id, "NO")}
              >
                Reject
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}