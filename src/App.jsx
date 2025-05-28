import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Screen from "./pages/mainScreen/Screen";
import Gallery from "./pages/Gallery/Gallery";
import Hug from "./pages/Hug/Hug";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Screen />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="hug" element={<Hug />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
