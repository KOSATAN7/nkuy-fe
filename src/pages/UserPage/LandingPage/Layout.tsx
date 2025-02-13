import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";


const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />

      <main className="flex-grow mx-24 my-20">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;