import { HambergerMenu } from 'iconsax-react';
import { IconButton } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GitHubButton from './GitHubButton';
import MobileSidebar from '@/layouts/appLayout/sidebar/MobileSidebar';
import ThemeModeButton from './ThemeModeButton';
import logo from '@/assets/logo.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='flex flex-row justify-between items-center w-full h-16 px-2'>
      <div className='flex flex-row items-center gap-2'>
        <IconButton
          buttonProps={{
            className:
              'max-2xl:block hidden text-gray-500 hover:bg-gray-100 rounded-lg p-2.5 dark:text-gray-100 dark:hover:bg-gray-700',
          }}
          icon={HambergerMenu}
          onClick={() => setOpen((current) => !current)}
        />

        <Link to='/'>
          <img
            alt='logo'
            className='h-14 w-14 object-cover'
            src={logo}
          />
        </Link>
      </div>

      <div className='flex flex-row gap-2'>
        <GitHubButton />
        <ThemeModeButton />
      </div>

      <MobileSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </nav>
  );
};

export default NavBar;
