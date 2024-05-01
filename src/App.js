import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegisterTemplate from "./components/RegisterTemplate";
import LoginTemplate from "./components/LoginTemplate";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterTemplate />} />
          <Route path="/login" element={<LoginTemplate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
