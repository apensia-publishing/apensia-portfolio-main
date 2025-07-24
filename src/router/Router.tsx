import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
