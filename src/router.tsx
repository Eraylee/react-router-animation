import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";

export const Routers: React.FC = () => {
  return (
    <Router>
      <AnimationApp />
    </Router>
  );
};

const ANIMATION_MAP = {
  PUSH: "forward",
  POP: "back",
  REPLACE: "replace"
};

const dynamicChildFactory = (classNames: string) => (
  child: React.ReactElement
) =>
  React.cloneElement(child, {
    classNames
  });

const AnimationApp = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <TransitionGroup
      className={"router-wrapper"}
      childFactory={dynamicChildFactory(ANIMATION_MAP[history.action])}
    >
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={460}
        unmountOnExit
      >
        <Switch location={location}>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
