import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Wrapper, H3, Button, Input } from '../components/common-elements';

// eslint-disable-next-line
import variables from '!!sass-variable-loader?preserveVariableNames!../scss/variables.scss';

const themeColors = {...variables}

const Header = styled.div`
  height: 60px;
  line-height: 60px;
  color: #eee;
  background: ${props=>props.theme[props.themeName]};

  .logo{
    font-size: 18px;
    font-weight: bold;
    margin-left: 12px;
  }

  a{
    color: #eee;
    float: right;
    margin: 0 12px;
    text-decoration: none;
  }
`;

class Theming extends Component {
  constructor(props){
    super(props);

    this.state={
      success: false
    }
  }

  render(){
    return (
      <Wrapper>
        <H3>Themed styles</H3>
        <ThemeProvider theme={themeColors}>
          <Header themeName='orange'>
            <span className='logo'>LOGO</span>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </Header>
        </ThemeProvider>
      </Wrapper>
    )
  }

}

export default Theming;
