import type { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/ui/PageHero";
import { galleryContent } from "@/content/gallery";
import { createPageMetadata } from "@/lib/metadata";

import GalleryClient from "./GalleryClient";

export const metadata: Metadata = createPageMetadata(
  "Gallery",
  "See Ta Chingón tacos, birria, tortas, loaded favorites, food-truck artwork, and catering dishes.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Fresh from the feed"
        title={galleryContent.title}
        intro={galleryContent.intro}
      />
      <div className="paper-texture py-16 lg:py-20">
        <div className="site-container">
          <GalleryClient />
        </div>
      </div>
    </Layout>
  );
}
