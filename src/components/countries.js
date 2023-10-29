import { motion } from 'framer-motion';
import { useState } from 'react';

const Countries = ({ countries, search, setSelectedCountry }) => {

  const [activeItem, setActiveItem] = useState(null);

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

  const setActiveCountry = (country, i) => {
    setSelectedCountry(null)
    setSelectedCountry(country)
    setActiveItem(i)
  }

  return (
    <>
      {
        countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())).map((country, i) => (
          <motion.div key={i} className={`group py-2 cursor-pointer    hover:border-sky-200  ${i === activeItem ? 'bg-slate-600' : ''}`}
            onClick={() => setActiveCountry(country, i)}
          >
            <motion.div className='flex'
              variants={variants}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              <div className='flex justify-center w-28'>
                <img className='w-[60px] h-[60px] rounded-full object-cover group-hover:rounded-[50px] transition-all duration-500 ease-in-out' src={country.flags.svg} alt="" />
              </div>
              <div className='flex items-center text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]'>
                {country.name.common}
              </div>
            </motion.div>
          </motion.div>
        ))
      }
    </>
  );
}

export default Countries;