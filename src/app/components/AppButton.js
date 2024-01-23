import Link from 'next/link';
import { useMemo } from 'react';

const AppButton = ({
  type = 'button',
  label,
  icon,
  className,
  route,
  isLoading,
  loadingClassName,
  disabled,
  actionDir = 'rtl', // 'rtl' | 'ltr'
  onClick,
  ...props
}) => {
  const isRTL = useMemo(() => actionDir === 'rtl', [actionDir]);
  return !route ? (
    <button
      type={type}
      className={`btn h-[3rem] flex justify-center items-center w-full rounded-md overflow-hidden outline-none bg-primary-400 ${
        disabled ? 'opacity-25' : ''
      } ${className}  ${!isRTL ? 'flex-row-reverse' : ''}`}
      disabled={disabled}
      onClick={onClick || null}
      {...props}
    >
      {isLoading ? (
        <div
          className={`animate-spin w-6 h-6 border-4 rounded-full border-b-white/20 border-white ${
            loadingClassName ?? ''
          }`}
        />
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </button>
  ) : (
    <Link href={route}>
      <button
        type="button"
        className={`flex justify-center items-center outline-none bg-transparent text-base font-bold focus:outline-none w-full overflow-hidden ${className} ${
          !isRTL ? 'flex-row-reverse' : ''
        }`}
        disabled={disabled}
        {...props}
      >
        {icon}
        {label}
      </button>
    </Link>
  );
};

export default AppButton;
