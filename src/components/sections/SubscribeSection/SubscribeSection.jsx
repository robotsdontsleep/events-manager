'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import sendEmail from 'features/email/sendEmail';

import { Section } from '../Section';
import styles from './SubscribeSection.module.css';

export default function SubscribeSection() {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: '' } });
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async ({ email }) => {
    const response = await sendEmail(email);

    if (!response.ok) {
      setError('email', {
        type: 'server',
        message: response.message,
      });
      setFocus('email');
      return;
    }

    setSuccessMessage(response.message);
  };
  return (
    <Section
      bg={true}
      content={
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>SUBSCRIBE</h2>
            <p className={styles.subtitle}>Sign up for Newsletter!</p>
          </div>

          {successMessage ? (
            <p className={styles.success}>{successMessage}</p>
          ) : (
            <div className={styles.formContainer}>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter your email"
                  {...register('email')}
                />

                <button className={styles.button} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'SUBSCRIBE'}
                </button>
              </form>
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
          )}
        </div>
      }
    />
  );
}
