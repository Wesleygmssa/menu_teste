import {MenuComponent} from './components/menu';
import data from "./config/menu.json";
import favoritos from "../src/config/favoritos.json";

function App() {

  return (
  <MenuComponent data={data} favorite={favoritos}/>
  );
}

export default App;
