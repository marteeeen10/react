import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo={'Hey Dude!'}/>
    </>
  );
}

export default App;
