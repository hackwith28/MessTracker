import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Building2, MapPin } from "lucide-react";
import {
  DashboardLayout,
  Card,
  StatsCard,
  LoadingSpinner,
  CreateMealForm,
  MealsList,
  AnalyticsSection,
} from "../components";

// AdminDashboard - Refactored to use sub-components
// Reduced from 412 lines to ~130 lines using CreateMealForm, MealsList, AnalyticsSection

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [meals, setMeals] = useState([]);
  const [stats, setStats] = useState([]);
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
      const [userRes, mealsRes, statsRes] = await Promise.all([
        API.get("/user/me"),
        API.get("/meals/today"),
        API.get("/meals/stats"),
      ]);
      setUser(userRes.data);
      setMeals(mealsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.log(err);
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingSpinner fullScreen />;

  const totalResponses = stats.reduce(
    (sum, meal) => sum + (meal.totalResponses || 0),
    0
  );
  const totalAccepted = stats.reduce(
    (sum, meal) => sum + (meal.acceptedCount || 0),
    0
  );
  const totalRejected = stats.reduce(
    (sum, meal) => sum + (meal.rejectedCount || 0),
    0
  );

  return (
    <DashboardLayout user={user}>
      {/* Admin Info Card */}
      {user && (
        <Card
          variant="gradient"
          className="mb-8 bg-gradient-to-r from-red-600/20 to-red-400/10"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">Admin Dashboard</p>
              <h1 className="text-3xl font-bold text-white mb-4">
                {user.name}
              </h1>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-red-400" />
                  <span className="text-slate-300">{user.college?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-red-400" />
                  <span className="text-slate-300">{user.hostel?.name}</span>
                </div>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </Card>
      )}

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          icon={() => <div className="text-2xl">🍽️</div>}
          title="Total Meals"
          value={meals.length}
          color="blue"
        />
        <StatsCard
          icon={() => <div className="text-2xl">💬</div>}
          title="Total Responses"
          value={totalResponses}
          color="purple"
        />
        <StatsCard
          icon={() => <div className="text-2xl">✅</div>}
          title="Accepted"
          value={totalAccepted}
          color="green"
        />
        <StatsCard
          icon={() => <div className="text-2xl">❌</div>}
          title="Rejected"
          value={totalRejected}
          color="red"
        />
      </div>

      {/* Create Meal Form Component */}
      <CreateMealForm onSuccess={fetchData} />

      {/* Meals List Component */}
      <MealsList meals={meals} onMealDeleted={fetchData} />

      {/* Analytics Component */}
      <AnalyticsSection stats={stats} />
    </DashboardLayout>
  );
}

export default AdminDashboard;