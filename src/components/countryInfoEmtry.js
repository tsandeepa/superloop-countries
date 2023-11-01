import { motion } from 'framer-motion';
import { BsFlag } from 'react-icons/bs'

const CountryInfoEmpty = () => {
  return (
    <motion.div className="hidden lg:flex flex-col justify-center items-center max-w-[70%] mx-auto rounded-sm p-5 border-slate-800 flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <BsFlag className='text-4xl mb-4 text-slate-500' />
      <h3 className="text-slate-500 text-2xl font-normal">Country Details</h3>
      <p className="text-slate-600">Country details will be display here once selected.</p>
    </motion.div>
  );
}

export default CountryInfoEmpty;