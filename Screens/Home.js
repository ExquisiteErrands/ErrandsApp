import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Phone, MessageSquare, Users, Briefcase } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceProviderRegistration from "@/components/ServiceProviderRegistration";
import DeliveryTracker from "@/components/DeliveryTracker";
import ProfileShowcase from "@/components/ProfileShowcase";

const Index = () => {
  const [activeView, setActiveView] = useState("home");

  const errandProviders = [
    {
      id: 1,
      name: "James Mwangi",
      service: "Express Delivery",
      rating: 4.8,
      completedJobs: 247,
      hourlyRate: "KSh 500-800",
      location: "Kiambu Town",
      bio: "Reliable delivery service with 3+ years experience in Kiambu. Fast and secure handling of packages.",
      avatar: "👨🏿‍💼",
      verified: true
    },
    {
      id: 2,
      name: "Grace Wanjiku",
      service: "Shopping & Errands",
      rating: 4.9,
      completedJobs: 156,
      hourlyRate: "KSh 400-600",
      location: "Ruaka, Kiambu",
      bio: "Experienced in grocery shopping, document collection, and general errands. Trustworthy and efficient.",
      avatar: "👩🏿‍💼",
      verified: true
    },
    {
      id: 3,
      name: "Peter Kiprotich",
      service: "Document Runner",
      rating: 4.7,
      completedJobs: 189,
      hourlyRate: "KSh 600-900",
      location: "Limuru, Kiambu",
      bio: "Specialized in government document collection, bank errands, and official paperwork handling.",
      avatar: "👨🏿‍💻",
      verified: true
    }
  ];

  const blueCollarProviders = [
    {
      id: 4,
      name: "David Otieno",
      service: "Plumbing Services",
      rating: 4.8,
      completedJobs: 324,
      hourlyRate: "KSh 1,200-2,500",
      location: "Thika, Kiambu",
      bio: "Licensed plumber with 8 years experience. Specializing in residential and commercial plumbing repairs.",
      avatar: "🔧",
      verified: true
    },
    {
      id: 5,
      name: "Mary Njeri",
      service: "House Cleaning",
      rating: 4.9,
      completedJobs: 278,
      hourlyRate: "KSh 800-1,500",
      location: "Kikuyu, Kiambu",
      bio: "Professional cleaning services for homes and offices. Eco-friendly products and thorough cleaning.",
      avatar: "🧹",
      verified: true
    },
    {
      id: 6,
      name: "Samuel Mutua",
      service: "Electrical Work",
      rating: 4.6,
      completedJobs: 195,
      hourlyRate: "KSh 1,500-3,000",
      location: "Juja, Kiambu",
      bio: "Certified electrician offering installation, repair, and maintenance services. Emergency callouts available.",
      avatar: "⚡",
      verified: true
    }
  ];

  if (activeView === "register") {
    return <ServiceProviderRegistration onBack={() => setActiveView("home")} />;
  }

  if (activeView === "tracker") {
    return <DeliveryTracker onBack={() => setActiveView("home")} />;
  }

  if (activeView === "profile") {
    return <ProfileShowcase onBack={() => setActiveView("home")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Exquisite Errands
                </h1>
                <p className="text-sm text-gray-600">Kiambu's Premier Service Platform</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setActiveView("register")}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                Join as Provider
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setActiveView("tracker")}
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                Track Delivery
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Connect with Trusted Service Providers in 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Kiambu</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From quick errands to professional services, find skilled providers who understand the Kiambu market and deliver quality results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">500+ Active Providers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">All Kiambu Areas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">24/7 Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="errands" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="errands" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Errands & Delivery
              </TabsTrigger>
              <TabsTrigger value="bluecollar" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Blue Collar Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="errands">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Errands & Delivery Services</h3>
                <p className="text-gray-600">Quick and reliable errand runners across Kiambu</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {errandProviders.map((provider) => (
                  <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-purple-200 hover:border-purple-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{provider.avatar}</div>
                          <div>
                            <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                              {provider.name}
                              {provider.verified && (
                                <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </CardTitle>
                            <CardDescription className="text-blue-600 font-medium">
                              {provider.service}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{provider.rating}</span>
                        </div>
                        <div>{provider.completedJobs} jobs</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{provider.bio}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Rate:</span>
                          <span className="font-semibold text-purple-600">{provider.hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {provider.location}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                          <Phone className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => setActiveView("profile")}
                          className="border-blue-300 text-blue-700 hover:bg-blue-50"
                        >
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bluecollar">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Blue Collar Services</h3>
                <p className="text-gray-600">Professional skilled services for your home and business</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blueCollarProviders.map((provider) => (
                  <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-purple-200 hover:border-purple-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{provider.avatar}</div>
                          <div>
                            <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
                              {provider.name}
                              {provider.verified && (
                                <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </CardTitle>
                            <CardDescription className="text-blue-600 font-medium">
                              {provider.service}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{provider.rating}</span>
                        </div>
                        <div>{provider.completedJobs} jobs</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{provider.bio}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Rate:</span>
                          <span className="font-semibold text-purple-600">{provider.hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-3 h-3" />
                          {provider.location}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                          <Phone className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => setActiveView("profile")}
                          className="border-blue-300 text-blue-700 hover:bg-blue-50"
                        >
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Exquisite Errands</h3>
              <p className="text-gray-400">
                Connecting Kiambu with trusted service providers for all your errands and professional needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Errands & Delivery</li>
                <li>Document Services</li>
                <li>Plumbing & Electrical</li>
                <li>Cleaning Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Kiambu, Kenya<br />
                +254 XXX XXX XXX<br />
                info@exquisiteerrands.co.ke
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;