import React, { useState } from "react";
import GlassButton from "./GlassButton"; // استبدل بالمسار الصحيح

export default function JobApplicationForm() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    coverLetter: string;
    resume: File | null;
  }>({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });

  type Errors = {
    name?: string;
    email?: string;
    coverLetter?: string;
    resume?: string;
  };

  const [errors, setErrors] = useState<Errors>({});

  // التحقق من البيانات
  const validate = () => {
    let newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // إرسال النموذج
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      
      console.log("Form Data:", formData);

        setFormData({
      name: "",
      email: "",
      coverLetter: "",
      resume: null,
    });
    }
  };

  return (
    <div className="flex justify-center py-10 bg-gradient-to-r from-[#012a4a] via-[#01497c] to-[#2a6f97] rounded-2xl max-w-4xl mx-auto shadow-lg">
      <form
        className="flex flex-col w-full max-w-md bg-[white] shadow-lg rounded-2xl p-9 gap-8"
        onSubmit={handleSubmit}
      >
        {/* الاسم */}
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* الايميل */}
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* السيرة الذاتية */}
       <div>
  <label className="flex items-center justify-center bg-[#013a63] hover:bg-[#01497c] text-white font-semibold p-3 rounded-lg cursor-pointer transition">
    Upload Resume
    <input
      type="file"
      className="hidden"
      onChange={(e) =>
        setFormData({
          ...formData,
          resume: e.target.files && e.target.files.length > 0 ? e.target.files[0] : null,
        })
      }
    />
  </label>

  {/* عرض اسم الملف بعد الاختيار */}
  {formData.resume && (
    <p className="text-sm text-gray-700 mt-2">
      Selected: <span className="font-medium">{formData.resume.name}</span>
    </p>
  )}

  {errors.resume && (
    <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
  )}
</div>

        {/* رسالة التغطية */}
        <div>
          <textarea
            placeholder="Cover Letter"
            rows={5}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.coverLetter}
            onChange={(e) =>
              setFormData({ ...formData, coverLetter: e.target.value })
            }
          ></textarea>
          {errors.coverLetter && (
            <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>
          )}
        </div>

        {/* زر الإرسال */}
        <GlassButton
          type="submit"
          className="bg-[#012a4a] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg"
          text="Apply Now"
        />
      </form>
    </div>
  );
}
