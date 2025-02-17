import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, CreditCard, Percent } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "₹50 Joining Bonus",
    description: "Get ₹50 in your wallet when you sign up",
  },
  {
    icon: Users,
    title: "₹25 Referral Bonus",
    description: "Earn ₹25 for each friend you refer",
  },
  {
    icon: CreditCard,
    title: "First Ride Bonus",
    description: "Special discount on your first ride",
  },
  {
    icon: Percent,
    title: "5% Cashback",
    description: "Get 5% back on every ride",
  },
];

export default function Referral() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Earn While You Ride</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our referral program and earn rewards for every friend you bring to RideX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
