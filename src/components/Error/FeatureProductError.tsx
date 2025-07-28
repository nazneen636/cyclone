import React from "react";
import { assets } from "../../helpers/AssetProvider";

type FeatureProductErrorProps = {
  errorMessage?: string;
  onTry: () => void;
  className: string;
};

const FeatureProductError: React.FC<FeatureProductErrorProps> = ({
  errorMessage = "Something went wrong while loading the products.",
  onTry,
  className,
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleTry = async () => {
    setLoading(true);
    try {
      await onTry();
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`w-full flex flex-col gap-2 items-center justify-center bg-red-50 rounded-lg p-6! text-center shadow ${className}`}
    >
      {/* Illustration Image */}
      <img
        src={assets.error_1} // Place this SVG or image in your public/images/ folder
        alt="Error illustration"
        className="w-full max-w-[200px] mb-4 animate-pulse"
      />

      <h2 className="text-2xl font-semibold text-danger-600 mb-2">
        Oops! Something Went Wrong
      </h2>
      <p className="text-base text-gray-700 mb-4">{errorMessage}</p>
      <button
        onClick={handleTry}
        disabled={loading}
        className="px-6! py-2! bg-danger-500 text-white rounded hover:bg-danger-700 transition cursor-pointer disabled:opacity-50"
      >
        {loading ? "Trying..." : "Try Again"}
      </button>
    </div>
  );
};

export default React.memo(FeatureProductError) || FeatureProductError;
