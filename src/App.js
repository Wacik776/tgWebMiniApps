import { useEffect } from "react";
import "./App.css";
let tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      App
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
