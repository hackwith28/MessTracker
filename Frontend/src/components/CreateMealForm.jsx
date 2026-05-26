import { useState } from "react";
import { Plus } from "lucide-react";
import API from "../api/axios";
import { Card, Input, Select, Button, FormGroup } from "./index";

export default function CreateMealForm({ onSuccess }) {
  const [mealType, setMealType] = useState("LUNCH");
  const [menuDescription, setMenuDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [servingTime, setServingTime] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [errors, setErrors] = useState({});

  const mealOptions = [
    { id: "BREAKFAST", name: "Breakfast" },
    { id: "LUNCH", name: "Lunch" },
    { id: "DINNER", name: "Dinner" },
    { id: "SNACKS", name: "Snacks" },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!menuDescription) newErrors.menu = "Menu description is required";
    if (!deadline) newErrors.deadline = "Deadline is required";
    if (!servingTime) newErrors.serving = "Serving time is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsCreating(true);
    try {
      await API.post("/meals", {
        date: new Date().toISOString().split("T")[0],
        mealType,
        menuDescription,
        deadline,
        servingTime,
      });
      setMenuDescription("");
      setDeadline("");
      setServingTime("");
      setMealType("LUNCH");
      setErrors({});
      onSuccess?.();
    } catch (err) {
      setErrors({ form: "Error creating meal" });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card className="mb-8" variant="elevated">
      <div className="flex items-center gap-3 mb-6">
        <Plus size={28} className="text-green-400" />
        <h2 className="text-2xl font-bold text-white">Create New Meal</h2>
      </div>

      {errors.form && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6">
          {errors.form}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <FormGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Meal Type"
            options={mealOptions}
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          />
          <Input
            label="Menu Description"
            type="text"
            placeholder="e.g., Chicken Biryani"
            value={menuDescription}
            onChange={(e) => setMenuDescription(e.target.value)}
            error={errors.menu}
          />
          <Input
            label="Response Deadline"
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            error={errors.deadline}
          />
          <Input
            label="Serving Time"
            type="datetime-local"
            value={servingTime}
            onChange={(e) => setServingTime(e.target.value)}
            error={errors.serving}
          />
        </FormGroup>
        <Button
          type="submit"
          variant="success"
          fullWidth
          size="lg"
          isLoading={isCreating}
        >
          <Plus size={20} />
          Create Meal
        </Button>
      </form>
    </Card>
  );
}
