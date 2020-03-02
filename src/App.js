import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import Messages from './components/Pages/messages/massages';
import Music from './components/Pages/music/music';
import Settings from './components/Pages/settings/settings';
import News from './components/Pages/news/news';
import { BrowserRouter, Route } from 'react-router-dom';


function App({ state, dispatch }) {
  return (
    <BrowserRouter>
      <div className="App app-wrapper">
        <Header />
        <Navbar state={state.sidebar} />
        <div className="content-wrapper">
          <Route exact path="/"
            render={() => (
              <Profile
                state={state.profilePage}
                dispatch={dispatch}
              />
            )}
          />
          <Route path="/messages"
            render={() => (
              <Messages
                state={state.messagePage}
                dispatch={dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
