import "./App.css";
import { Default } from "./layout/default";
// import { Dashboard } from "./pages/dashboard/dashboard.page";
import { AddTicket } from "./pages/new-ticket/addticket.page";
// import { Entry } from './pages/entry/entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/>  */}
      <Default>
        {/* <Dashboard /> */}
        <AddTicket />
      </Default>
    </div>
  );
}

export default App;
