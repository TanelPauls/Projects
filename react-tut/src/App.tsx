import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div>
      <div className="alert alert-primary">
        <Alert>Hello World</Alert>
      </div>
      <Buttons color="secondary" onClick={() => console.log("asd")}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
