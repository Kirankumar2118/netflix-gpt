import { Globe } from "lucide-react";

const footerLinks = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-20 lg:px-40 py-16">
      {/* Email Section */}
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-white text-lg mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 h-14 px-4 rounded border border-gray-600 bg-[#111] text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
          />

          <button className="h-14 px-8 bg-[#E50914] hover:bg-[#C11119] rounded text-white text-xl font-semibold transition">
            Get Started &gt;
          </button>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-20">
        <p className="mb-10">
          Questions? Call{" "}
          <span className="underline cursor-pointer">000-800-919-1743</span>
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5">
          {footerLinks.map((link) => (
            <p
              key={link}
              className="underline cursor-pointer hover:text-white transition"
            >
              {link}
            </p>
          ))}
        </div>

        {/* Language */}
        <div className="mt-10">
          <button className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded hover:border-white">
            <Globe size={18} />
            English
          </button>
        </div>

        {/* Country */}
        <p className="mt-8">Netflix India</p>

        {/* reCAPTCHA */}
        <p className="mt-10 text-sm text-gray-500 max-w-xl">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
