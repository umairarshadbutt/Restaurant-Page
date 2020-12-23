import _ from 'lodash';
import home from './home';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    home();
    return element;
  }
  
  document.body.appendChild(component());