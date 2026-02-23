'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

import { authClient } from 'lib/auth-client';
import { AuthError } from 'components/AuthError/AuthError';

import styles from './page.module.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    await authClient.signUp.email(
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        callbackURL: '/?auth=success',
      },
      {
        onSuccess: () => {
          router.push('/?auth=success');
          router.refresh();
          setLoading(false);
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
        <h1 className={styles.title}>Create account</h1>

        <AuthError message={error} />

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <label className={styles.label}>Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Your name"
              required
              disabled={loading}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
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
            {loading ? 'Is loading...' : 'Register'}
          </button>
        </form>
        <p className={styles.footerText}>
          Already have an account?
          <Link href="/signIn" className={styles.link}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
