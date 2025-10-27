<template>
  <div
    class="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-500 via-sky-600 to-fuchsia-500 overflow-hidden"
  >
    <!-- Background circles -->
    <div
      class="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
    />
    <div
      class="absolute bottom-10 right-1/4 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse"
      style="animation-delay: 1s"
    />

    <!-- Grid overlay -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"
      :style="{
        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)',
      }"
    />

    <!-- Bottom wave -->
    <div class="absolute bottom-0 left-0 right-0 w-full">
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L0,320Z"
          fill="white"
          fill-opacity="1"
        />
      </svg>
    </div>

    <!-- Login card -->
    <div
      class="relative w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/30 z-10"
    >
      <div class="flex flex-col items-center mb-6">
        <div
          class="flex items-center gap-2 bg-sky-100 text-sky-600 px-4 py-2 rounded-full font-medium mb-4"
        >
          <Zap class="w-4 h-4" />
          <span>Welcome back</span>
        </div>
        <h2 class="text-3xl font-bold text-slate-800 text-center">Sign in to Ticket Manager</h2>
        <p class="text-slate-500 text-sm text-center mt-2">
          Manage and resolve tickets efficiently
        </p>
      </div>

      <p v-if="error" class="text-red-500 text-sm text-center mb-4">
        {{ error }}
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2"> Email Address </label>
          <div class="relative">
            <Mail class="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="email"
              v-model="form.email"
              placeholder="you@example.com"
              class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              required
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2"> Password </label>
          <div class="relative">
            <Lock class="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="password"
              v-model="form.password"
              placeholder="••••••••"
              class="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <LogIn class="w-5 h-5" />
          Sign In
        </button>
      </form>

      <p class="text-sm text-center mt-6 text-slate-600">
        Don’t have an account?
        <RouterLink
          to="/register"
          class="text-sky-600 font-medium hover:underline hover:text-fuchsia-600 transition-colors"
        >
          Create one
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/AuthContext'
import { Mail, Lock, LogIn, Zap } from 'lucide-vue-next'

const { login } = useAuthStore()
const router = useRouter()

const form = ref({
  email: '',
  password: '',
})
const error = ref('')

const handleSubmit = async () => {
  try {
    await login(form.value)
    router.push('/dashboard') // ✅ navigation here
  } catch (err) {
    error.value = err.message || 'Invalid login credentials.'
  }
}
</script>
