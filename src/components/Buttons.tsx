import styled from "styled-components";

interface Props {
  bg: string;
}

const Button = styled.button<Props>`
  background: ${(props) => props.bg};
  border: none;
  color: ${(props) => props.color};
  outline: none;
  padding: 0.3rem 0.5rem;
`;
export default Button;
