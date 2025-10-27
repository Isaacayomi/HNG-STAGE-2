import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useTicket } from "../context/TicketContext";

export default function Tickets() {
  const { logout } = useAuth();
  const {
    form,
    editing,
    setEditing,
    setForm,
    tickets,
    setTickets,
    saveTickets,
  } = useTicket();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    setTickets(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return setMessage("Title is required.");
    if (!["open", "in_progress", "closed"].includes(form.status))
      return setMessage("Status must be 'open', 'in_progress', or 'closed'.");

    if (editing !== null) {
      const updated = tickets.map((t, i) => (i === editing ? { ...form } : t));
      saveTickets(updated);
      setEditing(null);
      setMessage("Ticket updated successfully!");
    } else {
      const newTickets = [...tickets, { ...form, id: Date.now().toString() }];
      saveTickets(newTickets);
      setMessage("Ticket created successfully!");
    }

    setForm({ title: "", description: "", status: "open" });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 backdrop-blur-md bg-white/70 shadow-md z-10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
          <Link to="/dashboard" className="text-xl font-bold text-primary">
            Ticket Manager
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1440px] mx-auto px-6 py-10 flex-1">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Ticket Management
        </h2>

        {message && (
          <div className="mb-6 text-center text-sm text-green-600 bg-green-50 py-2 rounded-lg">
            {message}
          </div>
        )}

        {/* Create/Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-10 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-2xl font-medium shadow hover:bg-blue-700 transition"
          >
            {editing !== null ? "Update Ticket" : "Create Ticket"}
          </button>
        </form>

        {/* Ticket List */}
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-[1440px] mx-auto text-center py-4 text-gray-600 text-sm">
          © {new Date().getFullYear()} Ticket Manager — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
