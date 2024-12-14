import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import { getCountries } from '../service/countryApi';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getCountries();
        setCountries(res);
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {error && <Heading title={error} bottom />}
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
export default Home;
