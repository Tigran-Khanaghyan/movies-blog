import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import SimpleBottomNavigation from "./components/BottomNav/BottomNav";

function App() {
  return (
    <>
      <Header />
      <div className="app"></div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
