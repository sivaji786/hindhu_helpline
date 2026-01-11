interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({ onClick, children, variant = 'primary', fullWidth = true, disabled = false }: ButtonProps) {
  const baseClasses = "px-6 py-3.5 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = variant === 'primary'
    ? "bg-[#FF9933] text-white hover:bg-[#e68a2e] focus:ring-[#FF9933] shadow-sm hover:shadow-md"
    : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-400";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${widthClass} ${disabledClasses}`}
    >
      {children}
    </button>
  );
}
