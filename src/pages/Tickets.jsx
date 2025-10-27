import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Tickets() {
  const { logout } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    setTickets(stored);
  }, []);

  const saveTickets = (newTickets) => {
    localStorage.setItem("ticketapp_tickets", JSON.stringify(newTickets));
    setTickets(newTickets);
  };

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

  const handleEdit = (index) => {
    setEditing(index);
    setForm(tickets[index]);
  };

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      const updated = tickets.filter((_, i) => i !== index);
      saveTickets(updated);
      setMessage("Ticket deleted successfully!");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-600";
      case "in_progress":
        return "bg-amber-100 text-amber-600";
      case "closed":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tickets.length === 0 ? (
            <p className="text-gray-500 col-span-full text-center">
              No tickets created yet.
            </p>
          ) : (
            tickets.map((ticket, i) => (
              <div
                key={ticket.id || i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{ticket.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {ticket.description || "No description"}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status.replace("_", " ")}
                  </span>
                </div>
                <div className="flex gap-3 mt-4 justify-end">
                  <button
                    onClick={() => handleEdit(i)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-[1440px] mx-auto text-center py-4 text-gray-600 text-sm">
          © {new Date().getFullYear()} Ticket Manager — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
