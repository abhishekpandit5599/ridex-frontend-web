import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon } from "lucide-react";

export default function Download() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1495695911455-19054a55f92f"
              alt="Download App"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Download the RideX App
            </h2>
            <p className="text-gray-600 mb-8">
              Get the best ride-hailing experience with our mobile app. Available
              for iOS and Android devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <AppleIcon className="h-5 w-5" />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <PlayIcon className="h-5 w-5" />
                Play Store
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
