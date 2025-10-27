import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition">
            TM
          </div>
          <h1 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
            Ticket Manager
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/dashboard"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/tickets"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Tickets
          </Link>
        </nav>

        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-medium shadow hover:shadow-lg transition">
          Logout
        </button>

        <button className="md:hidden p-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
