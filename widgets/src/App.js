import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "A shade of Blue",
    value: "blue"
  },
]

// const showAccordian = () => {
//   if (window.location.pathname === '/') {
//     return <Accordian items={items} />;
//   }
// };
// const showList = () => {
//   if (window.location.pathname === '/list') {
//     return <Search />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <Dropdown />;
//   }
// };
// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate />;
//   }
// };

function App() {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="App">
      {/* <Accordian items={items}/>
      <Search />
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <Translate /> */}
      {/* {showAccordian()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label=" Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
