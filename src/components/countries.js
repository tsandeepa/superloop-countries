import { motion } from 'framer-motion';

const Countries = ({ countries, search }) => {

  // const variants = {
  //   visible: i => ({
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delay: i * 0.1,
  //     },
  //   }),
  //   hidden: { opacity: 0, scale: 0.8 },
  //   hover: { scale: 1.06 },
  //   tap: { scale: 0.9 }
  // }

  return (
    <>
      {
        countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())).map((country, i) => (
          <motion.div key={i} className='group hover:bg-slate-500 transition duration-500 ease-in-out'>
            <motion.div className='flex '>
              <div className='flex justify-center w-28'>
                <img className='w-[60px] h-[60px] rounded-md object-cover group-hover:rounded-[50px] transition-all ' src={country.flags.svg} alt="" />
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