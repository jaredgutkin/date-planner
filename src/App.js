import CalendarComponent from "./components/Calendar";
import Favorites from "./components/Favorites";
import ListNotes from "./utils/ListNotes";
import ToDo from "./components/ToDo"
import EditNotes from "./utils/EditNotes";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ListNotes />
      <EditNotes />
      <CalendarComponent />
      <Favorites />
      <ToDo />
    </div>
  );
}

export default App;
