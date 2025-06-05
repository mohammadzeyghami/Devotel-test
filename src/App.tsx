import { Routes, Route } from "react-router-dom";
import LayoutMain from "./atomic/sections/layouts/LayoutMain";
import FormPage from "./atomic/pages/form/Form";
import HomePage from "./atomic/pages/home/Home";

function App() {
  return (
    <LayoutMain>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </LayoutMain>
  );
}

export default App;
