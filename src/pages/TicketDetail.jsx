import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function TicketDetail() {
  const { logout } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    const found = stored.find((t) => t.id === id);
    if (!found) return navigate("/tickets");
    setTicket(found);
    setForm(found);
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    const updated = stored.map((t) => (t.id === id ? form : t));
    localStorage.setItem("ticketapp_tickets", JSON.stringify(updated));
    setTicket(form);
    setMessage("Ticket updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  if (!ticket) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 backdrop-blur-md bg-white/70 shadow-md z-10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-primary">Ticket Manager</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-10 flex-1">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Ticket Detail
        </h2>

        {message && (
          <div className="mb-6 text-center text-sm text-green-600 bg-green-50 py-2 rounded-lg">
            {message}
          </div>
        )}

        <form
          onSubmit={handleUpdate}
          className="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-10 space-y-4 max-w-xl mx-auto"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
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
              rows="4"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
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
            Update Ticket
          </button>
        </form>
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-[1440px] mx-auto text-center py-4 text-gray-600 text-sm">
          © {new Date().getFullYear()} Ticket Manager — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
