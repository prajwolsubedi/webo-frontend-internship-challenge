import Hero from "../components/templates/Hero";
import ClientGallery from "../components/templates/ClientGallery/index";
import PortfolioTracking from "../components/templates/PortfolioTracking/index"
import Features from "../components/templates/Features/index"
import ChooseUs from "../components/templates/ChooseUs/index"
const Home = () => {
  return (
    <div>
      <Hero />
      <ClientGallery />
      <PortfolioTracking />
      <Features />
      <ChooseUs />
    </div>
  );
};

export default Home;
