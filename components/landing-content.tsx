'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const testimonials = [
  {
    name: 'Joel',
    avatar: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!",
  },
  {
    name: 'Antonis Team',
    avatar: 'A',
    title: 'Designer',
    description: 'I use this daily for generating new photos!',
  },
  {
    name: 'Papaioannou Antonis',
    avatar: 'P',
    title: 'CEO',
    description:
      'This app has changed my life, cannot imagine working without it!',
  },
  {
    name: 'Mary',
    avatar: 'M',
    title: 'CFO',
    description:
      'The best in class, definitely worth the premium subscription!',
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 mb-8 text-3xl font-bold text-white underline">
        Contact
      </div>
      <div className="flex items-center justify-center mt-5 space-x-5">
        <a href="#">
          <Mail className="h-6 w-6 text-rose-500 hover:text-rose-300" />
        </a>

        <div className="text-md text-gray-500">papaioannoudev@gmail.com</div>
      </div>
      <div className="flex items-center justify-center mt-5 space-x-5">
        <a href="#">
          <Mail className="h-6 w-6 text-rose-500 hover:text-rose-300" />
        </a>

        <div className="text-md text-gray-500">mrantonp@gmail.com</div>
      </div>
    </div>
  );
};
