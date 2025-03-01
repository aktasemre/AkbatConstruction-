'use client';

import React, { useEffect } from 'react';
import { initAnimations } from '../utils/animations';

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Animasyonları başlat
    const cleanup = initAnimations();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
} 