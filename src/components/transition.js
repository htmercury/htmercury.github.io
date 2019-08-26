import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import "../styles/transition.page.scss";

const timeout = 500;

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    let name = location.pathname.replace(/[^a-zA-Z]+/g, "");

    if (name.length === 0) {
      name = "home";
    }

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: 500,
          }}
        >
          {status => (
            <div
              className={`${status}-${name}`}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
