import React from 'react';
import styled from 'styled-components';

import { Wrapper, Button } from '../components/common-elements';

// eslint-disable-next-line
import variables from '!!sass-variable-loader?preserveVariableNames!../scss/variables.scss';

const { red, green } = variables;

const DangerButton = Button.extend`
  background: ${red};
  color: #e8e8e8;
`;

const SuccessButton = Button.extend`
  background: ${green};
  color: #e8e8e8;
`;

const DisabledButton = Button.extend.attrs({
  disabled: true
})`
  opacity: 0.5;
  cursor: not-allowed;
`;

const BigButton = SuccessButton.extend`
  padding: 18px 32px;
  font-size: 18px;
`;

const BorderButton = DangerButton.extend`
  background: transparent;
  padding: 18px 32px;
  font-size: 18px;
  color: ${red};
  border: 1px solid ${red};
`;

const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid #d8d8d8;
  margin: 48px 0;
`;

const ExtendComponents = (props)=>{
  return(
    <Wrapper>
      <p className="App-intro">Extending styled components</p>
      <Button>Default Button</Button>
      <SuccessButton>Success Button</SuccessButton>
      <DangerButton>Danger Button</DangerButton>
      <DisabledButton>Disabled button</DisabledButton>
      <Hr/>
      <BigButton>Big Button</BigButton>
      <BorderButton>Bordered Button</BorderButton>
    </Wrapper>
  )
}

export default ExtendComponents;
