import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Wrapper } from '../components/common-elements';

// eslint-disable-next-line
import variables from '!!sass-variable-loader?preserveVariableNames!../scss/variables.scss'; // eslint-disable-line

const {gray} = variables;

const SidebarWrapper = Wrapper.extend`
  width: 25%;
  height: calc(100vh - 160px);
  float: left;
  text-align: left;
  background: ${gray};
  padding-left: 0;
  padding-right: 0;
  overflow-y: auto;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 12px;
  padding-left: 12px;
  border-bottom: 1px solid #ccc;
  margin: 0;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  a{
    padding: 12px;
    display: block;
    color: ${props=>props.location===props.url&&'green'};
    background: ${props=>props.location===props.url&&'#d8d8d8'};

    &:active,&:focus,&:visited{
      color: initial;
    }
    &:active{
      opacity: 0.5;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const Sidebar = (props)=>{
    return(
    <SidebarWrapper>
      <Title>MENU</Title>
      <List>
        <ListItem location={props.match.url} url='/'><NavLink to='/'>Home</NavLink></ListItem>
        <ListItem location={props.match.url} url='/passedProps'><NavLink to='/passedProps'>Passed props</NavLink></ListItem>
        <ListItem location={props.match.url} url='/extending'><NavLink to='/extending'>Extending styles</NavLink></ListItem>
        <ListItem location={props.match.url} url='/dynamicStyles'><NavLink to='/dynamicStyles'>Dynamic styles</NavLink></ListItem>
        <ListItem location={props.match.url} url='/theming'><NavLink to='/theming'>Theming</NavLink></ListItem>
        <ListItem location={props.match.url} url='/animations'><NavLink to='/animations'>Animations</NavLink></ListItem>
        <ListItem location={props.match.url} url='/mediaQueries'><NavLink to='/mediaQueries'>Media queries</NavLink></ListItem>
      </List>
    </SidebarWrapper>
  )
}

export default Sidebar;
