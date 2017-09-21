import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import SessionFormContainer from './session/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import { AuthRoute } from '../util/route_util';

const App = (props) => {
  return (
    <div className="EntirePageBody">
      <header className="NavBar">
        <div className="NavBarContent">
          <h1 className="HeaderLogo">Vibes (Logo)</h1>
          <SessionButtonsContainer />
        </div>
      </header>
      <main className="PageContainer">
        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
          <Route path="/" component={HomepageContainer} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
