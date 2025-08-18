import FeaturedSection from "@/components/featuresection";
import HeroSection from "@/components/herosection";
import ProductDesc from "@/components/productdesc";
import FeaturedProducts from "@/components/productsection";
import PromoSection from "@/components/promosection";
import ReviewSection from "@/components/reviewsection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <FeaturedSection />
      <ProductDesc />
      <ReviewSection />
      <PromoSection />
    </>
  );
}
