import MeshBackground from '@/components/MeshBackground';
import Ticker from '@/components/Ticker';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsGrid from '@/components/NewsGrid';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <div className="relative z-50">
        <Ticker />
        <Header />
      </div>
      <main>
        <Hero />
        <NewsGrid />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
