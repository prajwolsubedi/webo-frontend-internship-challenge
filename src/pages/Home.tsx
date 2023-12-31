import Hero from "../components/templates/Hero/Hero";
import ClientGallery from "../components/templates/ClientGallery/index";
import PortfolioTracking from "../components/templates/PortfolioTracking/index";
import Features from "../components/templates/Features/index";
import ChooseUs from "../components/templates/ChooseUs1/index";
import ChooseUs2 from "../components/templates/ChooseUs2/index";
import ExtraFeature from "../components/templates/ExtraFeatures/index";
import Review from "../components/templates/Review/index";
import RecentBlogs from "../components/templates/RecentBlogs/index";
import FAQSection from "../components/templates/FAQSection/index";
import Footer from "../components/templates/Footer/index"
const Home = () => {
  return (
    <div>
      <Hero />
      <ClientGallery />
      <PortfolioTracking />
      <Features />
      <ChooseUs />
      <ChooseUs2 />
      <ExtraFeature />
      <Review />
      <RecentBlogs />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
