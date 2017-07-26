import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Wrapper } from '../components/common-elements';

const keepMoving = keyframes`
  0%{
    transform: translateY(0px);
    height: 10px;
  }
  100%{
    transform: translateY(-50px);
    height: 50px;
  }
`;

const AnimWrapper = Wrapper.extend`
  padding-top: 100px;
`;

const Rect = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 15px;
  background: #333;
  animation: ${keepMoving} 1s ease-in-out infinite;
  animation-direction: alternate;
  margin-right: 4px;

  &.green{
    background: green;
  }
`;

const Rect2 = Rect.extend`
  animation-delay: 0.1s;
`;

const Rect3 = Rect.extend`
  animation-delay: 0.2s;
`;

const Rect4 = Rect.extend`
  animation-delay: 0.3s;
`;

const Rect5 = Rect.extend`
  animation-delay: 0.4s;
`;

const Rect6 = Rect.extend`
  animation-delay: 0.5s;
`;

const Rect7 = Rect.extend`
  animation-delay: 0.6s;
`;
const Rect8 = Rect.extend`
  animation-delay: 0.7s;
`;
const Rect9 = Rect.extend`
  animation-delay: 0.8s;
`;
const Rect10 = Rect.extend`
  animation-delay: 0.9s;
`;

const Animation = () =>(
  <AnimWrapper>
    <Rect className='green'/>
    <Rect2/>
    <Rect3/>
    <Rect4/>
    <Rect5/>
    <Rect6/>
    <Rect7/>
    <Rect8/>
    <Rect9/>
    <Rect10/>
  </AnimWrapper>
)

export default Animation;
