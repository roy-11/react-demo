import styled from "styled-components";

const BasicTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  color: ${({ special }) => special && "red"};
`;

export default BasicTitle;
