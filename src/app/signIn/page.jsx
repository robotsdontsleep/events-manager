'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { authClient } from 'lib/auth-client';
import { AuthError } from 'components/AuthError/AuthError';

import styles from './page.module.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    await authClient.signIn.email(
      {
        email: formData.email,
        password: formData.password,
        callbackURL: '/?auth=success',
      },
      {
        onSuccess: () => {
          router.refresh();
        },
        onError: (ctx) => {
          setLoading(false);
          setError(
            ctx?.error?.message ||
              'Oops! Invalid email or password. Please try again. Please double-check your email and password',
          );
        },
      },
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Log in</h1>

        <AuthError message={error} />

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="example@mail.com"
              required
              disabled={loading}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              placeholder="••••••••"
              required
              disabled={loading}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <p className={styles.footerText}>
          Don't have an account?
          <Link href="/signUp" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
