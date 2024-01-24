import ArrowRight from '@/app/assets/icons/ArrowRight';
import Image from 'next/image';
import CimplaLogo from '../../assets/icons/cimpla-logoo.svg';
import AppButton from '../AppButton';

const Navbar = () => (
  <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="flex flex-wrap items-center justify-between px-20 py-6 w-full">
      <figure className="cursor-pointer">
        <Image src={CimplaLogo} alt="cimpla-logo" width={135.17} height={42} />
      </figure>

      <button
        data-collapse-toggle="navbar-multi-level"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
      </button>

      <div className="flex items-center gap-6">
        <ul className="flex font-medium rounded-lg bg-white gap-6" style={{ whiteSpace: 'nowrap' }}>
          <li className="font-normal text-primary-200 text-h8 cursor-pointer">About Us</li>
          <li className="font-normal text-primary-200 text-h8 cursor-pointer">Product</li>
          <li className="font-normal text-primary-200 text-h8 cursor-pointer">Contact Us</li>
        </ul>
        <div className="">
          <AppButton
            label="Get a Demo"
            type="submit"
            className="font-bold text-sz3 text-white !w-[182px]"
            icon={<ArrowRight className="ml-2 mt-1" />}
            actionDir="ltr"
          />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
