const dropDown = document.querySelector('.dropdown');
const mobileMenu = document.querySelector('.mobileMenu');
const Popup = document.getElementById('work-link');

const immage = document.querySelector('.immage');
dropDown.addEventListener('click', () => {
  dropDown.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  immage.classList.toggle('active');
});

document.querySelectorAll('.menu-items').forEach((i) => i.addEventListener('click', () => {
  dropDown.classList.remove('active');
  mobileMenu.classList.remove('active');
  immage.classList.remove('active');
}));
// Project one card information stored in an object
const project1Card = {
  title: 'Clean Energy Submit 2023',
  text: 'This is a responsive website created for the National Renweable Energy Submit. It provides information about the submit keyspeakers and also partnering companies.',
  technology: ['css', 'html', 'Javascript'],
  image: 'image/vlean.jpg',
  PopImage: 'image/vlean.jpg',
  seelive: 'https://newtayo.github.io/Clean-Energy-Submit/',
  seeSource: 'https://github.com/Newtayo/Clean-Energy-Submit',
};
// Object containing contents in the mobile version
const mobileothercontent = [
  {
    title: 'World Population App',
    text: ' With world population App, you can have basic information of the various countries in the world with just a single click',
    description: 'According to the restcountries API, there are over 7.7 billion people and around 250 countries in the World. With world population App, you can have basic information of the various countries in the world with just a single click',
    technology: ['React', 'Redux', 'Vanilla Css'],
    image: 'image/Website.png',
    sn: 0,
    picture: 'image/WorldPopulatio.jpg',
    seelive: 'https://countriespopulation.onrender.com/',
    seeSource: 'https://github.com/Newtayo/metric-webapp',
  },
  {
    title: 'Todo-List App',
    text: ' Todo-List app is created to help users properly plan their daily itenary. Tasks can be planned and track using this app. It also ensures that all changes made to the tasks are updated in real-time and preserved.',
    description: 'One of the ways to better manage Time and increase productivity is through Planning. Todo-List app is created just for this purpose. Tasks can be planned and track using this app. It also ensures that all changes made to the tasks are updated in real time and preserved',
    technology: ['Javascript', 'Html', 'CSS'],
    image: 'image/Calculator.png',
    sn: 1,
    picture: 'image/Todo.jpg',
    seelive: 'https://newtayo.github.io/TODO-LIST/dist/',
    seeSource: 'https://github.com/Newtayo/TODO-LIST',
  },
  {
    title: 'Book Store',
    text: 'This application helps keeps track of the books in a user library. The user can add or remove books from the library',
    technology: ['React', 'Redux', 'CSS'],
    description: 'This application helps keeps track of the books in a user library. The user can add or remove books from the library. The user booklist is preserved on an API',
    image: 'image/View.png',
    picture: 'image/Bookstore.jpg',
    sn: 2,
    seelive: 'https://booklibrary-mmen.onrender.com/',
    seeSource: 'https://github.com/Newtayo/Bookstore',
  },
  {
    title: 'Leaderboard',
    text: ' This is mobile responsive SPA website that displays the scores of participants in a game. Individuals can add scores to the leader board filling the add score form.',
    description: 'This is mobile responsive SPA website that displays the scores of participants in a game. Individuals can add scores to the leader board filling the add score form. All scores are preserved in using API',
    technology: ['html', 'Javascript', 'Css'],
    image: 'image/Website.png',
    picture: 'image/tenyears.png',
    sn: 3,
    seelive: 'https://newtayo.github.io/Leaderboard/dist/',
    seeSource: 'https://github.com/Newtayo/Leaderboard',
  },
  {
    title: 'Awesome BookStore',
    text: ' This web app manages the books available at a store called Awesome Books. Books can be added and removed at will. It also utilizes local storage to ensure changes are preserved',
    description: 'This web app manages the books available at a store called Awesome Books. Books can be added and removed at will. It also utilizes local storage to ensure changes are preserved',
    technology: ['html', 'Javascript', 'CSS'],
    picture: 'image/tenyears.png',
    image: 'image/Calculator.png',
    sn: 4,
    seelive: 'https://newtayo.github.io/Module-Awesome-Books/main/',
    seeSource: 'https://github.com/Newtayo/Module-Awesome-Books',
  },
  {
    title: 'Profesional Art Printing Data',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/View.png',
    sn: 5,
    seelive: 'https://newtayo.github.io/Leaderboard/dist/',
    seeSource: 'https://github.com/Newtayo/Leaderboard',
  },
];

// Loading the First cards dynamically
const FirstProject = document.createElement('div');
FirstProject.id = 'project1';
FirstProject.innerHTML = `<img id="placeholder" src="image/vlean.jpg" />
<div class="project1container">
        <h2 id="project1text">${project1Card.title}</h2>
        <p id="project1supporttext">${project1Card.text}
         </p>
        
        <ul id="project1language">
        ${project1Card.technology
    .map((iterate) => `<li class="languageitem">${iterate}</li>`)
    .join('')}
        </ul>
        <button class="seeproject1" type="button" >See Project</button>
      </div>
      </div>
`;
Popup.append(FirstProject);

