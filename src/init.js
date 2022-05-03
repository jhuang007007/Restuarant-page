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
  const disclaimer = document.createElement('p')
  const chef = document.createElement('img')

  main.id = 'main';
  home.id = 'home';
  menu.id = 'menu';
  contact.id = 'contact';
  chef.id ='chef'

  home.classList.add('tab')
  menu.classList.add('tab', 'grayscale')
  contact.classList.add('tab', 'grayscale')

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  content.appendChild(main)
  content.appendChild(chef)
  body.prepend(header)
  content.after(footer)

  header.appendChild(nav)
  nav.appendChild(tabContainer)
  tabContainer.appendChild(home)
  tabContainer.appendChild(menu)
  tabContainer.appendChild(contact)
  
  heading.textContent = 'kench cuisine';
  para.textContent = 'A league of legends themed restuarant inspired by runeterra\'s very own bilgewater!';
  disclaimer.textContent = 'This website was created under Riot Games\' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project. \'kench cuisine\' is not a real business entity.';
  creator.textContent = '-link to creator-';
  creator.href = 'https://github.com/jhuang007007';
  chef.src = '../src/images/chef-kench-home.png';

  header.appendChild(heading);
  main.appendChild(para);
  footer.appendChild(creator);
  footer.appendChild(disclaimer);
}

export {
  loadPage
}