function Button({ children, className = "", type = "button", ...props }) {
  return (
    <button className={` rounded-md ${className}`} {...props} type={type}>
      {children}
    </button>
  );
}

export default Button;
