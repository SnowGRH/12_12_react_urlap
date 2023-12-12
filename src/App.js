
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Kezdolap from "./Pages/Kezdolap";
import Adatok from "./Pages/Adatok";
import Urlap from "./Pages/Urlap";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Kezdolap />} />
        <Route path="urlap" element={<Urlap />} />
        <Route path="adatok" element={<Adatok />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
