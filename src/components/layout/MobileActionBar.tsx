import { MapPin, Phone, ShoppingBag } from "lucide-react";

import { directionsUrl, siteConfig } from "@/config/site";

export default function MobileActionBar() {
  const actions = [
    {
      label: "Call",
      href: `tel:${siteConfig.contact.phoneHref}`,
      icon: Phone,
      external: false,
    },
    {
      label: "Directions",
      href: directionsUrl,
      icon: MapPin,
      external: true,
    },
    {
      label: "Order",
      href: siteConfig.ordering.url,
      icon: ShoppingBag,
      external: true,
    },
  ];

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-black/15 bg-[var(--color-paper)] shadow-[0_-8px_25px_rgb(21_36_25_/_0.12)] lg:hidden"
      aria-label="Quick actions"
    >
      {actions.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="flex min-h-16 flex-col items-center justify-center gap-1 border-r border-black/10 text-[11px] font-extrabold uppercase tracking-wide text-brand-secondary last:border-r-0 hover:bg-brand-accent/25"
        >
          <Icon size={19} aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  );
}
