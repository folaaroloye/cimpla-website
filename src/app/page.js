'use client';

// This is a client component 👈🏽

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import ArrowRight from './assets/icons/ArrowRight';
import AIPowered from './assets/image/ai-powered.svg';
import ArtificialIntelligence from './assets/image/artificial-intelligence.svg';
import CashCounter from './assets/image/cash-counter.png';
import CreditScoring from './assets/image/credit-scoring.svg';
import DataServer from './assets/image/data-server.png';
import DecisionEngine from './assets/image/decision-engine.png';
import Engage from './assets/image/engage.png';
import Finance from './assets/image/finance.png';
import Finparse from './assets/image/finparse.png';
import HealthCare from './assets/image/health-care.png';
import Insurance from './assets/image/insurance.png';
import LeftArrow from './assets/image/left-arrow.svg';
import RightArrow from './assets/image/right-arrow.svg';
import RiskDecisioning from './assets/image/risk.svg';
import CustomizableSolution from './assets/image/solutions.svg';
import AppButton from './components/AppButton';
import Card from './components/Card';
import FAQ from './components/FAQ';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Tabs from './components/Tabs';
import Title from './components/Title';
import colors from './utils/colors';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const metrics = useMemo(
    () => [
      {
        text: '5-20x',
        value: 'Reduction in processing time',
      },
      {
        text: '99%',
        value: 'Accuracy improvement',
      },
      {
        text: '70%',
        value: 'Lower operational costs',
      },
      {
        text: '10x',
        value: 'Boost in growth rate',
      },
    ],
    []
  );

  const offers = useMemo(
    () => [
      {
        text: 'Risk Decisioning',
        value:
          'Offering advanced risk solutions for businesses to effectively assess, and manage risks.',
        icon: RiskDecisioning,
      },
      {
        text: 'AI-Powered Analytics',
        value:
          'Using AI and machine learning for enhanced data analytics, improving decision-making.',
        icon: AIPowered,
      },
      {
        text: 'Credit Scoring',
        value:
          'Offering innovative credit scoring solutions to assess and evaluate creditworthiness efficiently.',
        icon: CreditScoring,
      },
      {
        text: 'Customizable Solution',
        value:
          // eslint-disable-next-line quotes
          "Adapting solutions to precisely fit various industries and diverse businesses' needs.",
        icon: CustomizableSolution,
      },
    ],
    []
  );

  const products = useMemo(
    () => [
      {
        key: 'datahub',
        label: 'DataHub',
        className: 'bg-primary-700',
        description:
          'Connect to alternative data sources for data enrichment, credit risk management and fraud checks.',
        image: <Image src={DataServer} alt="datahub" width={519} height={515} />,
      },
      {
        key: 'decision-engine',
        label: 'Decision Engine',
        className: 'bg-primary-600',
        description:
          'Decision Engine: Low code solution for automating credit underwriting processes, knockout rules and seamless decisioning',
        image: <Image src={DecisionEngine} alt="decision-engine" width={519} height={515} />,
      },
      {
        key: 'fin-parse',
        label: 'FinParse',
        className: 'bg-primary-500',
        description:
          // eslint-disable-next-line quotes
          "Get more insights from your customer's financial bank statement in quick time.",
        image: <Image src={Finparse} alt="fin-parse" width={519} height={515} />,
      },
      {
        key: 'engage360',
        label: 'Engage360',
        className: 'bg-primary-400',
        description:
          'Constantly engage your internal and external customers, promote proactive communication and improve conversation rates for customers.',
        image: <Image src={Engage} alt="engage360" width={773.17} height={779} />,
      },
      {
        key: 'cimplaAI',
        label: 'CimplaAI',
        className: 'bg-primary-300',
        description:
          'Your marketplace for anything AI, AutoML, Custom Machine Learning Models and Large Language Models.',
        image: <Image src={ArtificialIntelligence} alt="cimplaAI" width={519} height={515} />,
      },
    ],
    []
  );

  const tabs = useMemo(
    () => [
      {
        key: 'finance',
        label: 'Finance',
        component: (
          <Card
            title="Finance"
            description="Decision Engine: Low code solution for automating credit underwriting processes, knockout rules and seamless decisioning"
            image={Finance}
            wrapperClass="bg-primary-100 mt-10"
          />
        ),
      },
      {
        key: 'insurance',
        label: 'Insurance',
        component: (
          <Card
            title="Insurance"
            description="Decision Engine: Low code solution for automating credit underwriting processes, knockout rules and seamless decisioning"
            image={Insurance}
            wrapperClass="bg-primary-100 mt-10"
          />
        ),
      },
      {
        key: 'health-care',
        label: 'Health Care',
        component: (
          <Card
            title="Health Care"
            description="Decision Engine: Low code solution for automating credit underwriting processes, knockout rules and seamless decisioning"
            image={HealthCare}
            wrapperClass="bg-primary-100 mt-10"
          />
        ),
      },
      {
        key: 'retail',
        label: 'Retail',
        component: (
          <Card
            title="Retail"
            description="Decision Engine: Low code solution for automating credit underwriting processes, knockout rules and seamless decisioning"
            image={CashCounter}
            wrapperClass="bg-primary-100 mt-10"
          />
        ),
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        key: 'q1',
        title: 'What is Cimpla?',
        description:
          'Cimpla is a low-code process automation, risk decisioning and underwriting platform, it is a powerful tool that can help you make smarter decisions faster.',
      },
      {
        key: 'q2',
        title: 'How secure is Cimpla in handling sensitive data?',
        description:
          'Cimpla is a low-code process automation, risk decisioning and underwriting platform, it is a powerful tool that can help you make smarter decisions faster.',
      },
      {
        key: 'q3',
        title: 'Do you offer training or resources for new users?',
        description:
          'Cimpla is a low-code process automation, risk decisioning and underwriting platform, it is a powerful tool that can help you make smarter decisions faster.',
      },
      {
        key: 'q4',
        title: 'How does Cimpla differ from other similar services?',
        description:
          'Cimpla is a low-code process automation, risk decisioning and underwriting platform, it is a powerful tool that can help you make smarter decisions faster.',
      },
      {
        key: 'q5',
        title: 'Is Cimpla suitable for small businesses or enterprises?',
        description:
          'Cimpla is a low-code process automation, risk decisioning and underwriting platform, it is a powerful tool that can help you make smarter decisions faster.',
      },
      {
        key: 'q6',
        title: 'What sets Cimpla apart in terms of innovation or technology?',
        description:
          'Cimpla is a low-code process automation, risk decisioning and underwriting platform, it is a powerful tool that can help you make smarter decisions faster.',
      },
    ],
    []
  );

  const [activeProduct, setActiveProduct] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const onPrevious = useCallback(() => {
    if (activeProduct > 0) {
      setActiveProduct(prev => prev - 1);
      setAnimationDirection('left');
    }
  }, [activeProduct]);

  const onNext = useCallback(() => {
    if (activeProduct < 3) {
      setActiveProduct(prev => prev + 1);
      setAnimationDirection('right');
    }
  }, [activeProduct]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-20">
        <section className="h-[668px] flex justify-center items-center hero-page">
          <div>
            <div>
              <p className="text-h1 font-bold text-black text-center">
                Transform Your Business with
              </p>
              <p className="text-h1 font-bold text-primary-400 text-center">
                Cimpla Low-Code Automation Platform
              </p>
              <p className="text-h7 font-normal text-grey-400 text-center">
                Streamline processes, make faster decisions, and drive business growth with Cimpla.
              </p>
            </div>

            <div className="flex gap-3 justify-center mt-10">
              <AppButton
                label="Get a Demo"
                type="submit"
                className="font-bold text-sz3 text-white !w-[174px]"
                icon={<ArrowRight className="ml-2 mt-1" />}
                actionDir="ltr"
              />

              <AppButton
                label="Learn More"
                type="submit"
                className="bg-white font-bold text-base border border-primary-400 text-primary-400 !w-[174px]"
                icon={<ArrowRight color={colors.primary400Color} className="ml-2 mt-1" />}
                actionDir="ltr"
              />
            </div>
          </div>
        </section>

        <section className="h-[544px]">
          <div className="flex justify-between gap-6">
            <p className="text-h4 font-semibold text-black text-left w-[602px]">
              In today's startup landscape, integrating AI isn't a choice—it's vital for maintaining
              a competitive edge.
            </p>

            <p className="text-h8 font-normal text-primary-400 text-left w-[598px]">
              Cimpla works by combining data, AI, and decisioning into a unified solution. You can
              connect your platform to a variety of data sources, including internal systems,
              external databases, and third-party data providers. Once your data is connected, you
              can use our platform to create and deploy sophisticated risk decisioning workflows.
            </p>
          </div>

          <div className="mt-10 flex justify-evenly gap-6">
            {metrics.map(item => (
              <div key={item.text}>
                <Title
                  title={item.text}
                  description={item.value}
                  titleClass="text-h0 font-bold text-primary-400 text-center"
                  descriptionClass="text-h8 font-normal text-black text-center"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="flex gap-32 bg-black h-[530px] rounded-2xl p-16">
          <div>
            <Title
              title="What we Offer"
              description="Crafting Tailored Solutions to Propel Startup Success in Dynamic Industries."
              titleClass="text-h3 font-bold text-white text-left"
              descriptionClass="text-h7 font-normal text-primary-100 text-left"
            />
          </div>

          <div>
            <div className="flex gap-3">
              {offers.slice(0, 2).map(item => (
                <div key={item.text}>
                  <Image key={item.text} src={item.icon} alt={item.text} width={65} height={65} />
                  <div className="pt-3">
                    <p className="text-h7 font-bold text-white text-left">{item.text}</p>
                    <p className="text-h9 font-normal text-primary-100 text-left">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-10">
              {offers.slice(2, 4).map(item => (
                <div key={item.text}>
                  <Image key={item.text} src={item.icon} alt={item.text} width={65} height={65} />
                  <div className="pt-3">
                    <p className="text-h7 font-bold text-white text-left">{item.text}</p>
                    <p className="text-h9 font-normal text-primary-100 text-left">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div>
          <div className='flex justify-center'>
             <div className="flex justify-between mt-20 w-[1205px]">
            <Title
              title="Our Products"
              description="Access Our Freshest News and Updates"
              titleClass="text-h3 font-semibold text-primary-700 text-left"
              descriptionClass="text-h7 font-normal text-grey-400 text-left"
            />

            <div className="flex gap-10">
              <Image
                src={LeftArrow}
                alt="left-arrow"
                width={60}
                height={60}
                className="cursor-pointer navigation-arrow transform transition-transform ease-in-out duration-300 hover:scale-110"
                onClick={onPrevious}
              />
              <Image
                src={RightArrow}
                alt="right-arrow"
                width={60}
                height={60}
                className="cursor-pointer navigation-arrow transform transition-transform ease-in-out duration-300 hover:scale-110"
                onClick={onNext}
              />
            </div>
          </div>
          </div>

          <div className="flex justify-center items-center">
            <div>
              {/* {products.map(item => ( */}
              <div
                className={`flex gap-16 items-center justify-between h-[595px] ${
                  products[activeProduct].className
                } p-10 mt-10 rounded-3xl w-[1205px] ${
                  animationDirection === 'left' ? 'animate-left' : 'animate-right'
                }`}
              >
                <Title
                  title={products[activeProduct].label}
                  description={products[activeProduct].description}
                  titleClass="text-h5 font-semibold text-primary-100 text-left"
                  descriptionClass="text-7 font-normal text-primary-100 text-left"
                />

                <div>{products[activeProduct].image}</div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <section>
          <Title
            title="Use Cases"
            description="How Cimpla Utilizes AI to Revolutionize Efficiency Across Various Industries"
            titleClass="text-h3 font-semibold text-primary-700 text-center pt-20"
            descriptionClass="text-h8 font-normal text-grey-400 text-center"
          />
          <div>
            <Tabs tabIndex={tabIndex} onClick={setTabIndex} items={tabs} wrapperClass="mt-16" />
          </div>
        </section>

        <section className="mt-36">
          <Title
            appendTitle={() => (
              <h4 className="font-semibold text-h3 text-primary-700 text-center">
                Got Questions?{' '}
                <span className="font-semibold text-h3 text-primary-400 text-center">
                  Discover <br /> Everything About Cimpla Here!
                </span>
              </h4>
            )}
            description="Explore Answers to Common Queries About Cimpla's Services and Offering"
            titleClass="text-h3 font-semibold text-primary-700 text-center pt-20"
            descriptionClass="text-h8 font-medium text-primary-600 text-center"
          />

          <FAQ data={faqs} />
        </section>

        <section className=" flex justify-center mt-44">
          <div className="flex items-center justify-center w-[1280px] h-auto network bg-black py-16 rounded-2xl">
            <div>
              <Title
                appendTitle={() => (
                  <h4 className="text-h3 font-semibold text-white text-center">
                    “Join our expert-driven <br /> community for business success.”
                  </h4>
                )}
                description="Join a Network of Industry Leaders Leveraging Our Cutting-edge Solutions to Transform Business Operations and Decision-making Processes."
                descriptionClass="text-h8 font-normal text-primary-100  w-[907px] text-center pt-7"
              />

              <div className="flex gap-5 mt-16 justify-center">
                <AppButton
                  label="Request a Demo"
                  type="submit"
                  className="font-bold text-sz3 text-white !w-[174px]"
                  icon={<ArrowRight className="ml-2 mt-1" />}
                  actionDir="ltr"
                />

                <AppButton
                  label="Learn More"
                  type="submit"
                  className="bg-transparent font-bold text-base border border-white text-white !w-[174px]"
                  icon={<ArrowRight color={colors.white} className="ml-2 mt-1" />}
                  actionDir="ltr"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40">
          <Title
            appendTitle={() => (
              <h4 className="font-semibold text-h3 text-primary-400 text-center">
                Stay in the Know: <br />{' '}
                <span className="font-semibold text-h3 text-primary-700 text-center">
                  Subscribe for Exclusive Updates and Insights
                </span>
              </h4>
            )}
            description="Access Our Freshest News and Updates"
            titleClass="text-h3 font-semibold text-primary-700 text-center pt-20"
            descriptionClass="text-h8 font-medium text-primary-300 text-center"
          />
        </section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
