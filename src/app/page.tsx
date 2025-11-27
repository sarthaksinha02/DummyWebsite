

import Header from '../components/layout/Header';
import Hero from '@/components/sections/Hero';
import SectionTwo from '@/components/sections/SectionTwo';
import BulletImage from '@/components/sections/BulletImage';
import DarkHero from '@/components/sections/DarkHero';
import Brands from '@/components/sections/Brands';
import CardsGrid from '@/components/sections/CardsGrid';
import RequestQuote from '@/components/sections/RequestQuote';
import AppDownload from '@/components/sections/AppDownload';
import Gallery from '@/components/sections/Gallery';
import YellowFrame from '@/components/sections/YellowFrame';
import Testimonials from '@/components/sections/Testimonials';
import BlueTestimonials from '@/components/sections/BlueTestimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import FullImage from '@/components/sections/fullimage';
import PinnedCardSection from '@/components/sections/PinnedCardSection';
import BikerStory from '@/components/sections/BikerStory';

export default function age() {
  return (
    <div 
    className='min-h-screen min-w-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-500'>
      <Header />
      <Hero />
      <BulletImage />
      <SectionTwo />
      <DarkHero />
      <Brands />
      <CardsGrid />
      <FullImage />
      <RequestQuote />
      <AppDownload />
      <Gallery />
      <YellowFrame />
      <BlueTestimonials />
      <Testimonials />
      <PinnedCardSection />
      <BikerStory />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
