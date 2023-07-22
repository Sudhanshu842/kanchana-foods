import { useEffect, useState } from "react";
import gif1 from "../src/assets/loading.gif"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { About } from "./components/About";
import Topbar from "./components/Topbar";
import Products from "./components/Products";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";


function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1600);
  }, [])

  return (
    <>
      <div className={(loading ? 'block' : 'hidden')}>
        <div className="flex fixed justify-center items-center h-screen bg-white w-full bg-fixed">
          <img src={gif1} alt="" className=""></img>
        </div>
      </div>
      <div className={(loading ? 'opacity-0 ' : 'block')}>
        <div className="h-full scrollbar scrollbar-thumb-blue-700 scrollbar-track-gray-100"></div>
        <Topbar />
        <Navbar />
        <Home />
        <Products/>
        <About />
        <Contact/>
        {/* <Footer/> */}
        
      </div>
    </>
  );
}

export default App;
