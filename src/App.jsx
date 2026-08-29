import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import Identity from "./Components/Identity/Identity";
import Packs from "./Components/Packs/Packs";
import Media from "./Components/Media/Media";
import Footer from "./Components/Footer/Footer";

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

