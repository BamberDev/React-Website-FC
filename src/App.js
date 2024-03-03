import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import AboutUs from "./components/AboutUs/AboutUs";
import Offer from "./components/Offer/Offer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <MainSection />
        <AboutUs />
        <Offer />
      </main>
      <Footer />
    </>
  );
}

export default App;
