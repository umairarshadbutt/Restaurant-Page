const home = () => {
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
  export default home;