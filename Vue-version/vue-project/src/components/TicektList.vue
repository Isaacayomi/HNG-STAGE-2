<script setup>
import { useTicketStore } from '../stores/TicketContext'

const ticketStore = useTicketStore()
const { tickets, statusColor } = ticketStore
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <p v-if="tickets.length === 0" class="text-gray-500 col-span-full text-center">
      No tickets created yet.
    </p>

    <div
      v-for="(ticket, i) in tickets"
      :key="ticket.id || i"
      class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-between"
    >
      <div>
        <h3 class="text-lg font-semibold mb-2">{{ ticket.title }}</h3>
        <p class="text-sm text-gray-600 mb-2">{{ ticket.description || 'No description' }}</p>
        <span
          class="inline-block px-3 py-1 rounded-full text-xs font-medium"
          :class="statusColor(ticket.status)"
        >
          {{ ticket.status.replace('_', ' ') }}
        </span>
      </div>

      <div class="flex gap-3 mt-4 justify-end">
        <button @click="ticketStore.openModal(i)" class="text-sm text-blue-600 hover:underline">
          Edit
        </button>
        <button @click="ticketStore.deleteTicket(i)" class="text-sm text-red-600 hover:underline">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
