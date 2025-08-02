import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Service",
      description: "We pour our heart into every cup of coffee and every service we provide."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building connections and creating a welcoming space for everyone."
    },
    {
      icon: Target,
      title: "Quality First",
      description: "Using only the finest ingredients and maintaining highest standards."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuously improving to exceed expectations in all we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-warm text-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-cream/90 leading-relaxed">
            More than just a café, CaféZone is a destination where great food, 
            entertainment, and wellness come together to create memorable experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-coffee-medium/80 leading-relaxed mb-6">
              Founded with a vision to create more than just a café, CaféZone represents 
              the perfect fusion of culinary excellence, entertainment, and wellness. 
              Our journey began with a simple belief: that great experiences are best 
              shared in comfortable, welcoming spaces.
            </p>
            
            <p className="text-coffee-medium/80 leading-relaxed mb-6">
              Today, we proudly serve as your neighborhood's premier destination for 
              fresh coffee, delicious meals, exciting games, and rejuvenating wellness 
              services. Whether you're looking for a quiet morning coffee, an afternoon 
              of games with friends, or a relaxing massage after a long day, we've 
              created a space where all these experiences seamlessly come together.
            </p>

            <p className="text-coffee-medium/80 leading-relaxed">
              Our commitment extends beyond just serving great food and beverages. 
              We believe in creating a community hub where people can connect, unwind, 
              and create lasting memories in a warm and inviting atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-coffee-medium/80 max-w-2xl mx-auto">
              The principles that guide everything we do at CaféZone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-warm hover:shadow-golden transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-coffee-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-coffee-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-coffee-medium/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-coffee-medium/80 max-w-2xl mx-auto">
              The passionate people behind your CaféZone experience
            </p>
          </div>

          <div className="bg-coffee-dark rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-cream mb-4">
              Dedicated to Your Experience
            </h3>
            <p className="text-cream/80 leading-relaxed max-w-3xl mx-auto">
              Our team consists of skilled baristas, experienced chefs, friendly game coordinators, 
              and certified massage therapists, all working together to ensure your visit to 
              CaféZone is nothing short of exceptional. We're committed to creating moments 
              of joy, relaxation, and connection for every guest who walks through our doors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;