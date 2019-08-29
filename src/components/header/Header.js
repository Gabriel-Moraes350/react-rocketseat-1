import React from 'react';
import './header.css';
import facebook from '../../../assets/img/facebook.png';

export default function Header() {
  return (
    <div className="navbar">
      <img id="navbar--facebook" src={facebook} />
      <span id="navbar--my-profile">Meu perfil</span>
    </div>
  );
}
