'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import WelcomeModal from './WelcomeModal';

export default function WelcomeHandler({ userName }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const authStatus = searchParams.get('auth');
    if (authStatus === 'success') {
      setShowWelcome(true);
    }
  }, [searchParams]);

  const handleClose = () => {
    setShowWelcome(false);
    router.replace('/', { scroll: false });
  };

  if (!showWelcome) {
    return null;
  }

  return <WelcomeModal name={userName} onClose={handleClose} />;
}
