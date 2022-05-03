import {loadPage} from './init.js';
import './style.css';

loadPage()
const content = document.querySelector('#content')
const home = document.querySelector('#home')
const menu = document.querySelector('#menu')
const contact = document.querySelector('#contact')
const tabs = Array.from(document.querySelectorAll('.tab'))
const chef = document.querySelector('#chef');

function highlightTab(tab) {
  tabs.forEach(element => element.classList.add('grayscale'));
  tab.classList.remove('grayscale');
}

function switchTab(tab) {
  
}

home.addEventListener('click', () => {
  highlightTab(home)
  if (chef.src !== '../src/images/chef-kench-home.png') {
    chef.src = '../src/images/chef-kench-home.png';
  }
})
menu.addEventListener('click', () => {
  highlightTab(menu)
  if (chef.src !== '../src/images/chef-kench-menu.png') {
    chef.src = '../src/images/chef-kench-menu.png';
  }
})
contact.addEventListener('click', () => {
  highlightTab(contact)
  if (chef.src !== '../src/images/chef-kench-contact.png') {
    chef.src = '../src/images/chef-kench-contact.png';
  }
})