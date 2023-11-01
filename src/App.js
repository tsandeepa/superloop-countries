import debounce from 'lodash.debounce';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/countries';
import CountryInfo from './components/countryInfo';
import { CiSearch } from 'react-icons/ci'
import CountryInfoEmpty from './components/countryInfoEmpty';

function App() {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    setLoading(true)
    const fetchCountries = async () => {
      try {
        const response = await axios.get(url);
        setCountries(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchCountries()
  }, []);

  const debouncedSetTest = debounce((value) => setSearch(value), 200);

  const setActiveCountry = (country, i) => {
    setSelectedCountry(country)
    setActiveItem(i)
  }

  return (
    <div className="App flex-1">
      <div className='lg:flex gap-10 mx-auto'>
        <div className='flex-1 lg:p-0 px-3'>
          <div className='flex flex-col justify-center py-10 h-[20vh]'>
            <h1 className='lg:text-5xl text-3xl text-white'>Country Select</h1>
            <p className="text-slate-400">Select or search for a country for details. </p>
          </div>
          <div className='relative mb-8'>
            <CiSearch className='absolute top-1/2 -translate-y-1/2 w-14 text-xl' />
            <input placeholder='Search country by name' className='w-full text-white p-4 pl-12 bg-slate-800 rounded-full text-lg' type="text" onChange={(e) => debouncedSetTest(e.target.value)} />
          </div>
          <div className='flex flex-col lg:gap-4 py-4 h-[calc(70vh-100px)] pr-3 overflow-y-auto border-b border-slate-700'>
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
        {
          selectedCountry ? <CountryInfo country={selectedCountry} setActiveCountry={setActiveCountry} /> : <CountryInfoEmpty />
        }
      </div>
    </div>
  );
}

export default App;
