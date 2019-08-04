import React from 'react';
import './App.css';
import {Route,Switch} from  'react-router-dom'
import Reward from './views/Rewards'
import Profile from './views/Profile'
import LuckyDraw from './views/LuckyDraw'
import CollectPoint from './views/CollectPoint'
import Navbar from './Components/Navbar'
import {Container} from 'mdbreact'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
     <header> 
        <Navbar></Navbar>
     </header>
      <Container>
          <section className ="content">
            <Switch>
            <Route path="/reward" component={Reward} />
            <Route path="/profile" component={Profile} />
            <Route path="/luckydraw" component={LuckyDraw} />
            <Route path="/collectpoint" component={CollectPoint} />
            </Switch>
          </section>
      </Container>
     
       <Footer></Footer>

    </div>
  );
}

export default App;
