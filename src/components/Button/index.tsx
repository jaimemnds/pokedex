import React, { PropsWithChildren } from 'react';
import { AppComponentProps } from '../../App';
import './styles.scss';

export interface ButtonProps
  extends PropsWithChildren<
    AppComponentProps & React.HTMLProps<HTMLButtonElement>
  > {
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, className, disabled, onClick } = props;

  return (
    <button
      className={[className, 'button'].join(' ')}
      onClick={disabled ? () => {} : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
