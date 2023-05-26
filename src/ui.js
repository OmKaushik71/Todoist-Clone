import moment from 'moment/moment';

function createHeader() {
  const header = document.createElement('header');

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const menuBtn = document.createElement('button');
  const menuImg = document.createElement('img');
  menuImg.src = './assets/menu-icon.svg';
  menuBtn.addEventListener('click', menuHandler);
  menuBtn.appendChild(menuImg);

  const homeBtn = document.createElement('button');
  const homeImg = document.createElement('img');
  homeImg.src = './assets/home-icon.svg';
  homeBtn.appendChild(homeImg);
  homeBtn.addEventListener('click', homeHandler);

  const searchBar = document.createElement('div');
  searchBar.innerHTML = '';
  buttons.appendChild(menuBtn);
  buttons.appendChild(homeBtn);
  buttons.appendChild(searchBar);
  const heading = document.createElement('h1');
  heading.textContent = 'Todo List';

  const date = document.createElement('div');
  date.classList.add('date');
  date.textContent = moment().format('ddd, D MMM');

  header.appendChild(buttons);
  header.appendChild(heading);
  header.appendChild(date);

  return header;
}
function createNavbar() {
  const navbar = document.createElement('nav');

  navbar.innerHTML =
    '<div class="main-project"><div class="inbox" id = "inbox"><img src ="./assets/inbox-icon.svg"> Inbox <span class="count"></span></div><div class = "today" id="today"><img src="./assets/today-icon.svg"> Today <span class="count"></span></div><div class="upcoming" id="upcoming"><img src ="./assets/upcoming-icon.svg"> Upcoming <span class= "count"></span></div></div><div class="projects"><h2>Projects</h2><div class="add-projects" id="add-projects"><img src ="./assets/plus-icon.svg"> Add Projects</div></div>';

  return navbar;
}
function createMain() {
  const main = document.createElement('main');
  main.appendChild(createNavbar());
  return main;
}
function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `Copyright &copy 2023 <a href="https://github.com/OmKaushik71">omkaushik</a>`;
  return footer;
}
// Event Handlers
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
}
function homeHandler() {}

export default function loadUi() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  document.body.appendChild(createFooter());
}
