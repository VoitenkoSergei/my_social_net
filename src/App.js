import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Footer from './components/Footer/footer';
import Music from './components/Pages/music/music';
import Settings from './components/Pages/settings/settings';
import News from './components/Pages/news/news';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './components/Pages/messages/massagesContainer';
import UsersContainer from './components/Pages/users/usersContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Route exact path="/" render={() => <Profile />}
          />
          <Route path="/messages" render={() => <MessagesContainer />}
          />
          <Route path="/users" render={() => <UsersContainer />}
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
