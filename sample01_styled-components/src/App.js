import BasicTitle from "./components/BasicTitle";
import { DefaultButton } from "./components/Button";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle special>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
