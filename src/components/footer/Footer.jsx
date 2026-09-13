const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-800 bg-(--surface) text-(--text)">
      <div className="mx-auto grid w-[90%] gap-8 py-8 grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Waypoint</h2>
          <p className="mt-2 text-sm text-gray-400">Good Food, Good Mood.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="/" className="transition hover:text-(--primary)">
              Home
            </a>
            <a href="/menu" className="transition hover:text-(--primary)">
              Menu
            </a>
            <a href="/about_us" className="transition hover:text-(--primary)">
              About Us
            </a>
            <a href="/contact_us" className="transition hover:text-(--primary)">
              Contact Us
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 font-semibold">Contact Us</h3>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>📍 Bhaktapur, Nepal</p>
            <p>📞 +977 98XXXXXXXX</p>
            <p>✉️ hello@waypoint.com</p>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="mb-3 font-semibold">Opening Hours</h3>

          <div className="text-sm text-gray-400">
            <p>Monday - Friday</p>
            <p>10:00 AM - 10:00 PM</p>

            <p className="mt-2">Saturday - Sunday</p>
            <p>9:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © 2026 Waypoint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
