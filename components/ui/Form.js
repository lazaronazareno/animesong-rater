import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1 2;
  justify-content: space-evenly;

  fieldset {
    margin: 2rem 0;
    border: 1px solid var(--violet);
    font-size: 2rem;
    padding: 2rem;
    background-color: white;
    border-radius: 12px;
    min-width: 50rem;
    position: relative;
  }

  fieldset legend {
    background-color: white;
    border-radius: 8px;
    border: 1px 1px 1px 1px solid var(--violet);
    border: 1px solid var(--violet);
    border-bottom: none;
    border-style: outset;
  }

  @media (max-width: 550px) {
    fieldset legend {
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      top: -2rem;
    }
  }
`

export const AuthForm = styled.form`
  background-color: white;
  flex-direction: column;
  padding: 10rem;
  gap: 2rem;
  border-radius: 12px;
  width: 80%;
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
    background-color: var(--light-violet);
    border: none;
    border-radius: 12px;
    padding: 1.5rem;
    min-width: 300px;
    color: var(--white);

    ::placeholder {
    color: var(--white);
  }
  }

  textarea {
    height: 10rem;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    label {
      flex: none;
    }

    input, textarea {
      width: 90%;
    }
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
  border-radius: 12px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
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
