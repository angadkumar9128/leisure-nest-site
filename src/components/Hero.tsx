import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/cafe-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-coffee-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
          Welcome to{" "}
          <span className="bg-gradient-golden bg-clip-text text-transparent">
            CaféZone
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cream/90 mb-8 leading-relaxed">
          Where great food meets entertainment and wellness. 
          Experience the perfect blend of café culture, games, and relaxation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="golden" size="lg" asChild>
            <Link to="/menu">Explore Menu</Link>
          </Button>
          <Button variant="cream" size="lg" asChild>
            <Link to="/booking">Book a Table</Link>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Fresh Food", desc: "Daily prepared meals" },
            { title: "Game Zone", desc: "Indoor entertainment" },
            { title: "Wellness Spa", desc: "Relaxation services" },
            { title: "Events", desc: "Special occasions" },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-cream font-semibold mb-2">{feature.title}</h3>
              <p className="text-cream/70 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;