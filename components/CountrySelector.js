import Stats from '../components/Stats';
import useStats from '../utils/useStats';
import { useState } from 'react';

export default function CountrySelector() {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('USA')
  if (!countries) return <p>Loading...</p>;
  return (
    <div>
      <p>Currently Showing {selectedCountry}</p>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value)
        }}>
        {Object.entries(countries.countries).map(([country, code], index) => {
          return <option key={index} value={countries.iso3[code]}>{country}</option>
        })}
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
    </div>
  )
}
