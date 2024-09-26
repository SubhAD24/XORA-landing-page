import React from 'react';
import { Element } from 'react-scroll';
import { details, features } from '../Constants';
import Button from './Componesnts/Button'; // Fix path to Button component

const Features = () => {
  return (
    <section>
      <Element name='features'>
        <div className='container'>
          <div className='relative flex border-2 md:flex-wrap flex-nowrap border-s3 rounded-7xl md:overflow-auto max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3'>
            {features.map(({ id, icon, caption, text, title, Button: buttonProps }) => (
              <div
                key={id}
                className='relative px-5 pb-5 z-2 md:px-10 md:pb-10 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'
              >
                <div className='flex items-start justify-start w-full'>
                  <div className='flex flex-col items-center justify-center mb-12 -ml-3 '>
                    <div className='w-0.5 h-16 bg-s3' />
                    <img src={icon} className='object-contain size-28' alt={title} />
                  </div>
                </div>
                <p className='mb-5 caption max-md:mb-6 '>{caption}</p>

                
                <h2 className='flex-shrink-0 max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5'>
                  {title}
                </h2>

                <p className='mb-11 body-1 max-md:mb-8 max-md:body-3 '>{text}</p>

                <Button icon={buttonProps.icon}>{buttonProps.title}</Button>
              </div>
            ))}

            {/* Centering the ul and li items */}
            <ul className='relative flex justify-center items-center w-full px-[5%] border-2 border-s3 rounded-7xl max-md:hidden'>
              <div className='absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10 ' />
              {details.map(({ id, icon, title }) => (
                <li
                  key={id}
                  className='relative flex flex-col items-center justify-center px-4 pt-16 pb-14'
                >
                  <div className='flex items-center justify-center mx-auto mb-3 transition-all duration-500 border-2 rounded-full border-s2 hover:border-s4 shadow-500 size-20'>
                    <img
                      src={icon}
                      alt={title}
                      className='z-10 object-contain size-17/20'
                    />
                  </div>
                  <h3 className='relative mx-auto my-0 text-center uppercase z-2 max-w-30 base-small '>
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
