import React, { Fragment } from "react";
import "./App.css";
import { Link, Checkbox } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Text } from "@fluentui/react/lib/Text";

const templates = {
  button: <PrimaryButton text="Button" />,
  link: (
    <Link href="#" underline>
      this is a link
    </Link>
  ),
  checkbox: (
    <Fragment>
      <Checkbox label="My checkbox" />
      <Checkbox label="My checkbox" disabled />
      <Checkbox label="My checkbox" defaultChecked />
    </Fragment>
  ),
  text: (
    <Text>
      <span>Default text styles</span>
    </Text>
  ),
};
type ComponentName = keyof typeof templates;
export const App: React.FunctionComponent = () => {
  const searchParam = new URLSearchParams(window.location.search);
  const component = searchParam.get("component") || "button";
  const repeat = searchParam.get("repeatNum") || "1";
  const isMultiple = component?.includes(",");
  const repeatNumber = parseInt(repeat);

  const renderComponent = () => {
    if (isMultiple) {
      const componentList: string[] = component.split(",");
      const combinedTemplates = componentList.map(
        (component) => templates[component as ComponentName] as JSX.Element
      );

      return Array(repeatNumber)
        .fill(combinedTemplates)
        .flat()
        .map((template, i) => React.cloneElement(template, { key: i }));
    } else {
      return [...Array(repeatNumber)].map((e, i) => {
        const template = templates[
          component as ComponentName
        ] as unknown as JSX.Element;
        return React.cloneElement(template, { key: i });
      });
    }
  };

  return <>{renderComponent()}</>;
};
