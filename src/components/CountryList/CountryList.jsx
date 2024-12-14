import { Link } from 'react-router-dom';

import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';
const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <Link to={`/country/${country.id}`}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
export default CountryList;
