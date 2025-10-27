import { useState, useEffect } from "react";
import { useTicket } from "../context/TicketContext";
import Navbar from "./Navbar";
import TicketList from "./TicektList";

export default function Tickets({ isModal = false }) {
  const {
    form,
    editing,
    setEditing,
    setForm,
    tickets,
    setTickets,
    saveTickets,
    setIsTicketModalOpen,
  } = useTicket();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    setTickets(stored);
  }, [setTickets]);

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
      setIsTicketModalOpen(false);
    } else {
      const newTickets = [...tickets, { ...form, id: Date.now().toString() }];
      saveTickets(newTickets);
      setMessage("Ticket created successfully!");
      setIsTicketModalOpen(false);
    }

    setForm({ title: "", description: "", status: "open" });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className={`${!isModal ? "min-h-screen" : ""} flex flex-col`}>
      {!isModal && (
        <header className="sticky top-0 z-10 p-4">
          {/* <h2 className="text-xl font-bold">Ticket Manager</h2> */}
          <Navbar />
        </header>
      )}

      <main className="flex-1">
        <div className="mx-4 mb-10">{!isModal && <TicketList />}</div>

        {message && (
          <div className="mb-6 text-center text-sm text-green-600 bg-green-50 py-2 rounded-lg">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-10 space-y-4 mx-4"
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
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <button
            type="submit"
            // onClick={() => setIsTicketModalOpen(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
          >
            {editing !== null ? "Update Ticket" : "Create Ticket"}
          </button>
        </form>
      </main>
    </div>
  );
}
