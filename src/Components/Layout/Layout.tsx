import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen gradiant pt-5">
        <Topbar />
        <Navbar />
        <Outlet></Outlet>
      </div>
    </>
  );
}
