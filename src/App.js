import "./App.css";
import { Link } from "react-router-dom";
import CommentList from "./components/CommentList";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center">
        <CommentList/>

        
      </div>
      <div className="attribution">
        Challenge by
        <Link to="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </Link>
        Coded by <Link to="#">Dennis Kimathi</Link>
      </div>
    </div>
  );
}

export default App;
