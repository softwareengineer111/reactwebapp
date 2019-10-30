import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Copy from './Copy';
import Scrollbar from './Scrollbar';
import Responsive from './Responsive';
import Responsives from './Responsives';
import Personlist from './Personlist';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import ReactGA from 'react-ga';
import Bottomnavigation from './Bottomnavigation';
import AdSense from 'react-adsense';

function initizeAnalytics(){
	ReactGA.initialize("UA-151084271-1");
	ReactGA.pageview('/HomePage')
}



function App() {
	
	
	
	initizeAnalytics();
	
  return (
  
  
	<Router>
	
	
		<div className="App">
		
		
		
		  <Nav />

			
		
			  <Switch>
				  <Route path="/" exact component={About} />
				  <Route path="/about" component={About} />
				  <Route path="/shop" exact component={Shop} />
				  <Route path="/copy" exact component={Copy} />
				  <Route path="/scrollbar" exact component={Scrollbar} />
				  <Route path="/responsive" exact component={Responsive} />
				  <Route path="/responsives" exact component={Responsives} />
				  <Route path="/personlist" exact component={Personlist} />
				  <Route path="/bottomnavigation" exact component={Bottomnavigation} />
				  <Route path = "/shop/:id" component= {ItemDetail}/>
			  </Switch>
			  
			
	
			  
			<Bottomnavigation />
			
			
			
		</div>
	</Router>
  );
}

const Home = () => (
	<div>
		<h1>Home Page</h1>
	</div>

)

export default App;
