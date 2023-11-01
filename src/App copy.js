import debounce from 'lodash.debounce';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/countries';
import CountryInfo from './components/countryInfo';
import { CiSearch } from 'react-icons/ci'

function App() {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [countryMobileView, setCountryMobileView] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    setLoading(true)
    const fetchCountries = async () => {
      try {
        const response = await axios.get(url);
        setCountries(response.data);
        // console.log(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchCountries()
  }, []);

  const debouncedSetTest = debounce((value) => setSearch(value), 200);

  const setActiveCountry = (country, i, visibility) => {
    setSelectedCountry(country)
    setActiveItem(i)
    if (!visibility) {
      setCountryMobileView(true)
    }
  }

  return (
    <div className="App flex-1">
      <div className='lg:flex gap-10 mx-auto'>
        <div className='flex-1'>
          <div className='py-10 text-center h-[20vh]'>
            <h1 className='text-5xl text-white'>Country Select</h1>
            <p className="text-slate-200">Select or search for a country for details. </p>
          </div>
          <div className='relative mb-8'>
            <CiSearch className='absolute top-1/2 -translate-y-1/2 w-14 text-xl' />
            <input placeholder='Search country name' className='w-full text-white p-4 pl-12 bg-slate-800 rounded-full text-lg' type="text" onChange={(e) => debouncedSetTest(e.target.value)} />
          </div>
          <div className='flex flex-col gap-4 py-4 h-[calc(70vh-100px)] pr-3 overflow-y-auto border-b border-slate-700'>
            <Countries
              countries={countries}
              search={search}
              setActiveCountry={setActiveCountry}
              activeItem={activeItem}
              loading={loading}
            />
          </div>
          <div className="flex justify-center items-center py-7 h-[10vh] text-slate-300">
            <span>Copyright © 2023</span>
          </div>
        </div>
        <div className={`flex-1 ${countryMobileView ? 'hidden' : ''}`}>
          <div className=" flex items-center lg:relative fixed top-0 left-0 w-full h-screen bg-black lg:bg-transparent">
            <CountryInfo country={selectedCountry} setActiveCountry={setActiveCountry} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
