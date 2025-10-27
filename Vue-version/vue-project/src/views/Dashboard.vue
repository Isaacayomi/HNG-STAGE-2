<template>
  <div class="relative min-h-screen overflow-hidden bg-gray-50">
    <!-- Grid background -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
    />

    <!-- Navbar -->
    <header
      class="sticky top-0 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm z-10"
    >
      <Navbar />
    </header>

    <!-- Dashboard Content -->
    <main class="relative max-w-[1200px] mx-auto px-6 py-12 z-10">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800">Dashboard Overview 📊</h2>
        <button
          @click="isTicketModalOpen = true"
          class="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition whitespace-nowrap"
        >
          Create Ticket
        </button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(card, i) in statsCards"
          :key="i"
          class="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all"
        >
          <p class="text-gray-500 text-sm tracking-wide mb-2">{{ card.label }}</p>
          <h3 class="text-4xl font-extrabold text-gray-700">
            {{ card.value }}
          </h3>
        </div>
      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Bar Chart -->
        <div
          class="bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
        >
          <h3 class="text-lg font-semibold text-gray-800 mb-6">Ticket Summary</h3>
          <ApexChart
            width="100%"
            height="300"
            type="bar"
            :options="barOptions"
            :series="barSeries"
          />
        </div>

        <!-- Pie Chart -->
        <div
          class="bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
        >
          <h3 class="text-lg font-semibold text-gray-800 mb-6">Ticket Distribution</h3>
          <ApexChart
            width="100%"
            height="300"
            type="pie"
            :options="pieOptions"
            :series="pieSeries"
          />
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="mt-20">
        <p v-if="tickets.length" class="text-lg font-semibold text-gray-800 mb-6">
          Recent Activity
        </p>
        <TicketList v-if="tickets.length" />
      </div>
    </main>

    <!-- Ticket Modal -->
    <div
      v-if="isTicketModalOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white/90 backdrop-blur-sm rounded-2xl w-full max-w-lg p-6 relative">
        <button
          @click="isTicketModalOpen = false"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>
        <Tickets :isModal="true" />
      </div>
    </div>

    <!-- Footer -->
    <footer
      class="bg-white/80 backdrop-blur-sm border-t border-white/30 mt-16 text-center py-5 text-gray-600 text-sm"
    >
      © {{ new Date().getFullYear() }} Ticket Manager — All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTicketStore } from '../stores/TicketContext'
import { storeToRefs } from 'pinia'
import Navbar from '../components/Navbar.vue'
import Tickets from '../components/Tickets.vue'
import TicketList from '../components/TicektList.vue'
import ApexChart from 'vue3-apexcharts'

const ticketStore = useTicketStore()
const { tickets, isTicketModalOpen } = storeToRefs(ticketStore)

const { setTickets } = ticketStore

onMounted(() => {
  const storedTickets = JSON.parse(localStorage.getItem('ticketapp_tickets')) || []
  setTickets(storedTickets)
})

const total = computed(() => tickets.value.length)
const open = computed(() => tickets.value.filter((t) => t.status === 'open').length)
const resolved = computed(() => tickets.value.filter((t) => t.status === 'closed').length)

const statsCards = computed(() => [
  { label: 'Total Tickets', value: total.value },
  { label: 'Open Tickets', value: open.value },
  { label: 'Resolved Tickets', value: resolved.value },
])

const barOptions = {
  chart: { toolbar: { show: false } },
  xaxis: { categories: ['Open', 'Resolved'] },
  colors: ['#3b82f6', '#22c55e'],
  dataLabels: { enabled: true },
  plotOptions: { bar: { borderRadius: 6, columnWidth: '45%', distributed: true } },
}

const barSeries = computed(() => [{ name: 'Tickets', data: [open.value, resolved.value] }])

const pieOptions = {
  labels: ['Open', 'Resolved'],
  colors: ['#3b82f6', '#22c55e'],
  legend: { position: 'bottom' },
}

const pieSeries = computed(() => [open.value, resolved.value])
</script>

<style scoped></style>
