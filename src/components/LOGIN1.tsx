import React, { useState, useContext } from "react";
import GlassButton from "./GlassButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Toast from "./taost";

export default function Auth() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info" as "success" | "error" | "info" | "warning",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.username) newErrors.username = "Username required";
    if (!formData.email) newErrors.email = "Email required";
    if (!formData.password) newErrors.password = "Password required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // فشل تسجيل الدخول
        setToast({
          show: true,
          message: data.message || "❌ Login failed, please try again later",
          type: "error",
        });
        return;
      }

      // تسجيل الدخول بنجاح
      login(
        { name: data.user?.name || formData.username, email: data.user?.email || formData.email },
        data.token || "dummy_token"
      );

      setToast({
        show: true,
        message: "✅ Logged in successfully",
        type: "success",
      });

      setTimeout(() => navigate("/"), 1500);

    } catch (error) {
      console.error(error);
      // مشكلة في السيرفر أو الشبكة
      setToast({
        show: true,
        message: "⚠️ Server busy, please try again later",
        type: "warning",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white rounded shadow-lg max-w-md mx-auto mt-20">
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="border p-2 rounded"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border p-2 rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        <GlassButton type="submit" text="Sign In" className="bg-blue-600 text-white p-2 rounded" />
      </form>

      {/* Toast window */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </>
  );
}
