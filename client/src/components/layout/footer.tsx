import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl text-primary mb-4">RideX</h3>
            <p className="text-gray-600">
              Your trusted ride-hailing service for safe and reliable transportation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <a className="text-gray-600 hover:text-primary">About Us</a>
              </Link>
              <Link href="/terms">
                <a className="text-gray-600 hover:text-primary">Terms of Service</a>
              </Link>
              <Link href="/privacy">
                <a className="text-gray-600 hover:text-primary">Privacy Policy</a>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Join Us</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-600 hover:text-primary">
                Drive with RideX
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Ride with RideX
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-600 hover:text-primary">
                Help Center
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} RideX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
