import logo from "./logo.svg";
import "./Test.css";
import { Movies } from "./components/Movies";
function Test() {
  return (
    <div className="Test">
      <div className="nav">
        <div>
          <h2>WOOKIE</h2>
          <h2>MOVIES</h2>
        </div>
        <div>
        </div>
      </div>
      <Movies />
    </div>
  );
}

export default Test;
