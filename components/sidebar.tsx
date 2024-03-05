'use client';

import { cn } from '@/lib/utils';
import {
  Code,
  Facebook,
  FacebookIcon,
  ImageIcon,
  InstagramIcon,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Music,
  Settings,
  Twitter,
  TwitterIcon,
  VideoIcon,
} from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const font = Poppins({ weight: '800', subsets: ['latin'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-green-700',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-yellow-400',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-orange-400',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '#/settings',
    color: 'text-blue-200',
  },
  
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1
            className={cn(
              'text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600',
              font.className
            )}
          >
            AI Genius
          </h1>
        </Link>
        <div className="space-y-1.5">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'text-md group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        
      </div>
      <div className="flex justify-center items-center space-x-8">
        <a href="#">
          <FacebookIcon className="h-6 w-6 text-blue-500 hover:text-blue-400" />
        </a>
        <a href="#">
          <TwitterIcon className="h-6 w-6 text-white hover:text-blue-300" />
        </a>
        <a href="#">
          <InstagramIcon className="h-6 w-6 text-rose-600 hover:text-red-500" />
        </a>
        <a href="#">
          <Mail className="h-6 w-6 text-yellow-500 hover:text-yellow-300" />
        </a>
        {/* Add more social media icons here */}
      </div>
    </div>
  );
};

export default Sidebar;
