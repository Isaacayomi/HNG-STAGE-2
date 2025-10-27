<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div class="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <div
          class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition"
        >
          TM
        </div>
        <h1 class="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          Ticket Manager
        </h1>
      </RouterLink>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-6">
        <RouterLink
          to="/dashboard"
          class="text-gray-700 font-medium hover:text-blue-600 transition"
          :class="{ 'text-blue-600': route.path === '/dashboard' }"
        >
          Dashboard
        </RouterLink>

        <RouterLink
          to="/tickets"
          class="text-gray-700 font-medium hover:text-blue-600 transition"
          :class="{ 'text-blue-600': route.path === '/tickets' }"
        >
          Tickets
        </RouterLink>
      </nav>

      <!-- Logout Button -->
      <button
        @click="logout"
        class="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-medium shadow hover:shadow-lg transition"
      >
        Logout
      </button>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/AuthContext'

const { logout } = useAuthStore()
const route = useRoute()
</script>
