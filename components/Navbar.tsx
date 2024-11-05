
import { auth } from '@/auth';

import SignIn from '../components/sign-in';
import SignOut from '../components/sign-out';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {

    const session = await auth()

  return (
    <header className='px-5 py-3 text-black bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/olola jaco.png' alt='logo' width={80} height={80} />
        </Link>
        <div className='flex items-center gap-5'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>
              <SignOut />
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
