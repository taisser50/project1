import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import GlassButton from "./GlassButton";

export default function ContactUs() {
  // بيانات النموذج
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  // نوع الأخطاء لكل حقل
  type Errors = {
    name?: string;
    email?: string;
    message?: string;
    file?: string;
  };

  // state لتخزين الأخطاء
  const [errors, setErrors] = useState<Errors>({});

  // دالة للتحقق من صحة النموذج عند الضغط على Submit
  const validate = () => {
    let newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is not valid";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.file) newErrors.file = "File is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // دالة للتحقق التفاعلي أثناء الكتابة
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // تحقق مباشر عند الكتابة
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (value.trim() === "") {
        newErrors[name as keyof Errors] =
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      } else {
        delete newErrors[name as keyof Errors];
        if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Email is not valid";
        }
      }
      return newErrors;
    });
  };

  // إرسال النموذج
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully ✅");
      console.log("Form Data:", formData);
      setFormData({ name: "", email: "", message: "", file: null });
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold text-center py-8 text-[#013a63]">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl bg-white shadow-xl rounded-2xl p-8">
        {/* الفورم */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* File upload */}
          <div>
            <label className="flex items-center justify-center bg-[#013a63] hover:bg-[#01497c] text-white font-semibold p-3 rounded-lg cursor-pointer transition">
              Attach File
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file =
                    e.target.files && e.target.files[0] ? e.target.files[0] : null;
                  setFormData((prev) => ({ ...prev, file }));

                  // تحقق مباشر من الملف
                  setErrors((prev) => {
                    const newErrors = { ...prev };
                    if (!file) newErrors.file = "File is required";
                    else delete newErrors.file;
                    return newErrors;
                  });
                }}
              />
            </label>
            {formData.file && (
              <p className="text-sm text-gray-700 mt-1">
                Selected: {formData.file.name}
              </p>
            )}
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">{errors.file}</p>
            )}
          </div>

          <GlassButton
            type="submit"
            className="bg-[#2c7da0] hover:bg-[#01497c] transition text-white font-semibold p-3 rounded-lg"
            text="Send Message"
          />
        </form>

        {/* بيانات الشركة */}
        <div className="flex flex-col gap-6 justify-center">
          <h3 className="text-xl font-bold text-gray-800">ADT Company</h3>
          <p className="text-gray-600">
            Erbil, Kurdistan - Iraq
            <br />
            ADT commercial & security solutions
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+9647500211000"
              className="text-blue-600 hover:underline"
            >
              +964 750 021 1000
            </a>
          </p>

          <div className="flex gap-4 text-white">
            <a
              href="https://wa.me/9647500211000"
              target="_blank"
              rel="noopener"
              className="bg-green-500 p-3 rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* الخريطة */}
      <div className="flex justify-center py-10">
        <iframe
          className="rounded-2xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.535308102839!2d44.02185882390179!3d36.172588304221854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400723a5bcc66aa1%3A0xb56e418a6a659f7d!2sADT%20Company!5e0!3m2!1sen!2sus!4v1757427313849!5m2!1sen!2sus"
          width={1000}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
