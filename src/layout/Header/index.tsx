import React from 'react';
import { AppComponentProps } from '../../App';
import './styles.scss';

interface HeaderProps extends AppComponentProps {}

const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={className}>
      <div className="header-bar"></div>
      <div className="header-cut"></div>
      <div className="header-lights">
        <div className="header-blue-light"></div>
        <div className="header-small-lights">
          <div className="header-red-light"></div>
          <div className="header-yellow-light"></div>
          <div className="header-green-light"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
