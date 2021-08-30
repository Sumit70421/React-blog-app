import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './home'
import page2 from './splitComps/page2';


function App() {
  return (
     <>
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path="/nav2" component={page2} exact/>
        <Route path="/" component={Home}/>
      </Switch>
      
      </BrowserRouter>
      
      </>
  );
}

export default App;
