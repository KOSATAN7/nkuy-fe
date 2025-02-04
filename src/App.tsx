import { ThemeProvider } from "@mui/material";
import { theme } from "../src/components/utils/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { HeaderProvider } from "./components/SideNav/components/HeaderContext";
import { FavoriteProvider } from "./pages/UserPage/Favorite/components/FavoriteContext";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import LandingPage from "./pages/UserPage/LandingPage";
import PanduanPage from "./pages/UserPage/Panduan";
import TentangPage from "./pages/UserPage/Tentang";
import KontakPage from "./pages/UserPage/Kontak";
import VenueList from "./pages/UserPage/VenueUser";
import DetailVenue from "./pages/UserPage/DetailVenue";
import FavoriteVenue from "./pages/UserPage/Favorite";
import UserProfile from "./pages/UserPage/Profile";
import PasswordPage from "./pages/UserPage/Profile/components/PasswordPage";
import MenuPage from "./pages/UserPage/Menu";
import PembayaranPage from "./pages/Pembayaran";
import BuktiPemesanPage from "./pages/UserPage/BuktiPemesan";
import PertandinganPage from "./pages/SuperAdmin/Pertandingan";
import CreatePertandingan from "./pages/SuperAdmin/Pertandingan/CreatePertandingan";
import VenuePage from "./pages/SuperAdmin/Venue";
import ReviewPage from "./pages/SuperAdmin/Review";
import KelolaPenggunaPage from "./pages/SuperAdmin/KelolaPengguna";
import UpdatePengguna from "./pages/SuperAdmin/KelolaPengguna/UpdatePengguna";
import DashboardSuperAdmin from "./pages/SuperAdmin/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import DashboardAdminVenue from "./pages/AdminVenue/Dashboard";
import CreateVenue from "./pages/SuperAdmin/Venue/CreateVenue";
import UpdatePertandingan from "./pages/SuperAdmin/Pertandingan/UpdatePertandingan";
import UpdateVenue from "./pages/SuperAdmin/Venue/UpdateVenue";
import ShowVenue from "./pages/SuperAdmin/Venue/DetailVenue";
import KelolaProfile from "./pages/AdminVenue/KelolaProfile";
import KelolaKonten from "./pages/AdminVenue/KelolaKonten";
import CreateKonten from "./pages/AdminVenue/KelolaKonten/CreateKonten";
import KelolaMenu from "./pages/AdminVenue/KelolaMenu";
import CreateMenu from "./pages/AdminVenue/KelolaMenu/CreateMenu";
import UpdateMenu from "./pages/AdminVenue/KelolaMenu/UpdateMenue";
import KelolaUlasan from "./pages/AdminVenue/KelolaUlasan";
import KelolaProvider from "./pages/AdminVenue/KelolaProvider";
import CreateProvider from "./pages/AdminVenue/KelolaProvider/CreateProvider";
import UpdateProvider from "./pages/AdminVenue/KelolaProvider/UpdateProvider";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HeaderProvider>
          <FavoriteProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/panduan" element={<PanduanPage />} />
              <Route path="/tentang" element={<TentangPage />} />
              <Route path="/kontak" element={<KontakPage />} />
              <Route path="/venuelist/:pertandinganId" element={<VenueList />} />
              <Route path="/favorite-venue" element={<FavoriteVenue />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/profile/password" element={<PasswordPage />} />
              <Route path="/detailvenue" element={<DetailVenue />} />
              <Route path="/pembayaran" element={<PembayaranPage />} />
              <Route path="/buktipemesan" element={<BuktiPemesanPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<Layout />}>z
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <DashboardSuperAdmin />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pertandingan"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <PertandinganPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pertandingan/create"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <CreatePertandingan />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pertandingan/update/:id"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <UpdatePertandingan />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/venue"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <VenuePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/venue/create"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <CreateVenue />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/venue/update/:id"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <UpdateVenue />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/review"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <ReviewPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pengguna"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <KelolaPenggunaPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pengguna/edit/:id"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <UpdatePengguna />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/venue/detail/:id"
                  element={
                    <ProtectedRoute requiredRole="super_admin">
                      <ShowVenue />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/dashboard"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <DashboardAdminVenue />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_profile"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <KelolaProfile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_konten"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <KelolaKonten />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_konten/create"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <CreateKonten />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_menu"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <KelolaMenu />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_menu/create"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <CreateMenu />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_menu/update/:id"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <UpdateMenu />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_ulasan"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <KelolaUlasan />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_provider"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <KelolaProvider />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_provider/create"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <CreateProvider />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin_venue/kelola_provider/update/:id"
                  element={
                    <ProtectedRoute requiredRole="admin_venue">
                      <UpdateProvider />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </FavoriteProvider>
        </HeaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
