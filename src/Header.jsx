// Header.jsx
import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Modal from './components/Modal';

const Header = () => {
  const [modalIsOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header>
      <nav className={`container ${styles.menu}`}>
        <NavLink className={styles.logo} to="/">
          Logo
        </NavLink>
        <div>
          <NavLink to="/">Link</NavLink>
          <NavLink to="/">Link</NavLink>
          <NavLink to="/">Link</NavLink>
        </div>
        <button className="button mainButton" onClick={openModal}>
          Button
        </button>
      </nav>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />
    </header>
  );
};

export default Header;
