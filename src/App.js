import "./App.css";
import { Default } from "./layout/default";
// import { TicketLists } from "./pages/ticket-listing/ticketlists.page";
import { Ticket } from "./pages/ticket/ticket.page";
// import { Dashboard } from "./pages/dashboard/dashboard.page";
// import { AddTicket } from "./pages/new-ticket/addticket.page";
// import { Entry } from './pages/entry/entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/>  */}
      <Default>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </Default>
    </div>
  );
}

export default App;
