import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import {
  AuthLayout,
  RoleToggle,
  Input,
  Button,
  FormGroup,
} from "../components";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (
        role === "ADMIN" &&
        res.data.role !== "ADMIN"
      ) {
        setErrors({ form: "This account is not an Admin" });
        return;
      }

      if (
        role === "STUDENT" &&
        res.data.role !== "STUDENT"
      ) {
        setErrors({ form: "This account is not a Student" });
        return;
      }

      if (res.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setErrors({
        form: "Invalid credentials. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="MessTracker" subtitle="Login to Your Account">
      <RoleToggle role={role} setRole={setRole} />

      {errors.form && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6">
          {errors.form}
        </div>
      )}

      <form onSubmit={loginUser} className="space-y-5">
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={Lock}
          error={errors.password}
        />

        <Button
          type="submit"
          variant={role === "ADMIN" ? "danger" : "primary"}
          fullWidth
          size="lg"
          isLoading={isLoading}
        >
          Login as {role}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-slate-400">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Register Here
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;