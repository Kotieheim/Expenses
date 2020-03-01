import styled from "@emotion/styled";

const Wrapper = styled("div")`
  padding-top: 5%;
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.body};
  .container {
    background: ${props => props.theme.container};
    margin: 30px auto;
    width: 320px;
    padding: 15px;
    -webkit-box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
  }
  #balance {
    font-size: 36px;
    text-align: center;
    background: ${props => props.theme.background};
    padding: 10px;
    -webkit-box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
  }

  .inc-exp-container {
    background-color: ${props => props.theme.background};
  }
  .money.plus {
    color: ${props => props.theme.plus};
  }
  .money.minus {
    color: ${props => props.theme.minus};
  }
  input[type="text"],
  input[type="number"] {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    -webkit-box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 4px 10px -2px rgba(0, 0, 0, 0.75);
  }
  .btn {
    background-color: ${props => props.theme.button};
  }

  .btn:hover {
    background-color: ${props => props.theme.hover};
    color: white;
  }
  .list li {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
  }
  .list li.plus {
    border-right: 25px solid ${props => props.theme.plus};
  }
  .list li.minus {
    border-right: 25px solid ${props => props.theme.minus};
  }
  .toggle-btn {
    background: ${props => props.theme.container};
    color: ${props => props.theme.body};
  }
`;

export default Wrapper;
