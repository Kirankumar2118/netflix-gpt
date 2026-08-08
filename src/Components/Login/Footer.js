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
    <footer className="bg-black border-t border-zinc-800 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-16">
        {/* Contact */}
        <p className="mb-8 text-[15px]">
          Questions? Call{" "}
          <a
            href="tel:0008009191743"
            className="underline hover:text-white transition-colors"
          >
            000-800-919-1743
          </a>
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm md:grid-cols-4">
          {footerLinks.map((link) => (
            <button
              key={link}
              className="w-fit text-left underline decoration-zinc-500 underline-offset-2 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Language */}
        <div className="mt-10">
          <button className="flex items-center gap-2 rounded border border-zinc-600 bg-black px-4 py-2 text-sm text-white transition hover:border-white">
            <Globe size={18} />
            <span>English</span>
          </button>
        </div>

        {/* Country */}
        <p className="mt-6 text-sm text-zinc-500">Netflix India</p>

        {/* reCAPTCHA */}
        <p className="mt-6 max-w-2xl text-xs leading-6 text-zinc-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <button className="ml-1 text-blue-500 hover:underline">
            Learn more.
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
