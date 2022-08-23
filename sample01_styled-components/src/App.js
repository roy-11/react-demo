import styled from "styled-components";
const BasicTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle>Styled Components</BasicTitle>
      <button className="btn">click me</button>
    </div>
  );
}

export default App;
