import Hero from "../components/templates/Hero";
import ClientGallery from "../components/templates/ClientGallery/index";
import PortfolioTracking from "../components/templates/PortfolioTracking/index"
import Features from "../components/templates/Features/index"
import ChooseUs from "../components/templates/ChooseUs1/index"
import ChooseUs2 from "../components/templates/ChooseUs2/index"
const Home = () => {
  return (
    <div>
      <Hero />
      <ClientGallery />
      <PortfolioTracking />
      <Features />
      <ChooseUs />
      <ChooseUs2 />
    </div>
  );
};

export default Home;
