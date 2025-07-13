import {
  ArrowRightIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-semibold text-gray-900">
                  Acme Analytics
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#analytics"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Analytics
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1
                    className={`${lusitana.className} text-4xl md:text-6xl font-bold text-gray-900 leading-tight`}
                  >
                    Powerful Analytics
                    <span className="text-blue-600 block">Dashboard</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Transform your data into actionable insights with our
                    comprehensive analytics platform. Monitor performance, track
                    trends, and make data-driven decisions with confidence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/dashboard"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    <span>Start Dashboard</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
                    <span>Watch Demo</span>
                  </button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CogIcon className="w-5 h-5 text-blue-500" />
                    <span>Real-time Updates</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Analytics Overview
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Revenue</span>
                        <span className="text-lg font-bold text-blue-600">
                          $45,231
                        </span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Users</span>
                        <span className="text-lg font-bold text-green-600">
                          2,350
                        </span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <ChartBarIcon className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Sales Analytics
                        </span>
                      </div>
                      <span className="text-sm text-green-600">+12.5%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <UserGroupIcon className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          User Growth
                        </span>
                      </div>
                      <span className="text-sm text-green-600">+8.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <DocumentTextIcon className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Reports
                        </span>
                      </div>
                      <span className="text-sm text-green-600">+15.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything you need to succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive dashboard provides all the tools and insights
                you need to make informed decisions and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ChartBarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600">
                  Deep insights into your data with customizable charts, graphs,
                  and real-time metrics.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  User Management
                </h3>
                <p className="text-gray-600">
                  Comprehensive user management with role-based access control
                  and activity tracking.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <DocumentTextIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Smart Reports
                </h3>
                <p className="text-gray-600">
                  Automated reporting with customizable templates and scheduled
                  delivery.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <CogIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Custom Integrations
                </h3>
                <p className="text-gray-600">
                  Connect with your favorite tools and services through our
                  robust API.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Enterprise Security
                </h3>
                <p className="text-gray-600">
                  Bank-level security with encryption, compliance, and audit
                  trails.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRightIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Real-time Updates
                </h3>
                <p className="text-gray-600">
                  Live data synchronization across all devices with instant
                  notifications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="ml-3 text-xl font-semibold">
                  Acme Analytics
                </span>
              </div>
              <p className="text-gray-400">
                Transform your data into actionable insights with our
                comprehensive analytics platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Acme Analytics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
