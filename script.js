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
    picture: 'image/population.jpg',
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
    picture: 'image/Todo.JPG',
    seelive: 'https://newtayo.github.io/TODO-LIST/dist/',
    seeSource: 'https://github.com/Newtayo/TODO-LIST',
  },
  {
    title: 'Book Store',
    text: 'This application helps keeps track of the books in a user library. The user can add or remove books from the library',
    technology: ['React', 'Redux', 'CSS'],
    description: 'This application helps keeps track of the books in a user library. The user can add or remove books from the library. The user booklist is preserved on an API',
    image: 'image/View.png',
    picture: 'image/books.jpg',
    sn: 2,
    seelive: 'https://booklibrary-mmen.onrender.com/',
    seeSource: 'https://github.com/Newtayo/Bookstore',
  },
  {
    title: 'TV Series App',
    text: ' This is a SPA web application built to provide users with information of various TV Series.',
    description: 'This is a SPA web application built to provide users with information of various TV Series. The application allows users to post comments and like movies. The application was built using a free movie api. All changes made are preserved',
    technology: ['html', 'Javascript', 'Css'],
    image: 'image/Website.png',
    picture: 'image/TV.jpg',
    sn: 3,
    seelive: 'https://veronica365.github.io/JavaScript-Capstone/dist/',
    seeSource: 'https://github.com/Newtayo/TVmaze-',
  },
  {
    title: 'BudgetIT App',
    text: ' BudgetIT App is a responsive application that enables a user group planned expenses into categories. It also provides a means by which such expenses can be tracked ',
    description: 'BudgetIT App is a full-stack application that enables a user group planned expenses into categories. It also provides a means by which such expenses can be tracked. It was developed using rails and vanilla Css, with postgres as it database',
    technology: ['Rails', 'CSS', 'Postgres'],
    picture: 'image/BudgetIT.jpg',
    image: 'image/Calculator.png',
    sn: 4,
    seelive: 'https://drive.google.com/file/d/10M8X8yaXTO2c_nXR4fhY4lchCMKo9Bwl/view?usp=sharing',
    seeSource: 'https://github.com/Newtayo/Budget_app',
  },
  {
    title: 'Laptop Rental',
    text: ' Laptop app is a full-stack app created to assist users in borrowing laptops from a store. It allows laptops to be added and deleted from the store in real time.',
    description: ' Laptop app is a full-stack app created to assist users in borrowing laptops from a store. It allows laptops to be added and deleted from the store in real time.',
    picture: 'image/rentallaptop.jpg',
    technology: ['React', 'Rails', 'Saas'],
    image: 'image/View.png',
    sn: 5,
    seelive: 'https://laptoprentals.onrender.com',
    seeSource: 'https://github.com/Harrynoqs/Final-capstone-backend',
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
<p class="otherprojecttext">${mobile.text.substring(0, 150)}...
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