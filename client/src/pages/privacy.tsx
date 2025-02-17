import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose max-w-none"
      >
        <h1>Privacy Policy</h1>
        
        <p>
          At RideX, we take your privacy seriously. This Privacy Policy explains
          how we collect, use, and protect your personal information.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Personal identification information (Name, email address, phone number)</li>
          <li>Location data during rides</li>
          <li>Payment information</li>
          <li>Device information and usage data</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our ride-hailing services</li>
          <li>To process payments and maintain accounts</li>
          <li>To communicate with you about our services</li>
          <li>To ensure safety and security</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell your personal information. We may share your information
          with:
        </p>
        <ul>
          <li>Drivers to facilitate rides</li>
          <li>Payment processors for transactions</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, or destruction.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. Contact us to exercise these rights.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us at
          privacy@ridex.com
        </p>
      </motion.div>
    </div>
  );
}
