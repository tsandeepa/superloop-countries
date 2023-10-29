import debounce from 'lodash.debounce';
import './App.css';
import { data } from './data';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Countries from './components/countries';
import Layout from './components/layout';



function App() {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const url = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(url);
        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchCountries()
  }, []);

  const debouncedSetTest = debounce((value) => setSearch(value), 200);

  return (
    <div className="App flex-1">
      <div className='flex max-w-[700px] mx-auto bg-slate-700'>
        <div className='flex-1'>
          <div className='text-left'>
            <input placeholder='Search country name' className='w-full text-black p-4' type="text" onChange={(e) => debouncedSetTest(e.target.value)} />
          </div>
          <div className='flex flex-col gap-4 py-4 h-[calc(70vh-100px)]  overflow-y-auto'>
            <Countries countries={countries} search={search} />
          </div>
        </div>
        <div className='flex-1 bg-slate-500'>
          <h2>Info</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
