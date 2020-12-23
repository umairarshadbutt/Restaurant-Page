import _ from 'lodash';
import home from './home';
import contact from './contact'
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log("test")
  // home();
  contact();
    return element;
  }
  
  document.body.appendChild(component());