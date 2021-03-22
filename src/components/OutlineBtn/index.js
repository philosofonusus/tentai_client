import styled from 'styled-components'

const OutlineBtn = styled.button`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  line-height: 27px;
  padding: 4px 25px;
  background-color: transparent;
  color: white;
  outline: none;
  transition: 0.25s ease-in-out;
  border: 3px solid #FFFFFF;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover{
    color: #2F2C01;
    background-color: white;
  }
`

export default OutlineBtn
