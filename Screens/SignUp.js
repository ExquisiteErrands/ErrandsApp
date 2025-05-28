import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const ServiceProviderRegistration = ({ onBack }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceCategory: "",
    serviceType: "",
    hourlyRateMin: "",
    hourlyRateMax: "",
    location: "",
    experience: "",
    bio: "",
    nationalId: "",
  });

  const serviceCategories = [
    { value: "errands", label: "Errands & Delivery" },
    { value: "bluecollar", label: "Blue Collar Services" },
  ];

  const errandServices = [
    "Express Delivery",
    "Shopping & Errands",
    "Document Runner",
    "Package Pickup",
    "Grocery Shopping",
    "Bank Errands",
  ];

  const blueCollarServices = [
    "Plumbing Services",
    "Electrical Work",
    "House Cleaning",
    "Painting",
    "Carpentry",
    "Gardening",
    "Appliance Repair",
    "HVAC Services",
  ];

  const kiambuAreas = [
    "Kiambu Town",
    "Thika",
    "Ruaka",
    "Limuru",
    "Kikuyu",
    "Juja",
    "Gatundu",
    "Githunguri",
    "Lari",
    "Kiambaa",
    "Kabete",
    "Ndenderu",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Your application will be reviewed within 24 hours. We'll contact you soon.",
    });
    onBack();
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Join Exquisite Errands
            </CardTitle>
            <CardDescription className="text-lg">
              Start earning by providing quality services in Kiambu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                
                // ... keep existing code (personal information fields)
              </div>

              {/* Service Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Service Information</h3>
                
                // ... keep existing code (service category and type fields)

                <div>
                  <Label htmlFor="location">Primary Service Area *</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary service area" />
                    </SelectTrigger>
                    <SelectContent>
                      {kiambuAreas.map((area) => (
                        <SelectItem key={area} value={area}>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {area}, Kiambu
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                // ... keep existing code (experience and bio fields)
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Documents</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Upload your documents</p>
                  <p className="text-sm text-gray-500 mb-4">
                    National ID, certificates, and profile photo (Max 5MB each)
                  </p>
                  <Button type="button" variant="outline">
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Submit Application
                </Button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Your application will be reviewed within 24 hours
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceProviderRegistration;
