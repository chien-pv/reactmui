import "./App.css";
import "./styles/index.scss";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/menu";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ResponsiveAppBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </>
  );
}
