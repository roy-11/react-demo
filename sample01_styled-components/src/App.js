import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Button";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle special>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}

export default App;
