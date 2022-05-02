//module for initial page-load
const loadPage = () => {
  //create DOM
  const body = document.querySelector('body')
  const content = document.querySelector('#content')
  const header = document.createElement('header')
  const main = document.createElement('div')
  const footer = document.createElement('footer')
  //create DOM content
  const heading = document.createElement('h1')
  const para = document.createElement('p')
  const creator = document.createElement('a')
  const nav = document.createElement('nav')
  const tabContainer = document.createElement('ul')
  const home = document.createElement('li')
  const menu = document.createElement('li')
  const contact = document.createElement('li')

  main.id = main;
  home.id = home;
  menu.id = menu;
  contact.id = contact;

  home.classList.add('tab')
  menu.classList.add('tab')
  contact.classList.add('tab')

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  content.appendChild(main)
  body.prepend(header)
  content.after(footer)

  header.appendChild(nav)
  nav.appendChild(tabContainer)
  tabContainer.appendChild(home)
  tabContainer.appendChild(menu)
  tabContainer.appendChild(contact)
  
  heading.textContent = 'cafe bilgewater';
  para.textContent = 'A league of legends themed gaming cafe set in runeterra\'s very own bilgewater!';
  creator.textContent = 'website created by Johnny Huang';
  creator.href = 'https://github.com/jhuang007007';

  header.appendChild(heading);
  main.appendChild(para);
  footer.appendChild(creator);
}

export {
  loadPage
}