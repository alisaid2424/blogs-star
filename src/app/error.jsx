"use client";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center flex-col">
      <div className="text-3xl text-red-600 font-bold">
        Something Went Wrong
      </div>

      <h2 className="text-gray-700 my-5 text-xl">
        Error Message : {error.message}
      </h2>

      <button
        onClick={reset}
        className="text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 px-4 rounded-full"
      >
        Try Again
      </button>

      <Link href="/" className="text-xl block mt-7 text-blue-600 underline">
        Go To Home Page &rarr;
      </Link>
    </div>
  );
};

export default ErrorPage;
