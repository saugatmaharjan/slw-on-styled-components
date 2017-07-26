import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { injectGlobal, keyframes } from 'styled-components';

import Home from './screens/home';
import Sidebar from './components/sidebar';
import PassedProps from './screens/passedProps';
import ExtendComponents from './screens/extends';
import DynamicStyles from './screens/dynamicStyles';
import Theming from './screens/theming';

import logo from './images/logo.png';
import './App.css';

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

injectGlobal`
  *{
    box-sizing: border-box;
  }

  body{
    font-size: 16px;
  }
`;

const Logo = styled.img`
  max-height: 50px;
`;

const Content = styled.div`
  width: 75%;
  float: left;
  padding: 0 16px;
`;

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <div className="App-header">
            <Logo src={logo} className="App-logo" alt="logo" />
            <h2>Intro to Styled Components</h2>
          </div>
          <Route path='*' component={Sidebar} />
          <Content>
            <Route exact path='/' component={Home} />
            <Route path='/passedProps' component={PassedProps} />
            <Route path='/extending' component={ExtendComponents} />
            <Route path='/dynamicStyles' component={DynamicStyles} />
            <Route path='/theming' component={Theming} />
          </Content>
        </div>
      </Router>
    );
  }
}

export default App;
