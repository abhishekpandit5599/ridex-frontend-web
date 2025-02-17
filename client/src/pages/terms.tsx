import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose max-w-none"
      >
        <h1>Terms of Service</h1>
        
        <p>
          Welcome to RideX. By using our services, you agree to these terms.
          Please read them carefully.
        </p>

        <h2>1. Service Description</h2>
        <p>
          RideX provides a ride-hailing platform connecting riders with drivers.
          We do not provide transportation services directly.
        </p>

        <h2>2. User Accounts</h2>
        <ul>
          <li>You must be at least 18 years old to use RideX</li>
          <li>You must provide accurate and complete information</li>
          <li>You are responsible for maintaining account security</li>
          <li>You must not share your account credentials</li>
        </ul>

        <h2>3. User Conduct</h2>
        <p>
          Users must:
        </p>
        <ul>
          <li>Follow all applicable laws and regulations</li>
          <li>Treat drivers and other users with respect</li>
          <li>Not engage in fraudulent activities</li>
          <li>Not use the service for illegal purposes</li>
        </ul>

        <h2>4. Payments</h2>
        <ul>
          <li>Rates are set based on distance and demand</li>
          <li>Payment is processed through secure payment gateways</li>
          <li>Cancellation fees may apply</li>
        </ul>

        <h2>5. Referral Program</h2>
        <ul>
          <li>₹50 joining bonus for new users</li>
          <li>₹25 referral bonus for existing users</li>
          <li>First ride bonus as applicable</li>
          <li>5% cashback on rides</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>
          RideX is not liable for:
        </p>
        <ul>
          <li>Actions of third-party drivers</li>
          <li>Service interruptions</li>
          <li>Loss of data or profits</li>
        </ul>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update these terms. Continue using RideX after changes
          constitutes acceptance of new terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at legal@ridex.com
        </p>
      </motion.div>
    </div>
  );
}
