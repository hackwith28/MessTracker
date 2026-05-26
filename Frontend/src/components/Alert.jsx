import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Alert({
  type = "info",
  title,
  message,
  onClose,
  autoClose = true,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const typeStyles = {
    success: "bg-green-500/20 border-green-500/30 text-green-400",
    error: "bg-red-500/20 border-red-500/30 text-red-400",
    warning: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    info: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  };

  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    warning: <AlertCircle size={20} />,
    info: <Info size={20} />,
  };

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg border ${typeStyles[type]} animate-slide-in`}
    >
      {icons[type]}
      <div className="flex-1">
        {title && <p className="font-semibold">{title}</p>}
        {message && <p className="text-sm mt-1">{message}</p>}
      </div>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="p-1 hover:opacity-70 transition-opacity"
      >
        <X size={18} />
      </button>
    </div>
  );
}
