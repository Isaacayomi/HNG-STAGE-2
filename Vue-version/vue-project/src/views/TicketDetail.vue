<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 backdrop-blur-md bg-white/70 shadow-md z-10">
      <div class="max-w-[1440px] mx-auto flex justify-between items-center p-4">
        <h1 class="text-xl font-bold text-primary">Ticket Manager</h1>
        <button
          @click="logout"
          class="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- Main -->
    <main class="max-w-[1440px] mx-auto px-6 py-10 flex-1">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Ticket Detail</h2>

      <div
        v-if="message"
        class="mb-6 text-center text-sm text-green-600 bg-green-50 py-2 rounded-lg"
      >
        {{ message }}
      </div>

      <form
        @submit.prevent="handleUpdate"
        class="bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-6 mb-10 space-y-4 max-w-xl mx-auto"
      >
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            v-model="form.description"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            v-model="form.status"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-2xl font-medium shadow hover:bg-blue-700 transition"
        >
          Update Ticket
        </button>
      </form>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t mt-auto">
      <div class="max-w-[1440px] mx-auto text-center py-4 text-gray-600 text-sm">
        © {{ new Date().getFullYear() }} Ticket Manager — All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const route = useRoute()
const router = useRouter()
const { logout } = useAuth()

const ticket = ref(null)
const form = ref({
  title: '',
  description: '',
  status: 'open',
})
const message = ref('')

onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('ticketapp_tickets')) || []
  const found = stored.find((t) => t.id === route.params.id)
  if (!found) return router.push('/tickets')
  ticket.value = found
  form.value = { ...found }
})

const handleUpdate = () => {
  const stored = JSON.parse(localStorage.getItem('ticketapp_tickets')) || []
  const updated = stored.map((t) => (t.id === route.params.id ? form.value : t))
  localStorage.setItem('ticketapp_tickets', JSON.stringify(updated))
  ticket.value = { ...form.value }
  message.value = 'Ticket updated successfully!'
  setTimeout(() => (message.value = ''), 3000)
}
</script>
