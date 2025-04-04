import Hero from '../components/home/Hero';
import WhoWeAreSection from '../components/sections/WhoWeAreSection';
import FAQSection from '../components/sections/FAQSection';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
};

export default Home;