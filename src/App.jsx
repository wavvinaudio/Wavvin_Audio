import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Identity from "./components/Identity/Identity";
import Packs from "./components/Packs/Packs";
import Media from "./components/Media/Media";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Identity />
        <Packs />
        <Media />
      </main>

      <Footer />
    </>
  );
}

export default App;

