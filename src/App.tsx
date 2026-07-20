import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import ScandinavianGarden from "./pages/ScandinavianGarden";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Awards from "./pages/Awards";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

/**
 * Shared route tree, used once per locale. Russian is un-prefixed
 * (matching lburo.ru: `/portfolio/`); English/German/Arabic each get
 * their own prefix (`/en/...`, `/de/...`, `/ar/...`).
 */
function makeRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolio/:slug" element={<ProjectDetail />} />
      <Route path="skandinavskiy-sad" element={<ScandinavianGarden />} />
      <Route path="services" element={<Services />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="nagrady" element={<Awards />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<Blog />} />
      {/* Legal pages — same component handles them all. */}
      <Route path="policy" element={<Legal />} />
      <Route path="agree" element={<Legal />} />
      <Route path="documents" element={<Legal />} />
      <Route path="op" element={<Legal />} />
      <Route path="policy-yandex" element={<Legal />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Russian (default) — no prefix */}
        <Route path="/*">{makeRoutes()}</Route>
        {/* English */}
        <Route path="/en/*">{makeRoutes()}</Route>
        {/* German (renders EN content as placeholder) */}
        <Route path="/de/*">{makeRoutes()}</Route>
        {/* Arabic (renders EN content as placeholder) */}
        <Route path="/ar/*">{makeRoutes()}</Route>
      </Route>
    </Routes>
  );
}
