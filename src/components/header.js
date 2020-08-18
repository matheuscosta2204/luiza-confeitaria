import React from 'react';

const Header = () => {
  return (
    <div className="header-background">
      <div className="header-shadow">
          <header className="header">
            <div className="logo-box">
              <img src={require('../media/logo-fundo-branco.png')} alt="Luiza Confeitaria" className="logo" />
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                <span className="heading-primary-main">Luiza Confeitaria</span>
                <span className="heading-primary-sub">bolos para sua festa</span>
                </h1>

                <a href="../#" className="btn btn-white btn-animated">Nosso cardápio</a>
            </div>
          </header>
      </div>
    </div>
  );
}

export default Header;
