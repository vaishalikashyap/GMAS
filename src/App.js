import "./App.css";
import FilterPanel from './components/FilterPanel'
import { FilteringTable } from "./components/FilteringTable";

function App() {
  return (
    <div>
    <div>
      <FilterPanel />
    </div>
    <div className="App">
      <FilteringTable />
    </div>
    </div>
  );
}

export default App;
