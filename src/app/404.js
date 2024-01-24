/* eslint-disable quotes */

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Icon from './assets/image/404-icon.png';
import AppButton from './components/AppButton';
import Layout from './layouts';

const NotFound = () => {
  const router = useRouter();
  const onGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Layout>
      <div className="flex justify-center items-center pt-48">
        <div>
          <div className="flex justify-center">
            <Image src={Icon} alt="check mark icon" width="270" height="270" priority />
          </div>

          <p className="text-primary-100 text-sz8 font-bold text-center mt-14 mb-3">
            Page not found
          </p>
          <p className="text-primary-100 text-sz5 font-normal text-center">
            {"Sorry, the page you are looking for doesn\n't exist or has been moved."}
          </p>

          <div className="flex justify-center">
            <AppButton
              label="Go Back"
              type="button"
              onClick={onGoBack}
              className="my-10 font-bold text-sz3 text-white !w-[200px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
