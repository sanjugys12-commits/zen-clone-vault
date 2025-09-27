import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyBenefits from './components/KeyBenefits';
import AnimatedFlowSection from './components/AnimatedFlowSection';
import CTASection from './components/CTASection';
import PricingPage from './components/PricingPage';
import HowItWorksPage from './components/HowItWorksPage';
import BookDemoPage from './components/BookDemoPage';
import { Toaster } from './components/ui/toaster';

const HomePage = () => (
  <>
    <Hero />
    <KeyBenefits />
    <AnimatedFlowSection />
    <CTASection />
    
    {/* Placeholder sections for future development */}




  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;