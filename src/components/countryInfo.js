import { motion } from 'framer-motion';
import CountryInfoEmpty from './countryInfoEmtry';

const CountryInfo = ({ country, setActiveCountry }) => {
  let currency = null;

  if (country) {
    console.log(country);
  }

  if (country) {
    currency = Object.values(country?.currencies);

  } else {
    return <CountryInfoEmpty />
  }

  return (
    <>
      {
        country && <motion.div className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="absolute top-0" onClick={() => setActiveCountry(null, null)}>Close</button>
          <h3 className='text-4xl mb-8'> {country?.name.common} </h3>
          <p>Currency Name: {currency[0].name}</p>
          <p>Currency Symbol: {currency[0].symbol}</p>
          <p>Flag & Coat of arms</p>
          <img className="w-[70%] mx-auto  h-[32vh] my-8 object-contain" src={country.flags.svg} alt="" />
          <img className="absolute top-0 w-full h-full object-cover z-[-1] opacity-40 blur-[115px]" src={country.flags.svg} alt="" />
          <div className='h-24'>
            {
              country.coatOfArms.svg && <img className="w-full h-full object-contain" src={country.coatOfArms.svg} alt="" />
            }
          </div>

          <p>What side of the road they drive on</p>
        </motion.div>
      }
    </>
  );
}

export default CountryInfo;
