import "./App.css";
import "./styles/index.scss";

import Link from "@mui/joy/Link";
import Box from "@mui/joy/Box";
import Home from "./components/home";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/menu";
import Footer from "./components/footer";

// let count = 0;

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
