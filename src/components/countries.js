import { motion } from 'framer-motion';
import { useState } from 'react';
import CountriesLoading from './countriesLoading';

const Countries = ({ countries, search, setActiveCountry, activeItem, loading }) => {

  const variants = {
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        ease: "linear",
      },
    }),
    hidden: { opacity: 0, scale: 0.9 },
    tap: { scale: 0.9 }
  }

  return (
    <>
      {
        !loading ?
          countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())).map((country, i) => (
            <motion.div key={i} className={`group py-2 rounded-full cursor-pointer border-solid border-2 border-transparent hover:border-slate-700  ${i === activeItem ? 'bg-slate-600' : ''}`}
              onClick={() => setActiveCountry(country, i)}
            >
              <motion.div className='flex'
                variants={variants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <div className='flex justify-center w-28 relative left-[-16px]'>
                  <img className='w-[60px] h-[60px] rounded-full object-cover group-hover:rounded-[50px] transition-all duration-500 ease-in-out' src={country.flags.svg} alt="" />
                </div>
                <div className='flex text-xl items-center text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]'>
                  {country.name.common}
                </div>
              </motion.div>
            </motion.div>
          )) : <CountriesLoading />
      }
    </>
  );
}

export default Countries;