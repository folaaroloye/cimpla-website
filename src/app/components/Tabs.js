import { useCallback, useEffect, useState } from 'react';
import AppButton from './AppButton';

const Tabs = ({ items, wrapperClass, tabIndex, onClick }) => {
  const [activeTab, setActiveTab] = useState(tabIndex || 0);

  useEffect(() => {
    setActiveTab(tabIndex || 0);
  }, [tabIndex]);

  const handleTabClick = useCallback(
    index => {
      setActiveTab(index);
      onClick?.(index);
    },
    [onClick]
  );

  return (
    <div className={wrapperClass}>
      <div>
        <div className="flex justify-center">
          {items.map((tab, index) => (
            <AppButton
              key={tab.key}
              label={tab.label}
              // type="submit"
              onClick={() => handleTabClick(index)}
              className={` font-bold text-base !w-[175px]
              ${
            tabIndex === index
              ? 'text-white bg-primary-400'
              : 'border border-primary-700 text-primary-700  bg-white'
            }
              ${index !== 0 ? 'ml-16' : ''}
              `}
            />
          ))}
        </div>
      </div>

      <div className={`flex justify-center ${items[activeTab].className ?? ''}`}>
        {items[activeTab].component}
      </div>
    </div>
  );
};

export default Tabs;
