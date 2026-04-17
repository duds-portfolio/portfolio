import { Linkedin, Mail } from "lucide-react";

const navigation = [
  {
    title: "Services",
    links: [
      { name: "Services", href: "/#services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Approach", href: "/#approach" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Articles", href: "/articles" },
      { name: "Tags", href: "/tags" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Colophon", href: "/colophon" },
      { name: "Terms of service", href: "/terms" },
      { name: "Privacy policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/dalerogers", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@dalerogers.com.au", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="bg-primary">
        {/* Navigation Section */}
        <nav className="border-primary-foreground/20 mx-auto max-w-[95vw] border-b py-6">
          <div className="container flex flex-wrap gap-x-16 gap-y-12 md:gap-x-24 md:gap-y-16 lg:gap-x-32 lg:gap-y-20">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 font-medium lg:text-lg">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="hover:text-primary-foreground/80 text-primary-foreground/70 transition-colors lg:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="container py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-medium text-sm md:text-base">
              © {new Date().getFullYear()} Dale Rogers
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary-foreground/80 text-primary-foreground/70 transition-colors"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
