import { useState } from "react";
import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
