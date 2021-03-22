import styled from 'styled-components'

const FilledBtn = styled.button`
  background: #FFFFFF;
  border: 3px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  padding: 7px 70px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transform: translateY(0);
  font-size: 30px;
  color: #2F2C01;
  line-height: 45px;
  transition: 0.3s ease-in-out;
  text-align: center;
  &:hover{
    transform: translateY(-10px);
  }
`

export default FilledBtn
