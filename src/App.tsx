import "./components/ui/Alert/Alert";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";
import { Ban } from "lucide-react";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type={"alert-info"}
        title={"Something went wrong"}
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        alias debitis, officia expedita eligendi ut placeat quae minima! Minus,
        eos."
        icon={<Ban size={20} />}
      />
      <Alert
        type={"alert-default"}
        title={"Something went wrong"}
        description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        alias debitis, officia expedita eligendi ut placeat quae minima! Minus,
        eos."
        icon={<Ban size={20} />}
      />
    </div>
  );
}

export default App;
