import { Coffee, Gamepad2, Sparkles, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cafeFood from "@/assets/cafe-food.jpg";
import amusementZone from "@/assets/amusement-zone.jpg";
import wellnessSpa from "@/assets/wellness-spa.jpg";

const Features = () => {
  const features = [
    {
      icon: Coffee,
      title: "Café & Dining",
      description: "Fresh coffee, delicious meals, and delightful desserts prepared with love and quality ingredients.",
      image: cafeFood,
      link: "/menu",
      buttonText: "View Menu"
    },
    {
      icon: Gamepad2,
      title: "Amusement Zone",
      description: "Enjoy carrom, snooker, foosball, and board games in our entertainment area designed for all ages.",
      image: amusementZone,
      link: "/amusement",
      buttonText: "Explore Games"
    },
    {
      icon: Sparkles,
      title: "Wellness & Spa",
      description: "Relax and rejuvenate with our professional massage services and wellness treatments.",
      image: wellnessSpa,
      link: "/wellness",
      buttonText: "Book Spa"
    },
    {
      icon: Calendar,
      title: "Events & Offers",
      description: "Special events, birthday celebrations, and exclusive offers for memorable experiences.",
      image: cafeFood,
      link: "/events",
      buttonText: "See Events"
    }
  ];

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-coffee-medium/80 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to make your visit unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-warm hover:shadow-golden transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-coffee-dark/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-coffee-dark" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-coffee-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-coffee-medium/80 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="cafe" asChild>
                  <Link to={feature.link}>{feature.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-coffee-dark rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-cream mb-4">
              Ready to Experience CaféZone?
            </h3>
            <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
              Book your table now and enjoy our complete range of services. 
              Perfect for family outings, date nights, or business meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="golden" size="lg" asChild>
                <Link to="/booking">Make Reservation</Link>
              </Button>
              <Button variant="cream" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;