import React from 'react';
import styled from 'styled-components';

import { Wrapper, H3 } from '../components/common-elements';

const Button = styled.button`
  border: none;
  background: #e8e8e8;
  border-radius: 4px;
  padding: 12px 24px;
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
`;

const Home = ()=>{
  return(
    <Wrapper>
      <p className="App-intro">Creating React elements with styled components</p>
      <H3>Button</H3>
      <Button>Button element</Button>
    </Wrapper>
  )
}

export default Home;
