import {
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Users,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-fuchsia-500">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
          }}
        />

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-20 right-1/4 w-80 h-80 bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="absolute -top-1 -left-24 w-72 h-72 bg-pink-400/50 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-10 -right-16 w-96 h-96 bg-blue-400/50 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-fuchsia-500/60 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-10 right-1/4 w-64 h-64 bg-emerald-400/50 rounded-full blur-2xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-32 pb-40">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30">
              <Zap className="w-4 h-4" />
              <span>Next-generation ticket management</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Manage Tickets <span className="block mt-2">Effortlessly</span>
            </h1>

            <p className="text-lg sm:text-xl text-sky-50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Track, update, and resolve tickets with an intuitive interface
              designed for modern teams. Stay organized and deliver exceptional
              support.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/register"
                className="group bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started Free
              </a>

              <a
                href="/login"
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 shadow-sm"
              >
                Sign In
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-16 text-sky-50/90">
              {[
                {
                  icon: (
                    <CheckCircle className="w-5 h-5 text-emerald-300 drop-shadow-sm" />
                  ),
                  text: "No credit card required",
                },
                {
                  icon: (
                    <Shield className="w-5 h-5 text-sky-300 drop-shadow-sm" />
                  ),
                  text: "Enterprise-grade security",
                },
                {
                  icon: (
                    <Users className="w-5 h-5 text-fuchsia-300 drop-shadow-sm" />
                  ),
                  text: "Trusted by 10k+ teams",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute -bottom-16 left-0 right-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="1"
            />
            <path
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful features that help your team deliver exceptional support
            and resolve tickets faster than ever.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-500/30">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Smart Tracking
              </h3>
              <p className="text-slate-600 leading-relaxed">
                View all tickets in one unified dashboard with advanced
                filtering, search, and real-time status updates.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-fuchsia-500/30">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Instant Updates
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Change ticket status seamlessly between Open, In Progress, and
                Closed with automatic notifications.
              </p>
            </div>
          </div>

          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-500/30">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Peak Efficiency
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Streamline your workflow with intelligent automation and resolve
                tickets 3x faster than traditional methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-fuchsia-500 rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')",
            }}
          />

          <div className="relative px-8 py-16 sm:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to transform your support?
            </h2>
            <p className="text-lg text-sky-50 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our platform to deliver
              world-class customer support.
            </p>
            <a
              href="/register"
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <footer className="relative mt-auto border-t border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Ticket Manager. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-sky-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-sky-600 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-sky-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
