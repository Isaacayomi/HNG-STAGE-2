import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md px-6 py-4 flex justify-between items-center max-w-[1440px] mx-auto rounded-b-xl">
      {/* Logo / App Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          TM
        </div>
        <h1 className="text-2xl font-bold text-blue-600">Ticket Manager</h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Dashboard
        </Link>
        <Link
          to="/tickets"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Tickets
        </Link>
      </nav>

      {/* Logout Button */}
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Logout
        </button>
      </div>

      {/* Mobile Menu Button (optional for future mobile) */}
      {/* <button className="md:hidden p-2 rounded-md bg-blue-100 text-blue-600">Menu</button> */}
    </header>
  );
}
