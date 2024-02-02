import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import CustomNavbar from "./components/CustomNavbar";
import TitleGrid from "./components/TitleGrid";
import FilmsRow from "./components/FilmsRow";
import CustomFooter from "./components/CustomFooter";
import UserMain from "./components/UserMain";

function App() {
  return (
    <>
      {/* ----------------------------------- Inizio Homepage --------------------------------------------------------- */}
      {/* <header>
        <CustomNavbar />
        <TitleGrid />
      </header>
      <main className="bg-css">
        <FilmsRow saga="Transformers" />
        <FilmsRow saga="Harry Potter" />
        <FilmsRow saga="Fast and Furious" />
      </main>
      <CustomFooter /> */}
      {/* ----------------------------------- Fine Homepage --------------------------------------------------------- */}

      {/* ----------------------------------- Inizio AccounPage --------------------------------------------------------- */}
      <header>
        <CustomNavbar />
      </header>
      <main className="bg-css">
        <UserMain />
      </main>
      <CustomFooter />
      {/* ----------------------------------- Fine AccounPage --------------------------------------------------------- */}
    </>
  );
}

export default App;
