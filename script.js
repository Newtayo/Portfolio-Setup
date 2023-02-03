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
  title: 'Multi-Post Stories',
  text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technology: ['css', 'html', 'bootstrap', 'Ruby'],
  image: 'image/tenyears.png',
  seelive: 'https://newtayo.github.io/Portfolio-Setup/',
  seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
};
// Object containing contents in the mobile version
const mobileothercontent = [
  {
    title: 'Data Dashboard Healthcare',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Website.png',
    sn: 0,
    seelive: 'https://newtayo.github.io/Portfolio-Setup/',
    seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
  },
  {
    title: 'Website Protfolio ',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Calculator.png',
    sn: 1,
    seelive: 'https://newtayo.github.io/Portfolio-Setup/',
    seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
  },
  {
    title: 'Profesional Art Printing Data',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/View.png',
    sn: 2,
    seelive: 'https://newtayo.github.io/Portfolio-Setup/',
    seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
  },
  {
    title: 'Data Dashboard Healthcare',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Website.png',
    sn: 3,
    seelive: 'https://newtayo.github.io/Portfolio-Setup/',
    seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
  },
  {
    title: 'Website Protfolio',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/Calculator.png',
    sn: 4,
    seelive: 'https://newtayo.github.io/Portfolio-Setup/',
    seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
  },
  {
    title: 'Profesional Art Printing Data',
    text: ' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'bootstrap', 'Ruby'],
    image: 'image/View.png',
    sn: 5,
    seelive: 'https://newtayo.github.io/Portfolio-Setup/',
    seeSource: 'https://github.com/Newtayo/Portfolio-Setup',
  },
];

// Loading the First cards dynamically
const FirstProject = document.createElement('div');
FirstProject.id = 'project1';
FirstProject.innerHTML = `<img id="placeholder" src="image/Img Placeholder.png" />
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
<li class="languageitem">Bootstrap</li>

<li class="languageitem">Ruby on the rails</li>
</ul>
<div class ="popuptextimagemenu">
<img id="placeholder"  src="${project1Card.image}" />
<div class ="popuptextbuttonmenu">
<p class="popprojectsupporttext1">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.
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
  <li class="languageitem">html</li>
  <li class="languageitem">Bootstrap</li>
 
  <li class="languageitem">Ruby on the rails</li>
</ul>
<div class ="popuptextimagemenu">
  <img id="placeholder" src="image/tenyears.png" />
  <div class ="popuptextbuttonmenu">
  <p class="popprojectsupporttext1">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
      </p>
      <div class="popButton">
      <button class=" img" type="button"><a href ="${project1Card.seelive}">See Live <img class = "popimg" src= "image/Icon.png"></a></button>
      <button class=" img" type="button"><a href ="${project1Card.seeSource}"> See Source <img class = "popimg" src= "image/Vector.png"></a> </button>
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