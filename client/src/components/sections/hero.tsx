import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Reliable Ride,{" "}
              <span className="text-primary">Just a Tap Away</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience safe, comfortable rides with RideX. Join thousands of satisfied
              customers who trust us for their daily commute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Download App <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" href="/drive">
                Become a Driver
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1590674899484-d5640e854abe"
              alt="RideX App in Action"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}