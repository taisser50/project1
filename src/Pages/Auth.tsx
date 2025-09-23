import React, { useState, useEffect, useContext } from "react";
import GlassButton from "../components/GlassButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is not valid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (mode === "register" && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "❌ Something went wrong");
        return;
      }

      if (mode === "login") {
        // تحديث Context لتغيير حالة Navbar
        login({ name: data.username, email: data.email }, data.token);

        alert("✅ Logged in successfully");
        navigate("/"); // توجيه المستخدم بعد تسجيل الدخول
      } else {
        alert("✅ Account created successfully");
        setMode("login");
        setFormData({ username: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Network error, please try again");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => console.log("Backend test:", data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center py-10 bg-gradient-to-r from-[#012a4a] via-[#01497c] to-[#2a6f97] rounded-2xl max-w-4xl mx-auto shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md bg-white shadow-lg rounded-2xl p-9 gap-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {mode === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 w-full"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border border-gray-300 rounded-lg p-3 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        {mode === "register" && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </>
        )}

        <GlassButton
          type="submit"
          text={mode === "login" ? "Sign In" : "Register"}
          className="bg-[#012a4a] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg"
        />

        <div className="text-center text-sm text-gray-600 mt-2">
          {mode === "login" ? (
            <>
              You don't have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("register")}
                className="text-[#01497c] font-semibold hover:underline"
              >
                Create account
              </button>
            </>
          ) : (
            <>
              Do you already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-[#01497c] font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
