'use client';
import { useEffect, useRef } from 'react';
import { CiUser } from 'react-icons/ci';

import styles from './WelcomeModal.module.css';

export default function WelcomeModal({ name, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialog?.addEventListener('cancel', handleCancel);
    return () => dialog?.removeEventListener('cancel', handleCancel);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <span className={styles.emoji}>
            <CiUser size={30} />
          </span>
        </div>
        <h2 className={styles.title}>Welcome, {name || 'Friend'}!</h2>
        <p className={styles.message}>
          Explore our events and find something special for yourself.
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Great, let's start
        </button>
      </div>
    </dialog>
  );
}
