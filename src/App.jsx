import { Footer, Header, ScrollToTop } from "./components";
import { Outlet } from "react-router-dom";

function App() {
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
