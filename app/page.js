import HeroSection from '@/components/HeroSection';
import ScrollNarrative from '@/components/ScrollNarrative';
import FeaturedGallery from '@/components/FeaturedGallery';
import CustomerReviews from '@/components/CustomerReviews';
import Storytellers from '@/components/Storytellers';
import Inquiry from '@/components/Inquiry';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollNarrative />
      <FeaturedGallery />
      <CustomerReviews />
      <Storytellers />
      <Inquiry />
    </main>
  );
}
