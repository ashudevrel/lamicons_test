import React, { Component } from 'react';
import TabsComponent from './TabsComponent';
//import './App.css';
class App extends Component {
  render() {
    const tabs = [
      { title: 'Tab 1', content: 'this is the content for Tab 1'},
      { title: 'Tab 2', content: 'this is the Content for Tab 2'},
      { title: 'Tab 3', content: 'this is the Content for Tab 3'},

    ];
    return (
      <div>
        <h1>Test</h1>
        <TabsComponent tabs={tabs} />
      </div>
    );
  }
}

export default App;
