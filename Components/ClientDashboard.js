"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, DollarSign, MapPin, Search, Star } from "lucide-react"

const mockProviders = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 4.8,
    services: ["Grocery Shopping", "Package Delivery", "Pet Care"],
    hourlyRate: 25,
    location: "Downtown",
    availability: "Available Now",
    description: "Experienced in grocery shopping and pet care services",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4.9,
    services: ["Home Cleaning", "Laundry", "Organization"],
    hourlyRate: 30,
    location: "Midtown",
    availability: "Available Today",
    description: "Professional cleaner with 5+ years experience",
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 4.7,
    services: ["Tutoring", "Document Prep", "Research"],
    hourlyRate: 35,
    location: "Uptown",
    availability: "Available Tomorrow",
    description: "Academic support and administrative assistance",
  },
]

export default function ClientDashboard({ user, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProvider, setSelectedProvider] = useState(null)

  const filteredProviders = mockProviders.filter(
    (provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.services.some((service) => service.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const handleBookService = (provider) => {
    setSelectedProvider(provider)
    // In a real app, this would navigate to booking screen
    alert(`Booking service with ${provider.name}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Find service providers for your errands</p>
        </div>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for services or providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold">$450</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Providers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Service Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>
                      {provider.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{provider.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{provider.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {provider.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{provider.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="ml-1">${provider.hourlyRate}/hr</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="ml-1">{provider.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="ml-1 text-sm">{provider.availability}</span>
                  </div>
                  <Button className="w-full" onClick={() => handleBookService(provider)}>
                    Book Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
