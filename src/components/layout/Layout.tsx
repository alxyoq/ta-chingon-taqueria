import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MobileActionBar from "./MobileActionBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="paper-texture flex min-h-screen flex-col pb-16 lg:pb-0">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
