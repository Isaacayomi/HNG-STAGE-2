import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const { logout } = useAuth();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets =
      JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    setTickets(storedTickets);
  }, []);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const resolved = tickets.filter((t) => t.status === "closed").length;

  const data = [
    { name: "Open", value: open },
    { name: "Resolved", value: resolved },
  ];

  const COLORS = ["#3b82f6", "#22c55e"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Navbar */}
      <header className="sticky top-0 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm z-10">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent"
          >
            Ticket Manager
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/tickets"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Manage Tickets
            </Link>
            <button
              onClick={logout}
              className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="relative max-w-[1200px] mx-auto px-6 py-12 z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Dashboard Overview 📊
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              label: "Total Tickets",
              value: total,
              color: "from-blue-500 to-indigo-500",
            },
            {
              label: "Open Tickets",
              value: open,
              color: "from-yellow-400 to-orange-500",
            },
            {
              label: "Resolved Tickets",
              value: resolved,
              color: "from-green-400 to-emerald-600",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <p className="text-gray-500 text-sm tracking-wide mb-2">
                {card.label}
              </p>
              <h3
                className={`text-4xl font-extrabold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
              >
                {card.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bar Chart */}
          <div className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Ticket Summary
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
                <YAxis tick={{ fill: "#6b7280" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Ticket Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} (${value})`}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tickets"
            className="inline-block bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Go to Ticket Management
          </Link>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/30 mt-16">
        <div className="max-w-[1200px] mx-auto text-center py-5 text-gray-600 text-sm">
          © {new Date().getFullYear()} Ticket Manager — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
