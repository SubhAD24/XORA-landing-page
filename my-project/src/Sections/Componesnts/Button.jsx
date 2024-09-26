import React from 'react';
import clsx from 'clsx';
import Marker from './Marker';

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
  const renderInner = () => (
    <span className='relative flex items-center min-h-16 px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
      <span className='absolute -left-1'>
        <Marker fill={markerFill} />
      </span>
      {icon && (
        <img src={icon} alt="circle" className="size-10 mr-5 object-contain z-10" />
      )}
      <span className='relative z-2 font-poppins base-bold text-p1 uppercase'>{children}</span>
      <span className="glow-before glow-after" /> 
    </span>
  );

  return href ? (
    <a
      className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}
      href={href}
    >
      {renderInner()}
    </a>
  ) : (
    <button
      className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}
      onClick={onClick}
    >
      {renderInner()}
    </button>
  );
};

export default Button;
