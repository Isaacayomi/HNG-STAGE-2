import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useTicketStore = defineStore('ticket', () => {
  // --- State ---
  const tickets = ref([])
  const editing = ref(null)
  const form = reactive({
    title: '',
    description: '',
    status: 'open',
  })
  const message = ref('')
  const isTicketModalOpen = ref(false)

  // --- Set Tickets (initial load or reset) ---
  const setTickets = (data) => {
    tickets.value = data || []
  }

  // --- Open Modal (like React handleEdit + modal) ---
  const openModal = (index = null) => {
    editing.value = index
    if (index !== null) {
      Object.assign(form, tickets.value[index])
    } else {
      Object.assign(form, { title: '', description: '', status: 'open' })
    }
    isTicketModalOpen.value = true
  }

  // --- Edit Ticket (save changes) ---
  const handleEdit = () => {
    if (editing.value === null) return

    // update ticket
    tickets.value[editing.value] = { ...form }

    // save to localStorage
    saveTickets(tickets.value)

    // reset editing
    editing.value = null
  }

  // --- Delete Ticket ---
  const deleteTicket = (index) => {
    if (!confirm('Are you sure you want to delete this ticket?')) return

    tickets.value.splice(index, 1)
    saveTickets(tickets.value)
    message.value = 'Ticket deleted successfully!'
    setTimeout(() => (message.value = ''), 3000)
  }

  // --- Save Tickets to state + localStorage ---
  const saveTickets = (newTickets) => {
    tickets.value = newTickets
    localStorage.setItem('ticketapp_tickets', JSON.stringify(newTickets))
  }

  // --- Status colors ---
  const statusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-600'
      case 'in_progress':
        return 'bg-amber-100 text-amber-600'
      case 'closed':
        return 'bg-gray-100 text-gray-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return {
    tickets,
    editing,
    form,
    message,
    openModal,
    isTicketModalOpen,
    handleEdit,
    deleteTicket,
    saveTickets,
    statusColor,
    setTickets,
  }
})
