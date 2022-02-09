import {MenuComponent} from './components/menu';
import data from "./components/menu/config/menu.json";
// import {data} from "./components/menu/config/menu";
import favoritos from "./components/menu/config/favoritos.json";

function App() {

  return (
  <MenuComponent data={data} favorite={favoritos}/>
  );
}

export default App;
