import { motion } from "framer-motion";
import { Car, Shield, Clock, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Car,
    title: "Quick Pickup",
    description: "Get a ride within minutes of booking",
  },
  {
    icon: Shield,
    title: "Safe Travel",
    description: "Verified drivers and real-time trip tracking",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available round the clock for your convenience",
  },
  {
    icon: Wallet,
    title: "Best Rates",
    description: "Competitive pricing with no hidden charges",
  },
];

export default function Features() {
  return (
    <section className="py-16">
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
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
