import anchorTag from './anchorTag'
const contact = () => {
    const content = document.querySelector('div#content');
    content.innerHTML = '';
    const div = document.createElement('div');
    div.setAttribute('class', 'text-white jumbotron contact align-items-center min-vh-100');
    const p = document.createElement('p');
    p.setAttribute('class', 'container text-center');
    p.innerText = 'Contact Us Using the Social Media';
    div.appendChild(p);
    const brakLine = document.createElement('br');
    div.appendChild(brakLine);
    const nav = document.createElement('ul');
  nav.setAttribute('class', 'nav nav-tabs justify-content-center');

  nav.appendChild(anchorTag('Instagram', 'fa fa-instagram'));
  nav.appendChild(anchorTag('Twitter', 'fa fa-twitter'));
  nav.appendChild(anchorTag('Facebook', 'fa fa-facebook'));

  div.appendChild(nav);

    content.appendChild(div);
  };
  export default contact;