import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}


export const Button: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
      <PrimaryButton text="Primary" allowDisabledFocus disabled={disabled} checked={checked} />
  );
};

