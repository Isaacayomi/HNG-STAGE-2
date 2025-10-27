// src/stores/auth.js
import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  // Load session on mount
  onMounted(() => {
    const session = localStorage.getItem('ticketapp_session')
    if (session) {
      const parsed = JSON.parse(session)
      user.value = parsed.user
    }
  })

  // Signup
  const signup = (data) => {
    const users = JSON.parse(localStorage.getItem('ticketapp_users')) || []

    if (users.find((u) => u.email === data.email)) {
      throw new Error('Email already registered. Please log in.')
    }

    const newUser = { ...data }
    users.push(newUser)
    localStorage.setItem('ticketapp_users', JSON.stringify(users))

    // Auto login after signup
    const session = { token: Date.now().toString(), user: newUser }
    localStorage.setItem('ticketapp_session', JSON.stringify(session))
    user.value = newUser
  }

  // Login
  const login = (data) => {
    const users = JSON.parse(localStorage.getItem('ticketapp_users')) || []
    const existing = users.find((u) => u.email === data.email && u.password === data.password)

    if (!existing) {
      throw new Error('Invalid credentials. Please check and try again.')
    }

    const session = { token: Date.now().toString(), user: existing }
    localStorage.setItem('ticketapp_session', JSON.stringify(session))
    user.value = existing
  }

  // Logout
  const logout = () => {
    localStorage.removeItem('ticketapp_session')
    user.value = null
  }

  return { user, login, signup, logout }
})
