"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const CatchAllPage = () => {
  const pathname = usePathname();

  
  const pageExists = false;

  if (!pageExists) {
    return (
      <div className='min-h-screen flex justify-center gap-8 flex-col items-center text-center'>
        <h1 className='text-7xl'>404 - Page Not Found</h1>
        <p className='text-lg'>The page you&apos;re looking for does not exist.</p>
        <Link className='w-fit p-2 px-8 rounded-full ring-1 ring-black' href="/">
          <span>Go back home</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Dynamic Page: {pathname}</h1>
    </div>
  );
};

export default CatchAllPage;
