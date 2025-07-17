import React from "react";

type propsType = {
  children: React.ReactNode;
  className: string;
};

const Button = ({ children, className }: propsType) => {
  return <div className={className}>{children}</div>;
};

export default Button;
