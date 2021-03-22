import styled from 'styled-components'

const InputFieldOutline = styled.input`
    padding: 23px 23px;
    width: 100%;
    background: transparent;
    border: 3px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 23px;
    color: white;
    font-family: "Rubik", sans-serif;
    font-style: normal;
    outline: none;
    font-weight: bold;
    line-height: 27px;
    ::placeholder{
      color: white;
      font-family: "Rubik", sans-serif;
      font-weight: bold;
    }
`

export default InputFieldOutline
