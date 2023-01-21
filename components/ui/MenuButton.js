import React from 'react'
import styled from '@emotion/styled'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const OpenButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 3rem;
  font-weight: 700;
  background: none;
  border: 1px solid;
  display: flex;
  padding: .8rem 2rem;
  color: ${props => (props.bgColor ? '#233d4d' : '#3D348B')};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  
  @media (min-width : 768px) {
    display: none;
  }
`
const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 3rem;
  font-weight: 700;
  background: none;
  border: 1px solid;
  display: flex;
  padding: .8rem 2rem;
  color: ${props => (props.bgColor ? '#233d4d' : '#3D348B')};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media (min-width : 768px) {
    display: none;
  }
`

const MenuButton = ({ show, setShow }) => {
  return (
    <>
      {!show
        ? (
          <OpenButton title='Menu Open' onClick={() => setShow(!show)}>
            <AiOutlineMenu size={24} />
          </OpenButton>
          )
        : (
          <CloseButton title='Menu Close' onClick={() => setShow(!show)}>
            <AiOutlineClose size={24} />
          </CloseButton>
          )}
    </>
  )
}

export default MenuButton
