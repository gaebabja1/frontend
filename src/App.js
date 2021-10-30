import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ListStockComponent from './components/ListStockComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <div> 
      <Router>             
        <HeaderComponent/> 
          <div className="container">
            <Switch>       
              <Route path = "/" exact component = {ListStockComponent}></Route>
              <Route path = "/stock" component = {ListStockComponent}></Route>
            </Switch>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;