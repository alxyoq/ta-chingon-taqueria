const CHECKOUT_URL = "https://buy.stripe.com/3cI7sM4t9fsI2U43kedwc01?prefilled_promo_code=FIRST10FREE3&client_reference_id=ta_chingon_taqueria";

export function PurchaseWebsiteButton() {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Buy this website securely through Stripe"
      className="fixed right-4 bottom-5 z-[70] inline-flex min-h-16 items-center justify-center rounded-full border-2 border-[#f4ca36] bg-[#13542f] px-7 py-4 text-base font-bold tracking-wide text-white shadow-[0_12px_32px_rgba(19,84,47,0.35)] transition hover:-translate-y-0.5 hover:bg-[#0e4325] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4ca36] sm:right-6 sm:bottom-6"
    >
      Buy This Website
    </a>
  );
}
