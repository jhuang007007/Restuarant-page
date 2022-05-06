import {loadPage} from './init.js';
import './style.css';

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
  if (chef.src !== '../src/images/chef-kench-home.png') {
    chef.src = '../src/images/chef-kench-home.png';
  }
  homeTitle.scrollIntoView()
})
menu.addEventListener('click', () => {
  highlightTab(menu)
  if (chef.src !== '../src/images/chef-kench-menu.png') {
    chef.src = '../src/images/chef-kench-menu.png';
  }
  menuTitle.scrollIntoView()
})
contact.addEventListener('click', () => {
  highlightTab(contact) 
  if (chef.src !== '../src/images/chef-kench-contact.png') {
    chef.src = '../src/images/chef-kench-contact.png';
  }
  contactTitle.scrollIntoView()
})