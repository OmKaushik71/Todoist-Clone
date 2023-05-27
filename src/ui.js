import moment from 'moment/moment';
const date = document.getElementById('date');
date.textContent = moment().format('ddd, D MMM');
const menuBtn = document.getElementById('menu-toggle');
menuBtn.addEventListener('click', menuHandler);
const addProjectsBtn = document.getElementById('add-projects');
addProjectsBtn.addEventListener('click', addProjects);
function menuHandler() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('hidden');
}
function addProjects() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `<h2> Add project </h2>
  <div> Name <input type ="text" name="name" >
  </div>
  <div> Color <select id="color">
  <option value="charcoal"><div class="circle"></div> Charcoal </option>
  <option value="berry red"><div class="circle"></div> Berry red </option>
  <option value="red"><div class="circle"></div> Red </option>
  <option value="blue"><div class="circle"></div> Blue </option>
  <option value="orange"><div class="circle"></div> Orange </option>
  <option value="yellow"><div class="circle"></div> Yellow </option>
  <option value="green"><div class="circle"></div> Green </option>
  <option value="lavender"><div class="circle"></div> Lavender </option>
  <option value="magenta"><div class="circle"></div> Magenta </option>
  </select>
  </div>
  <button> Submit </button>`;

  document.body.appendChild(popup);
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const main = document.querySelector('main');

  header.classList.toggle('blur');
  footer.classList.toggle('blur');
  main.classList.toggle('blur');
}
function homeHandler() {}
