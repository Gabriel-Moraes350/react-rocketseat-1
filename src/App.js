import React, { Component } from 'react';
import Header from './components/header/Header';
import './App.css';
import PostList from './components/main/PostList';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    );
  }
}

export default App;
