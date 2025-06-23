import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// registering plugin across the appilication
// scrollTrigger allow to animate thing base on scroll position
// split text will allow to break text into individual word for text animation
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-400">Hello GSAP!</h1>
    </div>
  );
};
export default App;
