import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import Sidebar from './components/Sidebar';
import Help from './components/Help';
import Articles from './components/Articles';
import Article from './components/Article';
import Books from './components/Books';
import People from './components/People';
import Error from './components/Error';
import data from './data.json';
import App from './components/App';
import Header from './components/Header';
import books from './book.json';
import houses from './people.json';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <div className="main-container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<App />} exact>
        </Route>
        <Route path="/articles" element={<Articles data={data}/>}>
        </Route>
        <Route exact path="/article/:slug" element={<Article/>}>
        </Route>
        <Route path="/people" element={<People houses={houses}/>}>
        </Route>
        <Route path="/books" element={<Books books={books}/>}>
        </Route>
        <Route path="/help" element={<Help/>}>
        </Route>
        <Route path="*" element={<Error/>}>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
