import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
  Shield,
  Clock,
} from "lucide-react";

const faqs = [
  {
    question: "How do I book a ride?",
    answer:
      "Download the RideX app, sign up, enter your pickup and drop-off locations, choose your ride type, and confirm your booking. It's that simple!",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, UPI, and cash payments. You can manage your payment options in the app.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "Share your unique referral code with friends. When they sign up and complete their first ride, you'll receive ₹25 in your wallet, and they'll get ₹50 as a joining bonus.",
  },
  {
    question: "What if I leave something in the car?",
    answer:
      "Contact our support team immediately through the app or helpline. We'll help coordinate with the driver to retrieve your belongings.",
  },
];

export default function Help() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">How can we help you?</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions or get in touch with our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "24/7 support line",
                contact: "+91 1800-123-4567",
                image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Get a response within 24 hours",
                contact: "help@ridex.com",
                image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Instant support via chat",
                contact: "Available in app",
                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="font-medium text-primary">{option.contact}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
