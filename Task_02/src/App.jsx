import React from "react";
import BlogList from "./components/BlogList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to top blogs list</h1>
      </header>
      <main>
        <BlogList />
      </main>
      <footer>
        <p>&copy; 2024 Top Blogs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
