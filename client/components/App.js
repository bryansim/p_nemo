import React from 'react';
import './index.css';

import { Home } from './Home';
import { Header } from './Header';

export class App extends React.Component {
  render() {
  return ( 
	  [
	  <div>
	  <Header/>
	  </div>,
	  <div>
	  <Home/>
	  </div>
	  ]
     );
  }
}
