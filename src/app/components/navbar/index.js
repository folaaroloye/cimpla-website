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

      <div className="flex items-center">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="font-normal text-primary-200 text-h8 cursor-pointer w-[100px]">
            About Us
          </li>
          <li className="font-normal text-primary-200 text-h8 cursor-pointer w-[100px]">Product</li>
          <li className="font-normal text-primary-200 text-h8 cursor-pointer w-[100px]">
            Contact Us
          </li>
        </ul>

        <AppButton
          label="Get a Demo"
          type="submit"
          className="font-bold text-sz3 text-white w-[182px] ml-6"
          icon={<ArrowRight className="ml-2 mt-1" />}
          actionDir="ltr"
        />
      </div>
    </div>
  </nav>
);

export default Navbar;
