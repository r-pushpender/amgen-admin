import {useEffect} from "react";
import AppRouter from "./AppRouter";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styles
import "./styles/App.scss";

function App() {
  return (
    <div className="app-container">
      <AppRouter />
    </div>
  );
}

export default App;
