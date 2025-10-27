import { createContext, useContext, useState } from "react";

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [message, setMessage] = useState("");

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

  const saveTickets = (newTickets) => {
    localStorage.setItem("ticketapp_tickets", JSON.stringify(newTickets));
    setTickets(newTickets);
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
    <TicketContext.Provider
      value={{
        tickets,
        setTickets,
        handleEdit,
        setEditing,
        setForm,
        handleDelete,
        saveTickets,
        setMessage,
        statusColor,
        editing,
        form,
        message,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export const useTicket = () => useContext(TicketContext);
