import React, { Component } from 'react';
import NavBar from './component/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Weekly from './component/Weekly';
import WeeklyBattle from './component/WeeklyBattle';
import Popular from './component/Popular';
import PopularBattle from './component/PopularBattle';
import Favorites from './component/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Style.css';
// import './Styles/Nav.css';
import Footer from './component/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <nav>
          <Link to='/'>Home</Link><br></br>
          <Link to='/weekly'>Weekly</Link><br></br>
          <Link to='/weekly-battle'>WeeklyBattle</Link><br></br>
          <Link to='/popular'>Popular</Link><br></br>
          <Link to='/popular-battle'>PopularBattle</Link><br></br>
          <Link to='/favorites'>Favorites</Link><br></br>

        </nav> */}
          <NavBar />


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weekly" component={Weekly} />
            <Route path="/weekly-battle" component={WeeklyBattle} />
            <Route path="/popular" component={Popular} />
            <Route path="/popular-battle" component={PopularBattle} />
            <Route path="/favorites" component={Favorites} />

          </Switch>

        </BrowserRouter>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;