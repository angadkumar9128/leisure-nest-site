import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-coffee-medium/80 max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch for reservations, inquiries, 
            or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-coffee-dark">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee-medium mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee-medium mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee-medium mb-2">
                  Subject
                </label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-coffee-medium mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>
              
              <Button variant="golden" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-coffee-dark">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-dark mb-1">Address</h3>
                    <p className="text-coffee-medium/80">
                      123 Café Street<br />
                      Downtown City Center<br />
                      ZIP 12345, State
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-dark mb-1">Phone</h3>
                    <p className="text-coffee-medium/80">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-dark mb-1">Email</h3>
                    <p className="text-coffee-medium/80">hello@cafezone.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-dark mb-1">Hours</h3>
                    <div className="text-coffee-medium/80 space-y-1">
                      <p>Monday - Thursday: 7:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 7:00 AM - 11:00 PM</p>
                      <p>Sunday: 8:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-warm">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-cream rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-golden mx-auto mb-4" />
                    <p className="text-coffee-medium font-medium">Interactive Map</p>
                    <p className="text-coffee-medium/60 text-sm">
                      Map integration coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="cafe" className="h-auto py-4">
                <div className="text-center">
                  <p className="font-semibold">Make Reservation</p>
                  <p className="text-sm opacity-80">Book your table</p>
                </div>
              </Button>
              <Button variant="warm" className="h-auto py-4">
                <div className="text-center">
                  <p className="font-semibold">Call Now</p>
                  <p className="text-sm opacity-80">Speak to our team</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;