import { useEffect } from "react";
import Aos from "aos";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>Main</main>
      <Footer />
    </>
  );
}

export default App;
