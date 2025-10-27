import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useTicketStore = defineStore('ticket', () => {
  const tickets = ref([])
  const editing = ref(null)
  const form = reactive({
    title: '',
    description: '',
    status: 'open',
  })
  const message = ref('')
  const isTicketModalOpen = ref(false)

  const handleEdit = (index) => {
    editing.value = index
    Object.assign(form, tickets.value[index])
  }

  const handleDelete = (index) => {
    if (confirm('Are you sure you want to delete this ticket?')) {
      const updated = tickets.value.filter((_, i) => i !== index)
      saveTickets(updated)
      message.value = 'Ticket deleted successfully!'
      setTimeout(() => (message.value = ''), 3000)
    }
  }

  const saveTickets = (newTickets) => {
    localStorage.setItem('ticketapp_tickets', JSON.stringify(newTickets))
    tickets.value = newTickets
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
    isTicketModalOpen,
    handleEdit,
    handleDelete,
    saveTickets,
    statusColor,
  }
})
