import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DoctorBio from '@/components/DoctorBio';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Office from '@/components/Office';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DoctorBio />
        <About />
        <Services />
        <Approach />
        <Office />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
