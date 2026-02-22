'use server';

import { transporter } from 'lib/mailer';

export default async function sendEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return { ok: false, message: 'Please enter a valid email (e.g. name@example.com)' };
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Subscription confirmed',
      text: 'Thanks for subscribing to our newsletter!',
    });
    return {
      ok: true,
      message: "Thanks for subscribing! We'll keep you posted.",
    };
  } catch (err) {
    return {
      ok: false,
      message: 'Subscription failed. Please check your email and try again.',
    };
  }
}
