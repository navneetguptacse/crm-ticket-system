import "./App.css";
import { Default } from "./layout/default";
import { Dashboard } from "./pages/dashboard/dashboard.page";
// import { Entry } from './pages/entry/entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <Default>
        <Dashboard />
      </Default>
    </div>
  );
}

export default App;
