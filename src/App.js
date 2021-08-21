import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css'
import Header from "./components/Header/Header";


function App() {
  return (
     <BrowserRouter>
      <div className="app" style = {{backgroundImage:'url(./public/Group 792.png)'}}>
        <Header />
      </div>
     
      </BrowserRouter>
  );
}

export default App;