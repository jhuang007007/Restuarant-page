//module for initial page-load
const loadPage = () => {
  const content = document.querySelector('#content')
  const header = document.createElement('section')
  const main = document.createElement('section')
  const footer = document.createElement('section')

  header.id = header
  main.id = main
  footer.id = footer

  content.appendChild(header)
  content.appendChild(main)
  content.appendChild(footer)

  const heading = document.createElement('h1')
  const para = document.createElement('p')
  const name = document.createElement('a')
  
  heading.textContent = 'cafe bilgewater';
  para.textContent = 'A league of legends themed gaming cafe set in runeterra\'s very own bilgewater!';
  name.textContent = 'website created by Johnny Huang';

  header.appendChild(heading);
  main.appendChild(para);
  footer.appendChild(name);
}

export {
  loadPage
}