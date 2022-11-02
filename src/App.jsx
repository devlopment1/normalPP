import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './navigation/Root';
import DestinationPage from './Pages/DestinationPage/DestinationPage';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Root />
    </div>
  );
};

export default App;
