import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Tickets", path: "/tickets", icon: "🎟" },
    { name: "Login", path: "/login", icon: "🔐" },
  ];

  return (
    <aside className="w-64 bg-gray-800/90 backdrop-blur-md text-white p-6 hidden md:block rounded-r-xl shadow-lg h-full">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <ul className="space-y-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition 
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                <span>{link.icon}</span>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
