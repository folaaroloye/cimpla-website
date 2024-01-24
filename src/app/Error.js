/* eslint-disable quotes */

import AppButton from './components/AppButton';
import Layout from './layouts';

const Error = ({ onClick }) => {
  const { colors } = useAppConfig();
  return (
    <Layout>
      <div className="flex justify-center items-center pt-48">
        <div>
          <p className="text-black-200 text-sz8 font-bold text-center mt-14 mb-3">
            Something went wrong.
          </p>
          <p className="text-black-200 text-sz5 font-normal text-center">
            {'Kindly click on the refresh button below to refresh the app '}
          </p>

          <div className="flex justify-center">
            <AppButton
              label="Refresh"
              type="button"
              onClick={onClick}
              className="my-10 font-bold text-sz3 text-white !w-[200px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
