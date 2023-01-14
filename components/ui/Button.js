import styled from '@emotion/styled'

const Button = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid var(--yellow);
  padding: .8rem 2rem;
  margin-right: 1rem;
  background-color: ${props => (props.bgColor ? '#F7B801' : '#fefae0')};
  color: ${props => (props.bgColor ? '#233d4d' : '#3D348B')};

  &::last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export default Button
