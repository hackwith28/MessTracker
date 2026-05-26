import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { MapPin, Building2 } from "lucide-react";
import {
  DashboardLayout,
  Card,
  MealCard,
  SectionHeader,
  StatsCard,
  LoadingSpinner,
} from "../components";

function StudentDashboard() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [responses, setResponses] = useState({});
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [userRes, mealsRes] = await Promise.all([
        API.get("/user/me"),
        API.get("/meals/today"),
      ]);
      setUser(userRes.data);
      setMeals(mealsRes.data);

      // Initialize responses
      const responseMap = {};
      mealsRes.data.forEach((meal) => {
        if (meal.userResponse) {
          responseMap[meal.id] = meal.userResponse;
        }
      });
      setResponses(responseMap);
    } catch (err) {
      console.log(err);
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const submitResponse = async (mealId, response) => {
    try {
      await API.post("/meals/respond", {
        mealId,
        response,
      });

      setResponses({
        ...responses,
        [mealId]: response,
      });
    } catch (err) {
      console.log(err);
      alert("Error submitting response");
    }
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  const acceptedCount = Object.values(responses).filter(
    (r) => r === "YES"
  ).length;
  const rejectedCount = Object.values(responses).filter(
    (r) => r === "NO"
  ).length;

  return (
    <DashboardLayout user={user}>
      {/* User Info Card */}
      {user && (
        <Card variant="gradient" className="mb-8 bg-gradient-to-r from-blue-600/20 to-blue-400/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
              <h1 className="text-3xl font-bold text-white mb-4">
                {user.name}
              </h1>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-blue-400" />
                  <span className="text-slate-300">{user.college?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-400" />
                  <span className="text-slate-300">{user.hostel?.name}</span>
                </div>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </Card>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          icon={() => (
            <div className="text-2xl">🍽️</div>
          )}
          title="Total Meals"
          value={meals.length}
          color="blue"
        />
        <StatsCard
          icon={() => (
            <div className="text-2xl">✅</div>
          )}
          title="Accepted"
          value={acceptedCount}
          color="green"
        />
        <StatsCard
          icon={() => (
            <div className="text-2xl">❌</div>
          )}
          title="Rejected"
          value={rejectedCount}
          color="red"
        />
      </div>

      {/* Meals Section */}
      <SectionHeader
        title="Today's Meals"
        subtitle="Respond to meals to let the admin know your preferences"
        icon={() => <div className="text-3xl">📅</div>}
      />

      {meals.length === 0 ? (
        <Card className="text-center py-12">
          <div className="text-5xl mb-4">🍴</div>
          <p className="text-slate-400 text-lg">
            No meals available for today
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onRespond={submitResponse}
              userResponse={responses[meal.id]}
              isAdmin={false}
            />
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}

export default StudentDashboard;