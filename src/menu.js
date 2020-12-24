const menu = () => {
  const content = document.querySelector('div#content');
  content.innerHTML = '';
  const div = document.createElement('div');
  div.setAttribute('class', 'text-white menu jumbotron d-flex  min-vh-100');
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'container text-center');
  p1.innerText = 'Wow... You are at Pakistani Restaurant Page';
  const dish1 = document.createElement('img');
  dish1.setAttribute('src', '../dist/assets/images/pakistan_food.jpg');
  dish1.setAttribute('alt', 'Pakistani Food');
  dish1.setAttribute('alt', 'Pakistani Food');
  dish1.setAttribute('class', 'image-meal');
  div.appendChild(dish1);
  const dish2 = document.createElement('img');
  dish2.setAttribute('src', '../dist/assets/images/pakistan_food.jpg');
  dish2.setAttribute('alt', 'Pakistani Food');
  dish2.setAttribute('alt', 'Pakistani Food');
  dish2.setAttribute('class', 'image-meal');

  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.setAttribute('class', 'container text-center');
  p2.innerText = 'Wow... You are at Pakistani Restaurant Page';
  div.appendChild(dish2);
  div.appendChild(p2);
  content.appendChild(div);
};
export default menu;