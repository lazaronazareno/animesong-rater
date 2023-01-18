import styled from '@emotion/styled'

const Button = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--yellow);
  padding: .8rem 2rem;
  margin: 2rem auto;
  text-align: center;
  background-color: ${props => (props.bgColor ? '#F7B801' : '#fefae0')};
  color: ${props => (props.bgColor ? '#233d4d' : '#3D348B')};
  border-radius: 8px;

  &::last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export default Button
