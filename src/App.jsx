import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Screen from "./pages/mainScreen/Screen";
import Gallery from "./pages/Gallery/Gallery";
import Hug from "./pages/Hug/Hug";
import BGMusic from "./components/BGMusic/BGMusic";
import { useState } from "react";

function App() {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Screen setPlayMusic={setPlayMusic} />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="hug" element={<Hug setPlayMusic={setPlayMusic} />} />
        </Route>
      </Routes>
      <BGMusic play={playMusic} />
    </BrowserRouter>
  );
}

export default App;
