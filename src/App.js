import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './index.css'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);

  };

  return (
     <BrowserRouter>
      <div className="app" style = {{backgroundImage: 'url(/Group 792.png)' }}>
        <Header />
        <Switch>
          <Route path = '/' exact>
            <Home 
              name={name} 
              setName={setName}
              fetchQuestions = {fetchQuestions} />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;