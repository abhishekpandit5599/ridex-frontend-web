import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">About RideX</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-gray-600 mb-6">
              RideX is a leading ride-hailing service committed to providing safe,
              reliable, and affordable transportation solutions. Founded with the
              vision of transforming urban mobility, we've grown to become one of
              the most trusted names in the industry.
            </p>
            <p className="text-gray-600">
              Our platform connects thousands of riders with verified drivers,
              making every journey comfortable and secure. We believe in
              leveraging technology to create seamless transportation experiences
              while maintaining the highest standards of safety and service.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103"
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, reliable, and safe transportation solutions
                that enhance urban mobility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading ride-hailing platform known for innovation,
                reliability, and customer satisfaction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-2">Our Values</h3>
              <p className="text-gray-600">
                Safety, reliability, transparency, and customer-first approach
                guide everything we do.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
