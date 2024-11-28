import { ThemeProvider } from "@mui/material";
import { theme } from "../src/components/utils/theme";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Kategori from "./pages/Kategori";
import { HeaderProvider } from "./components/SideNav/components/HeaderContext";
import Dashboard from "./pages/Dashboard";
import Film from "./pages/Film";
import Venue from "./pages/Venue";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <HeaderProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="kategori" element={<Kategori />} />
            <Route path="film" element={<Film />} />
            <Route path="venue" element={<Venue />} />
          </Route>
        </Routes>
      </HeaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
