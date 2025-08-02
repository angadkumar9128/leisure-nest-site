import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, UtensilsCrossed, Cookie, Wine } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      id: "coffee",
      name: "Coffee & Beverages",
      icon: Coffee,
      items: [
        { name: "Espresso", price: "$3.50", desc: "Rich and bold single shot" },
        { name: "Cappuccino", price: "$4.25", desc: "Perfect blend of espresso and steamed milk" },
        { name: "Latte", price: "$4.50", desc: "Smooth espresso with creamy milk" },
        { name: "Americano", price: "$3.75", desc: "Classic black coffee" },
        { name: "Mocha", price: "$5.00", desc: "Coffee meets chocolate indulgence" },
        { name: "Iced Coffee", price: "$4.00", desc: "Refreshing cold brew" },
        { name: "Herbal Tea", price: "$3.25", desc: "Selection of premium teas" },
        { name: "Fresh Juice", price: "$4.50", desc: "Seasonal fruit juices" },
      ]
    },
    {
      id: "food",
      name: "Main Dishes",
      icon: UtensilsCrossed,
      items: [
        { name: "Club Sandwich", price: "$8.95", desc: "Triple-decker with chicken, bacon & avocado" },
        { name: "Caesar Salad", price: "$7.50", desc: "Crisp romaine with parmesan and croutons" },
        { name: "Grilled Panini", price: "$6.75", desc: "Choice of chicken, turkey, or vegetarian" },
        { name: "Pasta Primavera", price: "$9.25", desc: "Fresh vegetables in creamy sauce" },
        { name: "Burger Deluxe", price: "$10.50", desc: "Juicy beef patty with all the fixings" },
        { name: "Quinoa Bowl", price: "$8.00", desc: "Healthy bowl with fresh vegetables" },
        { name: "Fish & Chips", price: "$11.25", desc: "Beer-battered cod with crispy fries" },
        { name: "Margherita Pizza", price: "$12.00", desc: "Classic tomato, mozzarella & basil" },
      ]
    },
    {
      id: "snacks",
      name: "Snacks & Desserts",
      icon: Cookie,
      items: [
        { name: "Chocolate Brownie", price: "$4.25", desc: "Rich and fudgy with vanilla ice cream" },
        { name: "Cheesecake", price: "$5.50", desc: "New York style with berry compote" },
        { name: "Croissant", price: "$3.75", desc: "Buttery and flaky pastry" },
        { name: "Muffins", price: "$3.25", desc: "Daily selection of fresh baked muffins" },
        { name: "Fruit Tart", price: "$4.75", desc: "Seasonal fruits on vanilla custard" },
        { name: "Nachos", price: "$6.50", desc: "Loaded with cheese, jalapeños & salsa" },
        { name: "Wings", price: "$8.00", desc: "Spicy buffalo or BBQ glazed" },
        { name: "Hummus Plate", price: "$5.25", desc: "Fresh hummus with pita and vegetables" },
      ]
    },
    {
      id: "specialties",
      name: "Chef's Specialties",
      icon: Wine,
      items: [
        { name: "CaféZone Special", price: "$13.95", desc: "Our signature dish with seasonal ingredients" },
        { name: "Weekend Brunch", price: "$11.50", desc: "Eggs benedict with hollandaise sauce" },
        { name: "Seafood Risotto", price: "$14.25", desc: "Creamy arborio rice with fresh seafood" },
        { name: "Steak Sandwich", price: "$12.75", desc: "Tender beef with caramelized onions" },
        { name: "Lobster Roll", price: "$16.00", desc: "Fresh lobster on toasted brioche" },
        { name: "Duck Confit", price: "$15.50", desc: "Slow-cooked duck leg with cherry sauce" },
        { name: "Truffle Pasta", price: "$13.00", desc: "Fresh pasta with truffle oil and mushrooms" },
        { name: "Chocolate Soufflé", price: "$7.50", desc: "Warm chocolate soufflé with vanilla cream" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-coffee-medium/80 max-w-3xl mx-auto">
            Discover our carefully crafted selection of fresh, delicious offerings. 
            From artisanal coffee to gourmet meals, every item is prepared with quality ingredients and love.
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="border-0 shadow-warm hover:shadow-golden transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-dark">
                          {item.name}
                        </CardTitle>
                        <span className="text-lg font-bold text-golden">
                          {item.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-coffee-medium/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Special Notice */}
        <div className="mt-16 bg-gradient-golden rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-coffee-dark mb-4">
            Special Dietary Options Available
          </h3>
          <p className="text-coffee-dark/80 max-w-2xl mx-auto">
            We're happy to accommodate vegetarian, vegan, gluten-free, and other dietary requirements. 
            Please inform our staff about any allergies or special needs when ordering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;