import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";


const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <HeaderNav />
  
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;