export default function TicketCard({ ticket }) {
  const statusColors = {
    open: "bg-green-100 text-green-700",
    in_progress: "bg-amber-100 text-amber-700",
    closed: "bg-gray-200 text-gray-800",
  };

  return (
    <div className="p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">{ticket.title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusColors[ticket.status]
          }`}
        >
          {ticket.status.replace("_", " ")}
        </span>
      </div>
      {ticket.description && (
        <p className="text-gray-600 text-sm">{ticket.description}</p>
      )}
      <div className="flex justify-between items-center text-gray-500 text-xs">
        <span>Priority: {ticket.priority || "Normal"}</span>
        <span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
