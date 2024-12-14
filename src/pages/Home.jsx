import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import Country from './Country';
import CountryList from '../components/CountryList/CountryList';
import { getCountries } from '../service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountries();
        setCountries(res);
      } catch {
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};
export default Home;
