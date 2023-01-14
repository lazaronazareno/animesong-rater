import styled from '@emotion/styled'

export const Form = styled.form`
  max-width: 600px;
  width: 95%;
  display: flex;
  flex-direction: column;
`

export const FormField = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }

  input {
    flex: 1;
    padding: 1rem;
  }
`

export const InputSubmit = styled.input`
  background-color: var(--violet);
  color: var(--white);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  border: none;
  font-family: 'Sofia Sans Condensed', sans-serif;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`

export const Error = styled.p`
  color: var(--red);
  padding: 1rem;
  font-family: 'Sofia Sans Condensed',sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: end;
  text-transform: uppercase;
  margin: 1rem 0;
`
