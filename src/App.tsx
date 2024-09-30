import { FC } from 'react';
import Main from './Main/Main';

interface IAppProps {
  numPlaces: number;
}

const App: FC<IAppProps> = ({ numPlaces }) => <Main numPlaces={numPlaces} />;

export default App;
