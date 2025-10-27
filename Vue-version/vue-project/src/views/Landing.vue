<script setup>
import { CheckCircle, Clock, TrendingUp, Zap, Shield, Users } from 'lucide-vue-next'
</script>

<template>
  <div
    class="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen flex flex-col"
  >
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-fuchsia-500"
    >
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style="mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)"
      />

      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
      />
      <div
        class="absolute top-20 right-1/4 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      />
      <div
        class="absolute -top-1 -left-24 w-72 h-72 bg-pink-400/50 rounded-full blur-2xl animate-pulse"
      />
      <div
        class="absolute top-10 -right-16 w-96 h-96 bg-blue-400/50 rounded-full blur-2xl animate-pulse"
      />
      <div
        class="absolute top-10 left-1/3 w-80 h-80 bg-fuchsia-500/60 rounded-full blur-2xl animate-pulse"
      />
      <div
        class="absolute -bottom-10 right-1/4 w-64 h-64 bg-emerald-400/50 rounded-full blur-2xl animate-pulse"
      />

      <div class="relative max-w-7xl mx-auto px-6 py-20 sm:py-32 pb-40">
        <div class="text-center max-w-4xl mx-auto">
          <div
            class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30"
          >
            <Zap class="w-4 h-4" />
            <span>Next-generation ticket management</span>
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Manage Tickets <span class="block mt-2">Effortlessly</span>
          </h1>

          <p class="text-lg sm:text-xl text-sky-50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Track, update, and resolve tickets with an intuitive interface designed for modern
            teams.
          </p>

          <div class="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RouterLink
              to="/register"
              class="group bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started Free
            </RouterLink>

            <RouterLink
              to="/login"
              class="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 shadow-sm"
            >
              Sign In
            </RouterLink>
          </div>

          <div class="flex flex-wrap justify-center items-center gap-10 mt-16 text-sky-50/90">
            <div
              v-for="(item, i) in [
                { icon: CheckCircle, color: 'text-emerald-300', text: 'No credit card required' },
                { icon: Shield, color: 'text-sky-300', text: 'Enterprise-grade security' },
                { icon: Users, color: 'text-fuchsia-300', text: 'Trusted by 10k+ teams' },
              ]"
              :key="i"
              class="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <component :is="item.icon" class="w-5 h-5 drop-shadow-sm" :class="item.color" />
              <span class="text-sm font-medium">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Waves -->
      <div class="absolute -bottom-16 left-0 right-0 w-full">
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
          />
          <path
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L0,320Z"
            fill="white"
            fill-opacity="0.5"
          />
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative max-w-7xl mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Everything you need to succeed
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Powerful features that help your team deliver exceptional support and resolve tickets
          faster.
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feature, index) in [
            {
              icon: TrendingUp,
              color: 'from-sky-500 to-sky-600',
              title: 'Smart Tracking',
              text: 'View all tickets in one unified dashboard.',
            },
            {
              icon: Clock,
              color: 'from-fuchsia-500 to-fuchsia-600',
              title: 'Instant Updates',
              text: 'Change ticket status seamlessly between states.',
            },
            {
              icon: CheckCircle,
              color: 'from-sky-500 to-sky-600',
              title: 'Peak Efficiency',
              text: 'Streamline your workflow with intelligent automation.',
            },
          ]"
          :key="index"
          class="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <div class="relative">
            <div
              :class="`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-500/30`"
            >
              <component :is="feature.icon" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-900">{{ feature.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative max-w-7xl mx-auto px-6 py-20">
      <div
        class="relative bg-gradient-to-br from-sky-500 via-sky-600 to-fuchsia-500 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div
          class="absolute inset-0 opacity-30"
          style="
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+');
          "
        />

        <div class="relative px-8 py-16 sm:px-16 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to transform your support?
          </h2>
          <p class="text-lg text-sky-50 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our platform.
          </p>
          <RouterLink
            to="/register"
            class="inline-block bg-white text-sky-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Free Trial
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative mt-auto border-t border-slate-200 bg-white/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-slate-600 text-sm">
            © {{ new Date().getFullYear() }} Ticket Manager. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm text-slate-600">
            <a href="#" class="hover:text-sky-600 transition-colors">Privacy</a>
            <a href="#" class="hover:text-sky-600 transition-colors">Terms</a>
            <a href="#" class="hover:text-sky-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
