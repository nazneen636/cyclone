import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="heading1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
