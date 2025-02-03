interface CustomTextareaProps {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  type?: string;
  name?: string;
  className?: string;
  titleClassName?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  title,
  placeholder = "",
  titleClassName = "",
  value,
  onChange,
  type = "text",
  name,
  className = "",
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      <h1 className={`mb-2 ${titleClassName}`}>{title}</h1>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 focus:outline-primary1 px-4 py-2 h-full"
        {...props}
      />
    </div>
  );
};

export default CustomTextarea;
