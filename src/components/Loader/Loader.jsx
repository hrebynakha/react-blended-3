import css from './Loader.module.css';
import { BeatLoader } from 'react-spinners';
const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BeatLoader />
    </div>
  );
};

export default Loader;
