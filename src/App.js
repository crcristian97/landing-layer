import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import ContactForm from './components/Contact-form';
import Footer from './components/Footer';
import StateHome from './components/StateHome';

export default function App() {
  return (
    <div className="min-h-screen ">
      <Header />
      <HeroSection />
      <PracticeAreas />
      <Testimonials />
      <StateHome />
      <ContactForm />
      <Footer />
    </div>
  );
}
