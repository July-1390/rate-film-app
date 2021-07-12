import "./Button.scss";

const Button = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  const classes = `btn ${className}`;

  return <button className={classes}>{children}</button>;
};

export default Button;
