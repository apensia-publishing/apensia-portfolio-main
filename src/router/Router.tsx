import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "../pages/MainPage";
import ProjectDetailLayout from "../components/ProjectDetailLayout";
import KnowerProjectPage from "../pages/projects/Knower";
import FleamProjectPage from "../pages/projects/Fleam";
import YurekanProjectPage from "../pages/projects/Yurekan";
import GoodMyTalkProjectPage from "../pages/projects/Goodmytalk";
import GoldenTripProjectPage from "../pages/projects/Goldentrip";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route element={<ProjectDetailLayout />}>
          <Route path="knower" element={<KnowerProjectPage />} />
          <Route path="fleam" element={<FleamProjectPage />} />
          <Route path="yurekan" element={<YurekanProjectPage />} />
          <Route path="goodmytalk" element={<GoodMyTalkProjectPage />} />
          <Route path="goldentrip" element={<GoldenTripProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
