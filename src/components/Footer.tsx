import { Link } from "react-router-dom";
import { Coffee, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-golden" />
              <span className="text-xl font-bold">CaféZone</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Your perfect destination for great food, entertainment, and relaxation. 
              Experience the ultimate café lifestyle with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/60 hover:text-golden transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-golden transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/60 hover:text-golden transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Menu", href: "/menu" },
                { name: "Amusement Zone", href: "/amusement" },
                { name: "Wellness & Spa", href: "/wellness" },
                { name: "Events & Offers", href: "/events" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-cream/80 hover:text-golden transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <p>• Coffee & Beverages</p>
              <p>• Fresh Food & Snacks</p>
              <p>• Indoor Games</p>
              <p>• Body Massage</p>
              <p>• Event Hosting</p>
              <p>• Private Dining</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-golden flex-shrink-0" />
                <span className="text-cream/80">
                  123 Café Street, Downtown<br />
                  City Center, ZIP 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-golden flex-shrink-0" />
                <span className="text-cream/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-golden flex-shrink-0" />
                <span className="text-cream/80">hello@cafezone.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream/60">
            <p>&copy; 2024 CaféZone. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-golden transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-golden transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;