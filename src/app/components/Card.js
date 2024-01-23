import Image from 'next/image';
import ArrowRight from '../assets/icons/ArrowRight';
import colors from '../utils/colors';
import AppButton from './AppButton';
import Title from './Title';

const Card = ({ title, description, image, link, wrapperClass }) => (
  <div className={`flex justify-between items-center p-10 gap-16 w-[1266px] ${wrapperClass}`}>
    <div>
      <Title
        title={title}
        description={description}
        titleClass="text-h5 font-semibold text-primary-700 text-left"
        descriptionClass="text-h7 font-normal text-grey-400 text-left"
      />

      <AppButton
        label="Learn More"
        type="submit"
        className="bg-transparent font-bold text-base border border-primary-700 text-primary-700 !w-[174px] mt-10"
        icon={<ArrowRight color={colors.primary700Color} className="ml-2 mt-1" />}
        actionDir="ltr"
      />
    </div>

    <figure>
      <Image src={image} alt={title} width={773.173} height={515} />
    </figure>
  </div>
);

export default Card;
