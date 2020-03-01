import styled from "@emotion/styled";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.body};
`;

export default Wrapper;
