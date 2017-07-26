import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, H3, Button, Input } from '../components/common-elements';

const FlashMsg = styled.p`
  padding: 12px;
  color: #333;
  background: ${props=>props.success?'rgba(0,255,0,0.2)':'rgba(255,0,0,0.2)'};
  border-radius: 4px;
`;

class DynamicStyles extends Component {
  constructor(props){
    super(props);

    this.state={
      success: false
    }
  }

  handleCheck=()=>{
    let success = !this.state.success;
    this.setState({
      success
    })
  }

  render(){
    return (
      <Wrapper>
        <H3>Dynamic styles</H3>
        <FlashMsg success={this.state.success}>{this.state.success?'Succeeded':'Failed'}</FlashMsg>
      </Wrapper>
    )
  }

}

export default DynamicStyles;
