import CalendarComponent from "./components/Calendar";
import Favorites from "./components/Favorites";
import ToDo from "./components/ToDo"


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <CalendarComponent />
      <Favorites />
      <ToDo />
    </div>
  );
}

export default App;
