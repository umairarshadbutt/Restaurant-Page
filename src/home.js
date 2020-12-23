import contact from './contact';
import menu from './menu';
import anchorTag from './anchorTag';


const home1 = () => {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
  const div = document.createElement('div');
  div.setAttribute('class', 'text-white jumbotron d-flex align-items-center min-vh-100');
  const p = document.createElement('p');
  p.setAttribute('class', 'container text-center');
  p.innerText = 'Wow... You are at Pakistani Restaurant Page';
  div.appendChild(p);
  content.appendChild(div);
};
const homeClick = () => {
  home1();
};
const menuClick = () => {
  menu();
};

const contactClick = () => {
  contact();
};
const home = () => {
  const header = document.querySelector('header');
  const headerH4 = document.createElement('h4');
  headerH4.setAttribute('class', 'd-flex justify-content-between align-items-center px-5');

  const nav = document.createElement('ul');
  nav.setAttribute('class', 'nav nav-tabs');

  nav.appendChild(anchorTag('Home', 'nav-item'));
  nav.appendChild(anchorTag('Menu', 'nav-item'));
  nav.appendChild(anchorTag('Contact', 'nav-item'));
  header.appendChild(nav);
  const menuAnchor = document.querySelector('a[data-id="Menu"]');
  menuAnchor.addEventListener('click', homeClick);

  const aboutAnchor = document.querySelector('a[data-id="About"]');
  aboutAnchor.addEventListener('click', menuClick);

  const contactAnchor = document.querySelector('a[data-id="Contact"]');
  contactAnchor.addEventListener('click', contactClick);
};


export default home;