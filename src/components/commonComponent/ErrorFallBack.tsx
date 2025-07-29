import React from "react";

interface propsType {
  error: Error;
  resetErrorBoundary: () => void;
}
const ErrorFallBack: React.FC<propsType> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1 className="">{error.message}</h1>
      <button onClick={resetErrorBoundary}> Retry</button>
    </div>
  );
};

export default React.memo(ErrorFallBack);
