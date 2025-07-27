import React from "react";
// import { icons } from "../../helpers/IconsProvider"; // use your icon if needed
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="heading3 text-gray-900 mb-2">Page Not Found</h2>
        <p className="body-medium-500 text-gray-600 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default React.memo(ErrorPage);
