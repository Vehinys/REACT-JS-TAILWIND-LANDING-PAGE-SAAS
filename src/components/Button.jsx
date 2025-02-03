export const Button = ({ children, theme, className, href }) => {
  const baseClasse = "text-white hover:text-white";
  const themeClasses =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
      ? "bg-n-7 hover:bg-p-3"
      : "";

  const renderButton = () => {
    <Button
      className={`button py-3 px-3 lg:py-4 lg:px-6 rounded-lg ${themeClasses} ${baseClasse} ${className}`}
    >
      {children}
    </Button>;
  };

  const renderLink = () => {
    <a href={href}>{children}</a>;
  };

  return <div>Button</div>;
};
