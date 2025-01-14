interface CustomButtonProps {
    label: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    variant?: "outlined" | "contained";
  }
  
  const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    type = "button",
    onClick,
    disabled = false,
    variant = "contained",
  }) => {
    const baseClass = "p-2 rounded-lg px-5 transition-all duration-300 border-2";
    const variantClass =
      variant === "contained"
        ? "bg-primary1 text-white border-primary1 hover:bg-white hover:text-primary1"
        : "bg-white text-primary1 border-primary1 hover:bg-primary1 hover:text-white";
  
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${baseClass} ${variantClass} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default CustomButton;
  