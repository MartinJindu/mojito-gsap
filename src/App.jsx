import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// registering plugin across the appilication
// scrollTrigger allow to animate thing base on scroll position
// split text will allow to break text into individual word for text animation
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* test hero leaf animation */}
      <div className="h-dvh bg-black"></div>
    </main>
  );
};
export default App;
