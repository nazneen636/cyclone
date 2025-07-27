import React from "react";

type propsTypes = {
  children: React.ReactNode;
  className?: string;
};
const Search: React.FC<propsTypes> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default React.memo(Search) || Search;
