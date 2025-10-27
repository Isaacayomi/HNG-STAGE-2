<template>
  <div :class="[!isModal ? 'min-h-screen' : '', 'flex flex-col']">
    <!-- Navbar -->
    <header v-if="!isModal" class="sticky top-0 z-10 p-4">
      <Navbar />
    </header>

    <main class="flex-1">
      <!-- Ticket List -->
      <div v-if="!isModal" class="mx-4 mb-10">
        <TicketList />
      </div>

      <!-- Success/Error Message -->
      <div
        v-if="message"
        class="mb-6 text-center text-sm text-green-600 bg-green-50 py-2 rounded-lg"
      >
        {{ message }}
      </div>

      <!-- Ticket Form -->
      <form
        @submit.prevent="handleSubmit"
        class="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-10 space-y-4 mx-4"
      >
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"> Title * </label>
          <input
            v-model="ticketStore.form.title"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"> Description </label>
          <textarea
            v-model="ticketStore.form.description"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"> Status </label>
          <select
            v-model="ticketStore.form.status"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
        >
          {{ ticketStore.editing !== null ? 'Update Ticket' : 'Create Ticket' }}
        </button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTicketStore } from '../stores/TicketContext'
import Navbar from './Navbar.vue'
import TicketList from './TicektList.vue'

const props = defineProps({
  isModal: {
    type: Boolean,
    default: false,
  },
})

const ticketStore = useTicketStore()
const message = ref('')

// load tickets from localStorage
onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('ticketapp_tickets')) || []
  ticketStore.tickets = stored
})

// form submit
const handleSubmit = () => {
  const { form, editing, tickets, saveTickets } = ticketStore

  if (!form.title.trim()) {
    message.value = 'Title is required.'
    return
  }

  if (!['open', 'in_progress', 'closed'].includes(form.status)) {
    message.value = "Status must be 'open', 'in_progress', or 'closed'."
    return
  }

  if (editing !== null) {
    const updated = tickets.map((t, i) => (i === editing ? { ...form } : t))
    saveTickets(updated)
    ticketStore.editing = null
    message.value = 'Ticket updated successfully!'
    ticketStore.isTicketModalOpen = false
  } else {
    const newTickets = [...tickets, { ...form, id: Date.now().toString() }]
    saveTickets(newTickets)
    message.value = 'Ticket created successfully!'
    ticketStore.isTicketModalOpen = false
  }

  // reset form
  ticketStore.form.title = ''
  ticketStore.form.description = ''
  ticketStore.form.status = 'open'

  setTimeout(() => (message.value = ''), 3000)
}
</script>
