// import logo from "./logo.svg";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="m-4 text-center text-xl font-serif ">
        Timeless Taste, Classy Appeal
      </h1>
      <hr />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
