import './App.css';
import PosList from "./components/PosList";
import PrintersList from "./components/PrintersList";
import RedSystemsList from "./components/RedSystemsList";
import LocalesList from "./components/LocalesList";

function App() {
  return (
    <div>
      <LocalesList />
      <PosList />
      <PrintersList />
      <RedSystemsList />
    </div>
  );
}

export default App;
