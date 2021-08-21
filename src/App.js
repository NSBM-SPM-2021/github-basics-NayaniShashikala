import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";

function App() {
  return (
     <BrowserRouter>
      <div className="app" style = {{backgroundImage:'url(./public/Group 792.png)'}}>
        <Header />

        <Switch>

          <Route path = '/' exact>
            <Home />
          </Route>

        </Switch>
      </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;