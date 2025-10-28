import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useTicketStore = defineStore('ticket', () => {
  const tickets = ref([])
  const setTickets = (data) => {
    tickets.value = data || []
  }

  const editing = ref(null)
  const form = reactive({
    title: '',
    description: '',
    status: 'open',
  })
  const message = ref('')
  const isTicketModalOpen = ref(false)

  const openModal = (index = null) => {
    editing.value = index
    if (index !== null) Object.assign(form, tickets.value[index])
    else Object.assign(form, { title: '', description: '', status: 'open' })
    isTicketModalOpen.value = true
  }

  const handleEdit = () => {
    if (editing.value === null) return

    tickets.value.splice(editing.value, 1, { ...form })
    tickets.value = [...tickets.value] // forces reactivity
    localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets.value))
    editing.value = null
  }

  const deleteTicket = (index) => {
    if (confirm('Are you sure you want to delete this ticket?')) {
      tickets.value.splice(index, 1)
      tickets.value = [...tickets.value] // forces reactivity
      localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets.value))
      message.value = 'Ticket deleted successfully!'
      setTimeout(() => (message.value = ''), 3000)
    }
  }

  const saveTickets = (newTickets) => {
    tickets.value = [...newTickets]
    localStorage.setItem('ticketapp_tickets', JSON.stringify(newTickets))
  }

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
