import { ThemeProvider } from "@mui/material";
import { theme } from "../src/components/utils/theme";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Kategori from "./pages/Kategori";
import { HeaderProvider } from "./components/SideNav/components/HeaderContext";
import Dashboard from "./pages/Dashboard";
import Film from "./pages/Film";
import Venue from "./pages/Venue";
import CreateKategori from "./pages/Kategori/CreateKategori";
import UpdateKategori from "./pages/Kategori/UpdateKategori";
import CreateFilm from "./pages/Film/CreateFilm";
import CreateVenue from "./pages/Venue/CreateVenue";
import UpdateFilm from "./pages/Film/UpdateFilm";
import SubKategori from "./pages/SubKategori";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import LandingPage from "./pages/UserPage/LandingPage";
import CreateSubKategori from "./pages/SubKategori/CreateSubKategori";
import PanduanPage from "./pages/UserPage/Panduan";
import KontakPage from "./pages/UserPage/Kontak";
import VenueList from "./pages/UserPage/VenueUser";
import ManageUser from "./pages/ManageUser";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HeaderProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/panduan" element={<PanduanPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/venuelist" element={<VenueList />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="kategori" element={<Kategori />} />
              <Route path="kategori/create" element={<CreateKategori />} />
              <Route path="kategori/update/:id" element={<UpdateKategori />} />
              <Route path="subkategori" element={<SubKategori />} />
              <Route path="subkategori/create" element={<CreateSubKategori />} />
              <Route path="film" element={<Film />} />
              <Route path="film/create" element={<CreateFilm />} />
              <Route path="film/update/:id" element={<UpdateFilm />} />
              <Route path="venue" element={<Venue />} />
              <Route path="venue/create" element={<CreateVenue />} />
              <Route path="manageuser" element={<ManageUser />} />
            </Route>
          </Routes>
        </HeaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
