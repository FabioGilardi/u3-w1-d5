import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import CustomNavbar from "./components/CustomNavbar";
import TitleGrid from "./components/TitleGrid";
import FilmsRow from "./components/FilmsRow";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
        <TitleGrid />
      </header>
      <main className="bg-css">
        <FilmsRow saga="Transformers" />
        <FilmsRow saga="Harry Potter" />
        <FilmsRow saga="Fast and Furious" />
      </main>
      <CustomFooter />
    </>
  );
}

export default App;
