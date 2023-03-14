import React from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'Why do you use React?',
    content: 'You use React by creating components'
  },
]
function App() {
  return (
    <div className="App">
      {/* <Accordian items={items}/> */}
      <Search />
    </div>
  );
}

export default App;