const seeprojectBtn = document.querySelector('.seeproject1');
seeprojectBtn.addEventListener('click', () => {
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  const popWindow = document.createElement('div');

  popWindow.className = 'popclass';

  popWindow.innerHTML = ` <h2 class ="popupHeader">${project1Card.title} </h2>
<button id= "remove"> <img src="image/Icon - Cancel.png"/> </button>

<ul  class = "popupLanguage">
<li class="languageitem">html</li>
<li class="languageitem">CSS</li>

<li class="languageitem">Javascript</li>
</ul>
<div class ="popuptextimagemenu">
<img id="placeholder"  src="${project1Card.image}" />
<div class ="popuptextbuttonmenu">
<p class="popprojectsupporttext1">
National Renewable Energy Submit 2023 is an annual event that gathers professionals in the reneweable energy field from all over the world. It provides the platforms for professionals to showcase latest technology in the field and also a medium to source for private and government support. This year’s event is billed to have in attendance notable personalities in the industry as well as artists who are using their voices to promote the industry. .
    </p>
    <div class="popButton">
    <button class=" img" type="button"><a href ="${project1Card.seelive}">See Live <img class = "popimg" src= "image/Icon.png"></a></button>
    <button class=" img" type="button"><a href ="${project1Card.seeSource}">See Source <img class = "popimg" src= "image/Vector.png"></a> </button>
    </div>
    </div>
    </div>
    `;
  backdrop.append(popWindow);
  Popup.append(backdrop);

  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', () => {
    Popup.removeChild(backdrop);
  });
});

// Code for generating the projectcard
const container = document.createElement('div');
container.className = 'desktopitem';
mobileothercontent.forEach((mobile) => {
  const mobilecontent = document.createElement('div');

  mobilecontent.className = 'otherproject';

  mobilecontent.innerHTML = `
<h2 class="otherprojectheading">${mobile.title}</h2>
<p class="otherprojecttext">${mobile.text}
 </p>

<ul id="project2language">
${mobile.technology
    .map((items) => `<li class="language2item">${items}</li>`)
    .join('')}
</ul>

<button class="seeproject2" type="button" id ="${
  mobile.sn
}">See Project</button>

</div>
</div>`;
  mobilecontent.style.backgroundImage = `url(${mobile.image})`;
  container.append(mobilecontent);

  Popup.append(container);
});

//

//  Handiling Popup

function windowpopup(data) {
  const backdrop = document.createElement('div');
  backdrop.className = 'backdrop';

  const popWindow = document.createElement('div');

  popWindow.className = 'popclass';

  popWindow.innerHTML = ` <h2 class ="popupHeader">${data.title} </h2>
  <button id= "remove"> <img src="image/Icon - Cancel.png"/> </button>
  
  <ul  class = "popupLanguage">
  <li class="languageitem">${data.technology[0]}</li>
  <li class="languageitem">${data.technology[1]}</li>
 
  <li class="languageitem">${data.technology[2]}</li>
</ul>
<div class ="popuptextimagemenu">
  <img id="placeholder" src=${data.picture} />
  <div class ="popuptextbuttonmenu">
  <p class="popprojectsupporttext1">
  ${data.description}
      </p>
      <div class="popButton">
      <button class=" img" type="button"><a href ="${data.seelive}">See Live <img class = "popimg" src= "image/Icon.png"></a></button>
      <button class=" img" type="button"><a href ="${data.seeSource}"> See Source <img class = "popimg" src= "image/Vector.png"></a> </button>
      </div>
      </div>
      </div>
      `;
  backdrop.append(popWindow);
  Popup.append(backdrop);

  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', () => {
    Popup.removeChild(backdrop);
  });
}

mobileothercontent.forEach((values, val) => {
  document.getElementById(val).addEventListener('click', () => {
    windowpopup(values);
  });
});

// Email Validation
const form = document.getElementById('contact');
const emailValue = form.elements.email;
const errorMessage = document.querySelector('small');

form.addEventListener('submit', (event) => {
  const email = emailValue.value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    errorMessage.className = 'error';
  }
});

// Handling local storage

const userName = form.elements.Fullname;
const userEmail = form.elements.email;
const userMessage = form.elements.YourMessage;

function storingInput() {
  // storing user input in object
  const userObject = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('userObject', JSON.stringify(userObject));
}

function prePopulateForm() {
  const storedValues = JSON.parse(localStorage.getItem('userObject'));
  const currentUser = storedValues.name;
  const currentEmail = storedValues.email;
  const currentMessage = storedValues.message;
  form.elements.Fullname.value = currentUser;
  form.elements.email.value = currentEmail;
  form.elements.YourMessage.value = currentMessage;
}

if (!localStorage.getItem('userObject')) {
  storingInput();
} else {
  prePopulateForm();
}

//  if form values are changed

userName.onchange = storingInput;
userEmail.onchange = storingInput;
userMessage.onchange = storingInput;