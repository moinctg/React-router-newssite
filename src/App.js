
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import API from './Components/API/API';
import NewsDetails from './Components/NewsDetails/NewsDetails';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home> 
          </Route>
          <Route exact path="/home">
          <Home></Home> 
          </Route>
          <Route exact path="/about">
          <About></About>
          </Route>
          <Route exact path="/contact">
          <Contact></Contact>
          </Route>
          <Route exact path="/api">
          <API></API>
          
          </Route>
          <Route exact path="/news/:id">
          <NewsDetails></NewsDetails>
          
          </Route>
          <Route exact path="*">
          <NotFound></NotFound>
          
          </Route>

        </Switch>
      </Router>
    
      
      <Footer></Footer>
    </div>
  );
}

export default App;
