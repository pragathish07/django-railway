import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-300 flex flex-col">
        <Navbar />
        <section className="flex-1 flex items-center justify-center p-6">
          <Outlet /> {/* This will render different pages inside the dashboard */}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
