"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import AuthScreen from "./components/AuthScreen"
import ClientDashboard from "./components/ClientDashboard"
import ProviderDashboard from "./components/ProviderDashboard"
import ProviderProfile from "./components/ProviderProfile"
import ClientProfile from "./components/ClientProfile"

export default function ErrandApp() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentView, setCurrentView] = useState("auth")

  const handleLogin = (userData) => {
    setCurrentUser(userData)
    setCurrentView(userData.type === "client" ? "client-dashboard" : "provider-dashboard")
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setCurrentView("auth")
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "auth":
        return <AuthScreen onLogin={handleLogin} />
      case "client-dashboard":
        return <ClientDashboard user={currentUser} onNavigate={setCurrentView} />
      case "provider-dashboard":
        return <ProviderDashboard user={currentUser} onNavigate={setCurrentView} />
      case "provider-profile":
        return <ProviderProfile user={currentUser} onNavigate={setCurrentView} />
      case "client-profile":
        return <ClientProfile user={currentUser} onNavigate={setCurrentView} />
      default:
        return <AuthScreen onLogin={handleLogin} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {currentUser && (
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-blue-600">ErrandEase</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentView(currentUser.type === "client" ? "client-profile" : "provider-profile")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{renderCurrentView()}</main>
    </div>
  )
}
