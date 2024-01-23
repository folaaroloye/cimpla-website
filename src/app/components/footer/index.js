import Image from 'next/image';
import { useMemo } from 'react';
import CimplaLogo from '../../assets/icons/cimpla-logoo.svg';
import Facebook from '../../assets/image/facebook.svg';
import Instagram from '../../assets/image/instagram.svg';
import LinkedIn from '../../assets/image/linkedin.svg';
import Twitter from '../../assets/image/twitter.svg';

const Footer = () => {
  const footerList = useMemo(
    () => [
      {
        title: 'Contact  Us',
        link: '',
      },
      {
        title: 'Terms Of use',
        link: '',
      },
      {
        title: 'FAQs',
        link: '',
      },
      {
        title: 'Privacy',
        link: '',
      },
    ],
    []
  );

  return (
    <footer className="pt-20">
      <div className="flex justify-between border-b border-t border-primary-100 border-solid p-20">
        <figure>
          <Image src={CimplaLogo} alt="cimpla-logo" width={135.17} height={42} />
        </figure>

        <div>
          <div className="flex gap-16 flex-wrap">
            {footerList.map(item => (
              <p key={item.title} className="text-h8 font-normal text-primary-600">
                {item.title}
              </p>
            ))}
          </div>

          {/* <div className="flex gap-16 flex-wrap">
            {footerList.slice(2, 4).map(item => (
              <p key={item} className="text-h8 font-normal text-primary-600">
                {item.title}
              </p>
            ))}
          </div> */}
        </div>
      </div>
      <div className="border-t border-primary-600 border-solid pt-5 pb-10 flex justify-between">
        <p className="text-primary-600 font-normal text-h8">
          &copy; {new Date().getFullYear()} Cimpla. All Rights Reserved.
        </p>
        <div className="flex gap-7">
          <Image src={LinkedIn} alt="linkedin" width={28} height={28} />
          <Image src={Facebook} alt="facebook" width={28} height={28} />
          <Image src={Instagram} alt="instagram" width={28} height={28} />
          <Image src={Twitter} alt="twitter" width={28} height={28} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
