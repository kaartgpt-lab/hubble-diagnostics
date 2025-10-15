import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-6xl sm:text-7xl font-bold text-blue-950 mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist. It might have been
        moved or removed.
      </p>
      <Link
        to="/"
        className="bg-blue-950 !text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        Go Back Home
      </Link>
    </section>
  );
}
