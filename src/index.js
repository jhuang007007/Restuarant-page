import {loadPage} from './init.js';
import './style.css';
import kenchHome from './images/chef-kench-home.png'
import kenchMenu from './images/chef-kench-menu.png'
import kenchContact from './images/chef-kench-contact.png'


loadPage()
// const content = document.querySelector('#content')
const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')
const tabs = Array.from(document.querySelectorAll('.tab'))
const chef = document.querySelector('#chef');
const homeTitle = document.querySelector('.home-title')
const menuTitle = document.querySelector('.menu-title')
const contactTitle = document.querySelector('.contact-title')

function highlightTab(tab) {
  tabs.forEach(element => element.classList.add('grayscale'));
  tab.classList.remove('grayscale');
}

home.addEventListener('click', () => {
  highlightTab(home)
  if (chef.src !== kenchHome) {
    chef.src = kenchHome;
  }
  homeTitle.scrollIntoView()
})
menu.addEventListener('click', () => {
  highlightTab(menu)
  if (chef.src !== kenchMenu) {
    chef.src = kenchMenu;
  }
  menuTitle.scrollIntoView()
})
contact.addEventListener('click', () => {
  highlightTab(contact) 
  if (chef.src !== kenchContact) {
    chef.src = kenchContact;
  }
  contactTitle.scrollIntoView()
})