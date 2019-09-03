import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import Example from "./Example";

function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
      <MyStyledComponent/>
      <MyStyledComponent/>
      <Example/>
    </div>
  );
}

export default App;
