import { useCallback, useState } from 'react';
import CloseIcon from '../assets/icons/CloseIcon';
import PlusIcon from '../assets/icons/PlusIcon'; // Assuming you have a PlusIcon component

const FAQ = ({ data, activeIndex, wrapperClass }) => {
  const [openIndex, setOpenIndex] = useState(activeIndex || -1);

  const handleClick = useCallback(index => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  }, []);

  return (
    <div className="flex justify-center mt-16 cursor-pointer">
      <div>
        {data.map((item, index) => (
          <div
            key={item.key || item.title}
            className={`relative cursor-pointer ${wrapperClass || ''}`}
          >
            <button
              className={`flex justify-between outline-none border-b transition duration-300 ease-in-out w-[830px] cursor-pointer ${
                openIndex === index
                  ? 'border-primary-100 bg-primary-400 p-5 h-auto rounded-lg'
                  : 'p-5 h-auto'
              }`}
              onClick={() => handleClick(index)}
            >
              <div>
                <h5
                  className={`text-h8 font-medium transition duration-300 text-left ${
                    openIndex === index ? 'text-primary-100 mb-2' : 'text-primary-700'
                  }`}
                >
                  {item.title}
                </h5>
                {openIndex === index ? (
                  <p className=" text-h10 font-medium text-primary-100 text-left">
                    {item.description}{' '}
                  </p>
                ) : null}
              </div>
              {openIndex === index ? <CloseIcon /> : <PlusIcon />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
