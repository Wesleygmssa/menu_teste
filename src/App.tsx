import {MenuCoponent} from './components/menu';
import Menu from "./config/menu.json";
import Favoritos from "../src/config/favoritos.json";

function App() {

  return (
  <MenuCoponent data={Menu} favorite={Favoritos}/>
  );
}

export default App;
