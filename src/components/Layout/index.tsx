import { Outlet } from "react-router-dom";
import SideNav from "../SideNav";
import { useHeaderContext } from "../SideNav/components/HeaderContext";
import HeaderNavigation from "../SideNav/components/HeaderNavigation";

const Layout = () => {
  const { title, buttonLabel, buttonLink } = useHeaderContext();

  return (
    <main className="flex h-screen w-full gap-6 p-6">
      <SideNav />
      <section className="flex-1 flex flex-col gap-4">
        <HeaderNavigation
          title={title}
          buttonLabel={buttonLabel}
          buttonLink={buttonLink}
        />
        <div className="no-scrollbar h-full shadow-xl w-full overflow-y-scroll rounded-2xl bg-white p-3">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
