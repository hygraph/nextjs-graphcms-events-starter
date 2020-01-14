import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from './Logo';

function Header() {
  const router = useRouter();
  return (
    <div className="py-3 z-10 absolute w-full">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo />
        {router.pathname !== '/' && (
          <Link href="">
            <a>
              <strong className="font-bold text-purple-200">
                &larr; Back to all events link
              </strong>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
