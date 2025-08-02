import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Users, Gamepad2, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
  ];

  const partySize = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Make a Reservation
          </h1>
          <p className="text-xl text-coffee-medium/80 max-w-3xl mx-auto">
            Book your table for dining, reserve game equipment, or schedule a wellness session.
          </p>
        </div>

        {/* Booking Tabs */}
        <Tabs defaultValue="dining" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="dining" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Dining
            </TabsTrigger>
            <TabsTrigger value="games" className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              Games
            </TabsTrigger>
            <TabsTrigger value="wellness" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Wellness
            </TabsTrigger>
          </TabsList>

          {/* Dining Reservation */}
          <TabsContent value="dining">
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-coffee-dark flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Table Reservation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Preferred Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Preferred Time
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Party Size
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {partySize.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size} {size === "1" ? "person" : "people"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Contact Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Your Name
                    </label>
                    <Input placeholder="Full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    Special Requests
                  </label>
                  <Textarea placeholder="Any dietary restrictions, special occasions, or other requests..." />
                </div>

                <Button variant="golden" className="w-full">
                  Reserve Table
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Games Reservation */}
          <TabsContent value="games">
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-coffee-dark flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6" />
                  Game Equipment Booking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    Select Game
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your game" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carrom">Carrom Board</SelectItem>
                      <SelectItem value="snooker">Snooker Table</SelectItem>
                      <SelectItem value="foosball">Foosball Table</SelectItem>
                      <SelectItem value="boardgames">Board Games</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Time Slot
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Duration (hours)
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How long?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Number of Players
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Players" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 players</SelectItem>
                        <SelectItem value="4">4 players</SelectItem>
                        <SelectItem value="6">6 players</SelectItem>
                        <SelectItem value="8+">8+ players</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Contact Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <Button variant="golden" className="w-full">
                  Book Game Session
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wellness Reservation */}
          <TabsContent value="wellness">
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-coffee-dark flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Wellness Session Booking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    Service Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="swedish">Swedish Massage (60 min)</SelectItem>
                      <SelectItem value="deep">Deep Tissue Massage (90 min)</SelectItem>
                      <SelectItem value="hot-stone">Hot Stone Therapy (75 min)</SelectItem>
                      <SelectItem value="aromatherapy">Aromatherapy Session (60 min)</SelectItem>
                      <SelectItem value="couples">Couples Massage (90 min)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Preferred Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Preferred Time
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Full Name
                    </label>
                    <Input placeholder="Your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-medium mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-medium mb-2">
                    Special Requests or Health Considerations
                  </label>
                  <Textarea placeholder="Any injuries, allergies, or special requests we should know about..." />
                </div>

                <Button variant="golden" className="w-full">
                  Schedule Session
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Booking;