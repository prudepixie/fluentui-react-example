import React from "react";
import "./App.css";
import { Button } from "./Button";

enum Component {
  Button = "button",
  Mixed = "mixed",
  Card = "card",
}

type Repeat = string;

export const App: React.FunctionComponent = () => {
  const component = new URLSearchParams(window.location.search).get(
    "component"
  ) as Component;
  const repeat = new URLSearchParams(window.location.search).get(
    "repeatNum"
  ) as Repeat;

  const repeatNumber = parseInt(repeat);

  const renderComponent = () => {
    switch (component) {
      case Component.Button:
        return repeatNumber > 0 ? (
          [...Array(repeatNumber)].map((e, i) => <Button key={i}></Button>)
        ) : (
          <Button></Button>
        );
      case Component.Card:
        return <div>this is a card</div>;
      case Component.Mixed:
        return <div>this is a mixed</div>;
      default:
        return <Button></Button>;
    }
  };

  return <>{renderComponent()}</>;
};
