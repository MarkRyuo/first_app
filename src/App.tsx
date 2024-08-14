import Message from './components/Message'
import HomeScreen from "./components/Home";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/navbar";
import Log from './components/log';

function App(){
  return <div>
    <Log/>
    <NavBar/>
    <HomeScreen/>
    <Message/>
    <ListGroup/>
    </div>
}

export default App ;