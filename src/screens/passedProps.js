import React from 'react';
import { Wrapper, H3, Button, Input } from '../components/common-elements';

const PassedProps =()=>(
  <Wrapper>
    <H3>Passed props</H3>
    <Input placeholder='Enter your username'/>
    <br/>
    <Button type='submit' disabled>Submit button</Button>
  </Wrapper>
)

export default PassedProps;
