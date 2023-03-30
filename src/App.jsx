import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Meals from "./Components/Meals/Meals";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <h1>Hi there </h1>
      <div className="d-flex justify-content-around">
        <Meals></Meals>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
