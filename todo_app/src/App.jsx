// The following project was adapted from React for Beginners by Code Stoic
// Tutorial link: https://youtu.be/fu_PYQ0b-uQ?si=Gw68l_BCT31DWnnl

import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
