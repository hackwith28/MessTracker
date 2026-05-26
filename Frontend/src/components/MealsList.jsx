import { Trash2 } from "lucide-react";
import API from "../api/axios";
import { MealCard, Card } from "./index";

export default function MealsList({ meals, onMealDeleted }) {
  const handleDelete = async (mealId) => {
    if (window.confirm("Delete this meal?")) {
      try {
        await API.delete(`/meals/${mealId}`);
        onMealDeleted?.();
      } catch (err) {
        alert("Error deleting meal");
      }
    }
  };

  if (meals.length === 0) {
    return (
      <Card className="text-center py-12 mb-8">
        <div className="text-5xl mb-4">🍴</div>
        <p className="text-slate-400 text-lg">No meals created for today</p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {meals.map((meal) => (
        <div key={meal.id} className="relative">
          <MealCard meal={meal} isAdmin={true} />
          <button
            onClick={() => handleDelete(meal.id)}
            className="absolute top-6 right-6 p-2 hover:bg-red-600/20 rounded-lg transition-colors"
          >
            <Trash2 size={20} className="text-red-400" />
          </button>
        </div>
      ))}
    </div>
  );
}
