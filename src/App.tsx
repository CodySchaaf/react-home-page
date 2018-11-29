import React, {useState, ChangeEvent, Component, FormEvent, ReactEventHandler, SyntheticEvent} from 'react';

import logo from './logo.svg';

import styled, {keyframes, ThemeProvider} from 'styled-components'
import {theme} from "./theme/globalStyles";
import GetEmail from "./GetEmail";
import configureStore from "./configureStore";
import {Provider} from "react-redux";
import {initialState} from "./services/email/reducer";

const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppTitle = styled.h1`
  font-weight: 900;
`


const AppIntro = styled.p`
  color: ${props => props.theme.primary};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img'
})``

const store = configureStore(initialState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo"/>
            <AppTitle>Welcome to React</AppTitle>
            <GetEmail/>
          </AppHeader>
          <AppIntro >
            Bootstrapped with <code>create-react-app</code>.
          </AppIntro>
          <AppIntro>
            Components styled with <code>styled-components</code>{' '}
            <EmojiWrapper aria-label="nail polish">💅</EmojiWrapper>
          </AppIntro>
        </AppWrapper>
      </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
