"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

export default function ClientProfile({ user, onNavigate }) {
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    phone: "+1 (555) 987-6543",
    address: "123 Main St, Downtown, City 12345",
    preferences: "Prefer morning appointments, have a friendly dog at home",
    emergencyContact: "Jane Doe - (555) 123-4567",
  })

  const [bookingHistory] = useState([
    {
      id: 1,
      service: "Grocery Shopping",
      provider: "Sarah Johnson",
      date: "2024-01-10",
      status: "completed",
      rating: 5,
    },
    {
      id: 2,
      service: "Pet Care",
      provider: "Mike Chen",
      date: "2024-01-08",
      status: "completed",
      rating: 4,
    },
    {
      id: 3,
      service: "Package Delivery",
      provider: "Emma Davis",
      date: "2024-01-05",
      status: "completed",
      rating: 5,
    },
  ])

  const handleSave = () => {
    // In a real app, this would save to your backend
    alert("Profile updated successfully!")
    onNavigate("client-dashboard")
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Client Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
        <Button onClick={() => onNavigate("client-dashboard")}>Back to Dashboard</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
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
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="address"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences & Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences & Settings</CardTitle>
            <CardDescription>Customize your service preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="preferences">Service Preferences</Label>
              <Textarea
                id="preferences"
                value={profile.preferences}
                onChange={(e) => setProfile({ ...profile, preferences: e.target.value })}
                rows={3}
                placeholder="Any special instructions or preferences..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergency">Emergency Contact</Label>
              <Input
                id="emergency"
                value={profile.emergencyContact}
                onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                placeholder="Name - Phone Number"
              />
            </div>
            <div className="space-y-2">
              <Label>Notification Preferences</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="email-notifications" defaultChecked />
                  <Label htmlFor="email-notifications">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="sms-notifications" defaultChecked />
                  <Label htmlFor="sms-notifications">SMS notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="push-notifications" defaultChecked />
                  <Label htmlFor="push-notifications">Push notifications</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Booking History */}
      <Card>
        <CardHeader>
          <CardTitle>Booking History</CardTitle>
          <CardDescription>Your recent service bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookingHistory.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium">{booking.service}</p>
                    <p className="text-sm text-gray-600">with {booking.provider}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{booking.date}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < booking.rating ? "text-yellow-400" : "text-gray-300"}`}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
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

