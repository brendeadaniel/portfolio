import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./UI/HomePage/HomePage";
import ProjectPage from "./UI/ProjectPage/ProjectPage";
import ContactPage from "./UI/ContactPage/ContactPage";

function App() {
  return (
    <div>
      {/* routes available  */}
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" component={ProjectPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  );
}

export default App;
