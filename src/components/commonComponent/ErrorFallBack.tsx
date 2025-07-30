import React from "react";

interface propsType {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallBack: React.FC<propsType> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary-50 text-primary-900 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4!">
        Something went wrong
      </h1>
      <p className="text-sm md:text-base text-center mb-6! text-neutral-600 max-w-md">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6! py-2! rounded transition-colors duration-300"
      >
        Retry
      </button>
    </div>
  );
};

export default React.memo(ErrorFallBack);
