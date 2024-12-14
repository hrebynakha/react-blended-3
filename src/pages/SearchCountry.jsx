import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchByRegion(region);
        setCountries(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSearch = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSearch={handleSearch} />
        {error&&<Heading title={error} bottom />}
        <CountryList countries={countries} />
        {loading&&<Loader/>}
      </Container>
    </Section>
  );
};

export default SearchCountry;
