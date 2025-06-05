import { Routes, Route } from "react-router-dom";
import Home from "./atomic/pages/home/Home";
import LayoutMain from "./atomic/sections/layouts/LayoutMain";

function App() {
  return (
    <LayoutMain>
      <div className="min-h-screen p-6 text-black transition-all bg-white dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </LayoutMain>
  );
}

export default App;
