import styled from 'styled-components';

// eslint-disable-next-line
import variables from '!!sass-variable-loader?preserveVariableNames!../scss/variables.scss';

const { gray } = variables;

export const Wrapper = styled.div`
  padding: 25px 15px;
`;

export const H3 = styled.h3`
  font-size: 24px;
`;


export const Button = styled.button`
  border: none;
  background: ${gray};
  border-radius: 4px;
  padding: 12px 24px;
  margin-top: 24px;
  margin-right: 12px;
  color: #333;
  cursor: pointer;
  transition: all 0.1s ease;

  &:focus{
    outline: none;
  }

  &:active{
    opacity: 0.75;
    transform: scale(0.97);
  }
  &[disabled]{
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  min-width: 320px;
  border: none;
  border-radius: 4px;
  background: #dee6f3;
  height: 48px;
  padding: 0 12px;
`;
