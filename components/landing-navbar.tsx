'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const font = Poppins({ weight: '800', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image 
            fill
            alt="logo"
            src="/logo.png"
          />
        </div>
        <h1 className={cn('text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600', font.className)}>
          AI Genius
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium1" className='rounded-full'>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
