import { ThemeProvider } from "@mui/material";
import { theme } from "../src/components/utils/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { HeaderProvider } from "./components/SideNav/components/HeaderContext";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import LandingPage from "./pages/UserPage/LandingPage";
import PanduanPage from "./pages/UserPage/Panduan";
import TentangPage from "./pages/UserPage/Tentang";
import KontakPage from "./pages/UserPage/Kontak";
import VenueList from "./pages/UserPage/VenueUser";
import DetailVenue from "./pages/DetailVenue";
import MenuPage from "./pages/Menu";
import PembayaranPage from "./pages/Pembayaran";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HeaderProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/panduan" element={<PanduanPage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/venuelist" element={<VenueList />} />
            <Route path="/detailvenue" element={<DetailVenue />} />
            <Route path="/pembayaran" element={<PembayaranPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Layout />}>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute requiredRole="super_admin">
                    <DashboardSuperAdmin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="pertandingan"
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
                path="/admin_venue/dashboard"
                element={
                  <ProtectedRoute requiredRole="admin_venue">
                    <DashboardAdminVenue />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </HeaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
