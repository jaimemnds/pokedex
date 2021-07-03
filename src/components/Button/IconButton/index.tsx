import React from 'react';
import { ButtonProps } from '..';
import Button from './../';
import './styles.scss';

interface IconButtonProps extends ButtonProps {}

const IconButton = (props: IconButtonProps) => {
  const { children, className, onClick } = props;
  return (
    <Button className={[className, 'icon-button'].join(' ')} onClick={onClick}>
      {children}
    </Button>
  );
};

export default IconButton;
