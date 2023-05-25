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
  heading.textContent = 'Todoist';

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
    '<div class="main-project"><div class="inbox" id = "inbox"><img src ="./assets/inbox-icon.svg"> Inbox <span class="count">1</span></div><div class = "today" id="today"><img src="./assets/today-icon.svg"> Today <span class="count">2</span></div><div class="upcoming" id="upcoming"><img src ="./assets/upcoming-icon.svg"> Upcoming <span class= "count">3</span></div></div><div class="projects"><h2>Projects</h2><div class="add-projects" id="add-projects"><img src ="./assets/plus-icon.svg"> Add Projects</div></div>';

  return navbar;
}
function removeNavbar() {
  const navbar = document.querySelector('nav');
  navbar.innerHTML = '';
  navbar.style.width = '0px';
  navbar.style.padding = '0px';
}
function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `Copyright &copy 2023 <a href="https://github.com/OmKaushik71">omkaushik</a>`;
  return footer;
}
function menuHandler() {
  const nav = document.querySelector('nav');
  if (nav.innerHTML !== '') removeNavbar();
  else {
    nav.innerHTML = createNavbar().innerHTML;
    nav.style.width = '270px';
    nav.style.padding = '2em 1em';
  }
}
function homeHandler() {}

export default function loadUi() {
  document.body.appendChild(createHeader());
  document.body.appendChild(createNavbar());
  document.body.appendChild(createFooter());
}
