import { motion } from "framer-motion";
import { Car, Shield, Clock, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Car,
    title: "Quick Pickup",
    description: "Get a ride within minutes of booking. Our smart algorithms match you with the nearest available driver to minimize waiting time.",
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description: "Travel with peace of mind knowing all our drivers are verified and trips are tracked in real-time. We prioritize your safety at every step of the journey.",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Need a ride at 3 AM? We've got you covered! Our service runs round the clock, ensuring you're never stranded. With drivers available at all hours and dedicated customer support, we're always here when you need us.",
  },
  {
    icon: Wallet,
    title: "Best Rates",
    description: "Enjoy competitive pricing with no hidden charges. Our transparent fare system ensures you always know what you're paying for.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose RideX</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best ride-hailing service with features designed for your comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}