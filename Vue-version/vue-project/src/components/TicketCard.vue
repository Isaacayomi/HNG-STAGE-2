<script setup>
const props = defineProps({
  ticket: {
    type: Object,
    required: true,
  },
})

const statusColors = {
  open: 'bg-green-100 text-green-700',
  in_progress: 'bg-amber-100 text-amber-700',
  closed: 'bg-gray-200 text-gray-800',
}
</script>

<template>
  <div
    class="p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition flex flex-col gap-3"
  >
    <div class="flex justify-between items-start">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ ticket.title }}
      </h3>
      <span class="px-3 py-1 rounded-full text-sm font-medium" :class="statusColors[ticket.status]">
        {{ ticket.status.replace('_', ' ') }}
      </span>
    </div>

    <p v-if="ticket.description" class="text-gray-600 text-sm">
      {{ ticket.description }}
    </p>

    <div class="flex justify-between items-center text-gray-500 text-xs">
      <span>Priority: {{ ticket.priority || 'Normal' }}</span>
      <span>
        Created:
        {{ new Date(ticket.createdAt).toLocaleDateString() }}
      </span>
    </div>
  </div>
</template>
