import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai'

const CountryInfo = ({ country, setActiveCountry }) => {
  let currency = null;

  if (country) {
    currency = Object.values(country?.currencies);
  }

  return (
    <div className='flex flex-1 items-center lg:relative fixed top-0 left-0 w-full h-screen bg-black lg:bg-transparent'>
      {
        country && <motion.div className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="absolute lg:top-[50px] top-4  lg:right-auto right-0 text-xl lg:text-slate-400 text-slate-200 lg:left-1/2 -translate-x-1/2 border lg:border-slate-500 border-slate-300 p-3 lg:p-3 rounded-full hover:text-slate-300 hover:border-slate-400" onClick={() => setActiveCountry(null, null)}><AiOutlineClose /></button>
          <h3 className='text-4xl mb-9'> {country?.name.common} </h3>
          <div className='flex flex-col lg:flex-row justify-center lg:gap-9 gap-2'>
            <div>
              <p className='text-slate-400 uppercase'>Currency</p>
              <p>{currency[0].name}</p>
            </div>
            <div className='hidden lg:block border-r border-slate-500'></div>
            <div>
              <p className='text-slate-400 uppercase'>Symbol</p>
              <p className='text-xl'>{currency[0].symbol}</p>
            </div>
            <div className='hidden lg:block border-r border-slate-500'></div>
            <div>
              <p className='text-slate-400 uppercase'>Drives On</p>
              <p className='capitalize'>{country.car.side}</p>
            </div>
          </div>
          <img className="w-[70%] mx-auto  h-[32vh] my-8 object-contain" src={country.flags.svg} alt="" />
          <img className="absolute top-0 w-full h-full object-cover z-[-1] opacity-40 blur-[115px]" src={country.flags.svg} alt="" />
          <div className='h-24'>
            {
              country.coatOfArms.svg && (
                <>
                  <img className="w-full h-full object-contain" src={country.coatOfArms.svg} alt="" />
                  <p className='mt-2 text-slate-400 uppercase'>Coat of arms</p>
                </>
              )
            }
          </div>
        </motion.div>
      }
    </div>
  );
}

export default CountryInfo;
