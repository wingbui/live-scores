import styled from "styled-components";

const Button = styled.button`
    background: ${props => props.bg};
    border: none;
    color: ${props => props.color};
    outline: none;
    padding: .3rem .5rem;
`
export default Button;