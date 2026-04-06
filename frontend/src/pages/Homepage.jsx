import HomePageSearchBar from "../components/HomePageSearchBar";
import HomePageHeroSection from "../components/HomePageHeroSection";
import HomePagePopularDestination from "../components/HomePagePopularDestination";
import HomePageFeaturedHomes from "../components/HomePageFeaturedHomes";
import HomePageFooter from "../components/HomePageFooter";


function Homepage() {
  return (
    <div className="bg-[#d6d1c3] text-white min-h-screen">
      <HomePageHeroSection />
      <HomePageSearchBar />
      <HomePagePopularDestination />
      <HomePageFeaturedHomes />
      <HomePageFooter />
    </div>
  );
}

export default Homepage;
