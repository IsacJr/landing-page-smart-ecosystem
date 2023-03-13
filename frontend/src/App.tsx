import { useContext } from "react";
import "./App.css";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <div className={"app-container " + (isDarkMode ? "dark-theme" : "")}>
      <div className="app-content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
