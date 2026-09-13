import { Footer, Header, ScrollToTop } from "./components";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <ScrollToTop />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
