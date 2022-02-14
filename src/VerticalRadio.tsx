import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

const options: IChoiceGroupOption[] = [
  { key: 'capricciosa', text: 'Capricciosa' },
  { key: 'prosciutto', text: 'Prosciutto', disabled: true },
  { key: 'pepperoni', text: 'Pepperoni' },
];

export const ChoiceGroupBasicExample: React.FunctionComponent = () => {
  return <ChoiceGroup defaultSelectedKey="prosciutto" options={options} required={true} />;
};