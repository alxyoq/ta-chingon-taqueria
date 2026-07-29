"use client";

import { Facebook, Instagram, Menu, Phone, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        !menuRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const socialLinks = [
    {
      label: "Instagram",
      href: siteConfig.social.instagramUrl,
      icon: Instagram,
    },
    {
      label: "Facebook",
      href: siteConfig.social.facebookUrl,
      icon: Facebook,
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-brand-secondary text-white">
        <div className="site-container flex min-h-9 items-center justify-center gap-3 py-1.5 text-center text-[11px] font-bold uppercase tracking-[0.08em] sm:text-xs lg:justify-between">
          <p>{siteConfig.announcement.text}</p>
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={siteConfig.announcement.linkUrl}
              target="_blank"
              rel="noreferrer"
              className="text-brand-accent underline decoration-brand-accent/50 underline-offset-4 hover:text-white"
            >
              {siteConfig.announcement.linkLabel}
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="inline-flex items-center gap-1.5 hover:text-brand-accent"
            >
              <Phone size={13} aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`relative border-b border-black/10 bg-[var(--color-paper)]/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "h-[4.25rem] shadow-lg" : "h-[4.9rem]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-3 sm:px-5">
          <Link
            href="/"
            className="relative block w-[142px] sm:w-[170px]"
            aria-label={`${siteConfig.businessName} home`}
          >
            <Image
              src={siteConfig.assets.logo}
              alt={`${siteConfig.businessName} logo`}
              width={440}
              height={230}
              priority
              className="h-auto w-full mix-blend-multiply"
            />
          </Link>

          <nav
            className="hidden items-center gap-4 text-[13px] font-bold uppercase tracking-[0.06em] text-brand-ink xl:flex"
            aria-label="Primary navigation"
          >
            {siteConfig.navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="border-b-2 border-transparent py-2 transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                {label}
              </Link>
            ))}
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary ml-1 min-h-10 px-4 py-2 text-[11px]"
            >
              <ShoppingBag size={15} className="mr-1.5" aria-hidden="true" />
              {siteConfig.ordering.label}
            </a>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-brand-secondary transition-colors hover:text-brand-primary"
              >
                <Icon size={18} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="rounded-full bg-brand-accent p-2.5 text-brand-ink sm:hidden"
              aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
            >
              <Phone size={20} />
            </a>
            <button
              type="button"
              ref={buttonRef}
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full border-2 border-brand-secondary p-2 text-brand-secondary"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-navigation"
            ref={menuRef}
            className="animate-fadeIn absolute left-0 top-full z-[60] max-h-[calc(100vh-7rem)] w-full overflow-y-auto border-t border-black/10 bg-[var(--color-paper)] px-4 pb-6 pt-3 text-base text-brand-ink shadow-2xl xl:hidden"
          >
            <nav className="space-y-1" aria-label="Mobile navigation">
              {siteConfig.navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block w-full rounded-xl px-3 py-3 font-extrabold uppercase tracking-wide hover:bg-brand-accent/20"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <a
              href={siteConfig.ordering.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4 flex w-full"
              onClick={() => setMenuOpen(false)}
            >
              <ShoppingBag size={17} className="mr-2" aria-hidden="true" />
              {siteConfig.ordering.label}
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="btn-outline mt-4 flex w-full"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={17} className="mr-2" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <div className="flex items-center justify-center gap-6 pt-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-brand-secondary hover:text-brand-primary"
                >
                  <Icon size={23} />
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
}
