import { useState } from "react";
import { motion } from 'framer-motion';


const CountryInfo = ({ country }) => {
  let currency = null;

  if (country) {
    console.log(country.coatOfArms);
  }

  if (country) {
    currency = Object.values(country?.currencies);

  } else {
    return <div> <h3>Select Country</h3></div>
  }

  return (
    <>
      {
        country && <motion.div className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Name : {country?.name.common} </p>
          <p>Currency Name: {currency[0].name}</p>
          <p>Currency Symbol: {currency[0].symbol}</p>
          <p>Flag & Coat of arms</p>
          <img className="w-[70%] mx-auto" src={country.flags.svg} alt="" />
          <img className="absolute top-0 w-full h-full object-cover z-[-1] opacity-40 blur-[115px]" src={country.flags.svg} alt="" />
          {
            country.coatOfArms.svg && <img className="w-full h-[100px] object-contain" src={country.coatOfArms.svg} alt="" />
          }
          <p>What side of the road they drive on</p>
        </motion.div>
      }

    </>
  );
}

export default CountryInfo;
