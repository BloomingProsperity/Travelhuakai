import { BrowserRouter, Route, Routes } from "react-router";
import LanguageProvider from "./store/LanguageProvider";
import AtlasProvider from "./store/AtlasProvider";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import SharePage from "./pages/SharePage";
import AskPage from "./pages/AskPage";
import SourcesPage from "./pages/SourcesPage";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AtlasProvider>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city/:cityId" element={<CityPage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/ask" element={<AskPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <SiteFooter />
        </AtlasProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
