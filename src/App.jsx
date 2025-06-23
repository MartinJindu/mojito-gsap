import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

// registering plugin across the appilication
// scrollTrigger allow to animate thing base on scroll position
// split text will allow to break text into individual word for text animation
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="">
      <Navbar />
    </main>
  );
};
export default App;
