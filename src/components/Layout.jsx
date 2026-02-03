import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";

export default function Layout() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <AnnouncementBar />
      <Header />
      <main style={{ flex: 1, background: "#fff" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
