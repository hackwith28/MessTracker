import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Building2, Home } from "lucide-react";
import {
  AuthLayout,
  RoleToggle,
  Input,
  Select,
  Button,
  LoadingSpinner,
} from "../components";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [colleges, setColleges] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedHostel, setSelectedHostel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoadingData(true);
    try {
      const [collegesRes, hostelsRes] = await Promise.all([
        API.get("/colleges"),
        API.get("/hostels"),
      ]);
      setColleges(collegesRes.data);
      setHostels(hostelsRes.data);
    } catch (err) {
      console.log(err);
      setErrors({ form: "Error loading data" });
    } finally {
      setIsLoadingData(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password || password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!selectedCollege) newErrors.college = "Please select a college";
    if (!selectedHostel) newErrors.hostel = "Please select a hostel";
    return newErrors;
  };

  const registerUser = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
        role,
        college: { id: selectedCollege },
        hostel: { id: selectedHostel },
      });

      navigate("/");
    } catch (err) {
      setErrors({
        form:
          err.response?.data?.message ||
          "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingData) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <AuthLayout title="Create Account" subtitle="Join MessTracker Today">
      <RoleToggle role={role} setRole={setRole} />

      {errors.form && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6">
          {errors.form}
        </div>
      )}

      <form onSubmit={registerUser} className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={User}
          error={errors.name}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={Mail}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={Lock}
          error={errors.password}
        />

        <Select
          label="College"
          options={colleges}
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
          icon={Building2}
          error={errors.college}
        />

        <Select
          label="Hostel"
          options={hostels}
          value={selectedHostel}
          onChange={(e) => setSelectedHostel(e.target.value)}
          icon={Home}
          error={errors.hostel}
        />

        <Button
          type="submit"
          variant={role === "ADMIN" ? "danger" : "success"}
          fullWidth
          size="lg"
          isLoading={isLoading}
        >
          Register as {role}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-slate-400">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Login Here
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Register;