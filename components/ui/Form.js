import styled from '@emotion/styled'

export const Form = styled.form`
  max-width: 600px;
  width: 95%;
  display: flex;
  flex-direction: column;

  fieldset {
    margin: 2rem 0;
    border: 1px solid var(--violet);
    font-size: 2rem;
    padding: 2rem;
  }
`

export const FormField = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    flex: 0 0 150px;
    font-size: 1.8rem;
  }

  input,
  textarea {
    flex: 1;
    padding: 1rem;
  }

  textarea {
    height: 10rem;
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
