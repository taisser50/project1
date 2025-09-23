import { useEffect, CSSProperties } from "react";

type ToastProps = {
  show: boolean;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
};

export default function Toast({ show, message, type = "info", onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 4000); // يغلق تلقائي بعد 4 ثواني
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const colors: Record<string, string> = {
    success: "bg-gradient-to-r from-green-500 to-emerald-600",
    error: "bg-gradient-to-r from-red-500 to-rose-600",
    info: "bg-gradient-to-r from-blue-500 to-indigo-600",
    warning: "bg-gradient-to-r from-yellow-400 to-amber-500",
  };

  const icons: Record<string, string> = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };

  // أنيميشن دخول من اليمين (inline)
  const slideInStyle: CSSProperties = {
    animation: "slideIn 0.4s ease-out",
  };

  return (
    <>
      {/* Keyframes inline */}
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(150%); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>

      <div className="fixed top-20 right-6 z-[9999]">
        <div
          style={slideInStyle}
          className={`flex items-center gap-2 px-6 py-3 text-white rounded-2xl shadow-2xl ${colors[type]}`}
        >
          <span className="text-lg">{icons[type]}</span>
          <span className="font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-auto text-white/80 hover:text-white font-bold"
          >
            ✖
          </button>
        </div>
      </div>
    </>
  );
}
