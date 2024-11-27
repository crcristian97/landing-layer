export default function Button({ children, className, ...props }) {
    return (
      <button 
        className={`px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded transition-all duration-300 ${className}`} 
        {...props}
      >
        {children}
      </button>
    );
  }