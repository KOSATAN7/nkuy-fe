import React from "react";

interface AlertProps {
  message: string;
  type: "error" | "success";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const colors = {
    success: {
      border: "border-green-500",
      bg: "bg-green-50",
      text: "text-green-800",
    },
    error: {
      border: "border-red-500",
      bg: "bg-red-50",
      text: "text-red-800",
    },
  };

  const { border, bg, text } = colors[type];

  return (
    <div
      role="alert"
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded border-s-4 ${border} ${bg} p-4 shadow-lg w-[90%] max-w-xl`}
    >
      <div className={`flex items-center gap-2 ${text}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <strong className="block font-medium">
          {type === "success" ? "Berhasil!" : "Gagal!"}
        </strong>
      </div>
      <p className={`mt-2 text-sm ${text}`}>{message}</p>
    </div>
  );
};

export default Alert;
