"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DollarSign, Plus, X, Clock } from "lucide-react"

export default function ProviderProfile({ user, onNavigate }) {
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    phone: "+1 (555) 123-4567",
    description:
      "Experienced service provider with 5+ years in various errands and tasks. Reliable, efficient, and customer-focused.",
    services: ["Grocery Shopping", "Pet Care", "Package Delivery"],
    hourlyRate: 25,
    location: "Downtown Area",
  })

  const [newService, setNewService] = useState("")
  const [availability, setAvailability] = useState({
    monday: { available: true, start: "09:00", end: "17:00" },
    tuesday: { available: true, start: "09:00", end: "17:00" },
    wednesday: { available: true, start: "09:00", end: "17:00" },
    thursday: { available: true, start: "09:00", end: "17:00" },
    friday: { available: true, start: "09:00", end: "17:00" },
    saturday: { available: false, start: "10:00", end: "15:00" },
    sunday: { available: false, start: "10:00", end: "15:00" },
  })

  const addService = () => {
    if (newService.trim()) {
      setProfile({
        ...profile,
        services: [...profile.services, newService.trim()],
      })
      setNewService("")
    }
  }

  const removeService = (index) => {
    setProfile({
      ...profile,
      services: profile.services.filter((_, i) => i !== index),
    })
  }

  const updateAvailability = (day, field, value) => {
    setAvailability({
      ...availability,
      [day]: {
        ...availability[day],
        [field]: value,
      },
    })
  }

  const handleSave = () => {
    // In a real app, this would save to your backend
    alert("Profile updated successfully!")
    onNavigate("provider-dashboard")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Provider Profile</h1>
          <p className="text-gray-600">Manage your profile and service offerings</p>
        </div>
        <Button onClick={() => onNavigate("provider-dashboard")}>Back to Dashboard</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={`/placeholder.svg?height=80&width=80`} />
                <AvatarFallback className="text-lg">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Photo</Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Service Area</Label>
              <Input
                id="location"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Rate Card */}
        <Card>
          <CardHeader>
            <CardTitle>Rate Card</CardTitle>
            <CardDescription>Set your pricing and service description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="hourlyRate"
                  type="number"
                  value={profile.hourlyRate}
                  onChange={(e) => setProfile({ ...profile, hourlyRate: Number.parseInt(e.target.value) })}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Service Description</Label>
              <Textarea
                id="description"
                value={profile.description}
                onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                rows={4}
                placeholder="Describe your services and experience..."
              />
            </div>
            <div className="space-y-2">
              <Label>Services Offered</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {profile.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {service}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => removeService(index)} />
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                  placeholder="Add a service..."
                  onKeyPress={(e) => e.key === "Enter" && addService()}
                />
                <Button onClick={addService} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Availability Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Availability Calendar</CardTitle>
          <CardDescription>Set your weekly availability schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(availability).map(([day, schedule]) => (
              <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={schedule.available}
                    onChange={(e) => updateAvailability(day, "available", e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span className="font-medium capitalize">{day}</span>
                </div>
                {schedule.available && (
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <Input
                      type="time"
                      value={schedule.start}
                      onChange={(e) => updateAvailability(day, "start", e.target.value)}
                      className="w-24"
                    />
                    <span>to</span>
                    <Input
                      type="time"
                      value={schedule.end}
                      onChange={(e) => updateAvailability(day, "end", e.target.value)}
                      className="w-24"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} size="lg">
          Save Profile
        </Button>
      </div>
    </div>
  )
}
