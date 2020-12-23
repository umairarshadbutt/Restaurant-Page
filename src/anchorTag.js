const anchorTag = (text, anchorClass) => {
    const anchor = document.createElement('li');
    const anchorTagElement = document.createElement('a');
    anchorTagElement.setAttribute('href', '#');
    anchorTagElement.setAttribute('data-id', text);
    anchorTagElement.innerText = text;
    anchorTagElement.setAttribute('class', 'nav-link active');
    anchor.appendChild(anchorTagElement);
    anchor.setAttribute('class', anchorClass);
    return anchor;
  };
  
  export default anchorTag;