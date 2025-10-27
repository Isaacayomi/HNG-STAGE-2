import { useTicket } from "../context/TicketContext";

function TicketList() {
  const {
    tickets,
    statusColor,
    handleEdit,
    handleDelete,
    setIsTicketModalOpen,
  } = useTicket();
  return (
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
                onClick={() => {
                  handleEdit(i);
                  setIsTicketModalOpen(true);
                }}
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
  );
}

export default TicketList;
