import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "../pages/MainPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
