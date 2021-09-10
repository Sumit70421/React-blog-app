import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Blog from './blog';
import Home from './home'
import RenderHead from './renderHeader';
import page2 from './splitComps/page2';
import page3 from './splitComps/page3';
import page4 from './splitComps/page4';
import page5 from './splitComps/page5';
import page6 from './splitComps/page6';


function App() {
  return (
     <>
      
      <BrowserRouter>
      <Route path="/" component={RenderHead} />
      <Switch>
        <Route path="/nav2" component={page2} />
        <Route path="/nav3" component={page3} />
        <Route path="/nav4" component={page4} />
        <Route path="/nav5" component={page5} />
        <Route path="/nav6" component={page6} />
        <Route path="/blog" component={Blog} / >
        <Route path="/" component={Home}/>
      </Switch>
      
      </BrowserRouter>
      
      </>
  );
}

export default App;
