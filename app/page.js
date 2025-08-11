import Hero from '@/components/hero';
import PartnerListComponent from '@/components/partner';
import TestimonialDemo from '@/components/review';
import JenjangSekolah from '@/components/jenjang';
import TentangKami from '@/components/about';
import CTA from '@/components/bottomCTA';
import Footer from '@/components/footer';

export default function Main () {
  return (
    <>
    <Hero />
    <PartnerListComponent />
    <TestimonialDemo />
    <JenjangSekolah />
    <TentangKami />
    <CTA />
    <Footer />
    </>
  )
}