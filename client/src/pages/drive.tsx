import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, DollarSign, Clock, Award } from "lucide-react";

export default function Drive() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Drive & Earn with <span className="text-primary">RideX</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of drivers who choose RideX for flexible earnings,
                great benefits, and a supportive community.
              </p>
              <Button size="lg" className="gap-2">
                Start Earning Today <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d"
                alt="Drive with RideX"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Drive with RideX?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy the freedom of being your own boss with the security of a
              trusted platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Competitive Earnings",
                description:
                  "Earn more with competitive rates, bonuses, and incentives.",
                image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description:
                  "Work when you want, as much as you want. You're in control.",
                image: "https://images.unsplash.com/photo-1508962914676-134849a727f0",
              },
              {
                icon: Award,
                title: "Regular Rewards",
                description:
                  "Get rewarded for your dedication with special bonuses and achievements.",
                image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start?</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                    alt="Join RideX"
                    className="rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-4">
                      Join RideX Today
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Start earning on your own schedule. Sign up takes just a few
                      minutes.
                    </p>
                    <Button size="lg">Apply Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
