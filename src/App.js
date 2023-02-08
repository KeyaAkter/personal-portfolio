import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import CustomCursor from "./components/CustomCursor";
import { useCustomCursor } from "./hooks/useCustomCursor";

const App = () => {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  // smooth scroling
  useSmoothScroll();

  // custom cursor
  useCustomCursor(innerCursorRef, outerCursorRef);

  return (
    <div className="app">
      <ToastContainer />
      <div className="noise"></div>
      <CustomCursor
        innerCursorRef={innerCursorRef}
        outerCursorRef={outerCursorRef}
      />
      <Navbar />
      <Socials />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navbar footerNav />
      <Footer />
    </div>
  );
};

export default App;
