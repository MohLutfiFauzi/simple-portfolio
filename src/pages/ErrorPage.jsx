import React from "react";
import { Button } from "@/components/ui/button";
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-2 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors px-6 py-2 rounded-lg"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
