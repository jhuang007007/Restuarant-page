import kenchHome from './images/chef-kench-home.png'
import junglersDelight from './images/junglers-delight.png'
import baronNashor from './images/baron-nashor.png'

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
  const menuContainerOne = document.createElement('div')
  const menuItemOne = document.createElement('img')
  const menuItemDescriptionContainerOne = document.createElement('div')
  const menuDescriptionOne = document.createElement('p')
  const menuItemNameOne = document.createElement('h2')
  const menuContainerTwo = document.createElement('div')
  const menuItemTwo = document.createElement('img')
  const menuItemDescriptionContainerTwo = document.createElement('div')
  const menuDescriptionTwo = document.createElement('p')
  const menuItemNameTwo = document.createElement('h2')
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
  menuContainerOne.classList.add('menu-item-container')
  menuItemOne.classList.add('menu-item')
  menuItemNameOne.classList.add('menu-item-name')
  menuContainerTwo.classList.add('menu-item-container')
  menuItemTwo.classList.add('menu-item')
  menuItemNameTwo.classList.add('menu-item-name')
  //append to DOM
  body.appendChild(nav)
  body.appendChild(homeTitle)
  body.appendChild(homeDiv)
  homeDiv.appendChild(homeContent)
  body.appendChild(menuTitle)
  body.appendChild(menuDiv)
  menuDiv.appendChild(menuContent)
  menuContent.appendChild(menuContainerOne)
  menuContainerOne.appendChild(menuItemOne)
  menuContainerOne.appendChild(menuItemDescriptionContainerOne)
  menuItemDescriptionContainerOne.appendChild(menuItemNameOne)
  menuItemDescriptionContainerOne.appendChild(menuDescriptionOne)
  menuContent.appendChild(menuContainerTwo)
  menuContainerTwo.appendChild(menuItemTwo)
  menuContainerTwo.appendChild(menuItemDescriptionContainerTwo)
  menuItemDescriptionContainerTwo.appendChild(menuItemNameTwo)
  menuItemDescriptionContainerTwo.appendChild(menuDescriptionTwo)
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
  chef.src = kenchHome;
  chef.style.animation = '1s popAnimation linear'; //chef animation
  homeTitle.textContent = 'Home';
  menuTitle.textContent = 'Menu';
  contactTitle.textContent = 'Contact';
  homeContent.textContent = 'MONDAY - SUNDAY 1:00AM - 8:00AM'
  menuItemOne.src = junglersDelight;
  menuDescriptionOne.textContent = 'Freshly caught live scuttle crab garnished with honeyfruit.'
  menuItemNameOne.textContent = 'Jungler\'s delight';
  menuItemTwo.src = baronNashor;
  menuDescriptionTwo.textContent = 'Yummy!'
  menuItemNameTwo.textContent = 'Baron Nashor';
  contactContent.textContent = 'Contact Chef Kench at your local river or email him at Kench-Eats-Everything@benchedthekench.org'
}

export {
  loadPage
}