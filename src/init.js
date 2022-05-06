//module for initial page-load
const loadPage = () => {
  //select starter html
  const body = document.querySelector('body')
  const content = document.querySelector('#content')
  //create elements
  const header = document.createElement('header')
  const main = document.createElement('div')
  const footer = document.createElement('footer')
  const homeTitle = document.createElement('div')
  const menuTitle = document.createElement('div')
  const contactTitle = document.createElement('div')
  const homeDiv = document.createElement('div')
  const menuDiv = document.createElement('div')
  const contactDiv = document.createElement('div')
  const homeContent = document.createElement('div')
  const menuContent = document.createElement('div')
  const contactContent = document.createElement('div')
  const heading = document.createElement('h1')
  const creator = document.createElement('a')
  const nav = document.createElement('nav')
  const tabContainer = document.createElement('ul')
  const home = document.createElement('li')
  const menu = document.createElement('li')
  const contact = document.createElement('li')
  const disclaimer = document.createElement('p')
  const chef = document.createElement('img')
  //add ids
  main.id = 'main';
  home.id = 'home';
  menu.id = 'menu';
  contact.id = 'contact';
  chef.id ='chef';
  //add classes
  home.classList.add('tab')
  menu.classList.add('tab', 'grayscale')
  contact.classList.add('tab', 'grayscale')
  homeDiv.classList.add('home-div', 'content-container')
  menuDiv.classList.add('menu-div', 'content-container')
  contactDiv.classList.add('contact-div', 'content-container')
  homeContent.classList.add('content')
  menuContent.classList.add('content')
  contactContent.classList.add('content')
  homeTitle.classList.add('title', 'home-title')
  menuTitle.classList.add('title', 'menu-title')
  contactTitle.classList.add('title', 'contact-title')
  //append to DOM
  body.appendChild(nav)
  body.appendChild(homeTitle)
  body.appendChild(homeDiv)
  homeDiv.appendChild(homeContent)
  body.appendChild(menuTitle)
  body.appendChild(menuDiv)
  menuDiv.appendChild(menuContent)
  body.appendChild(contactTitle)
  body.appendChild(contactDiv)
  contactDiv.appendChild(contactContent)
  content.appendChild(main)
  body.appendChild(chef)
  body.prepend(header)
  content.after(footer)
  nav.appendChild(tabContainer)
  tabContainer.appendChild(home)
  tabContainer.appendChild(menu)
  tabContainer.appendChild(contact) 
  header.appendChild(heading);
  footer.appendChild(creator);
  footer.appendChild(disclaimer);
  //add text content
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';
  heading.textContent = 'Kench Cuisine';
  disclaimer.textContent = 'This website was created under Riot Games\' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project. \'Kench Cuisine\' is not a real business entity.';
  creator.textContent = '-link to creator-';
  creator.href = 'https://github.com/jhuang007007';
  chef.src = '../src/images/chef-kench-home.png';
  chef.style.animation = '1s popAnimation linear'; //chef animation
  homeTitle.textContent = 'Home';
  menuTitle.textContent = 'Menu';
  contactTitle.textContent = 'Contact';
  homeContent.textContent = 'MONDAY - SUNDAY 1:00AM - 8:00AM'
}

export {
  loadPage
}