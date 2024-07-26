import { BrowserRouter, Switch, Route } from "react-router-dom"
import RegisterVehicle from "./pages/RegisterExhibition"
import Home from "./pages/Home"
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/cadastro"} component={RegisterVehicle}/>
      </Switch>
    </ BrowserRouter>
  )
}

export default App