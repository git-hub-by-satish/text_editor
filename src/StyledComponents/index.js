import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isHighlight ? ' #faff00' : ' #f1f5f9')};
  border: none;
  margin-right: 10px;
  cursor: pointer;
`

export const CustomTextarea = styled.textarea`
  width: 100%;
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
  color: #f1f5f9;
  padding: 10px;
  cursor: pointer;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
