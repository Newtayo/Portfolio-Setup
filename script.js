const dropDown = document.querySelector('.dropdown');
const mobileMenu = document.querySelector('.mobileMenu');
const Popup = document.getElementById('work-link');






const immage = document.querySelector('.immage');
dropDown.addEventListener('click', () => {
  dropDown.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  immage.classList.toggle('active');
});

document.querySelectorAll('.menu-items').forEach((i) =>
  i.addEventListener('click', () => {
    dropDown.classList.remove('active')
    mobileMenu.classList.remove('active')
    immage.classList.remove('active')
  })
)
//Project one card information stored in an object
let project1Card ={
  image : 'image/Img Placeholder.png',
  title: 'Multi-Post Stories',
  text:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  technology: ["css", "html", "bootstrap", "Ruby"]
}
//Object containing contents in the mobile version
let mobileothercontent = [
  {
    title: 'Profesional Art Printing Data',
    text:' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ["html", "bootstrap", "Ruby"],
    image: 'image/Website.png'
    

  },
  {
    title: 'Profesional Art Printing Data',
    text:' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ["html", "bootstrap", "Ruby"],
    image: 'image/Calculator.png'

  },
  {
    title: 'Profesional Art Printing Data',
    text:' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ["html", "bootstrap", "Ruby"],
    image: 'image/View.png'

  },
  {
    title: 'Profesional Art Printing Data',
    text:' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ["html", "bootstrap", "Ruby"],
    image: 'image/Website.png'
    

  },
  {
    title: 'Profesional Art Printing Data',
    text:' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ["html", "bootstrap", "Ruby"],
    image: 'image/Calculator.png'

  },
  {
    title: 'Profesional Art Printing Data',
    text:' A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ["html", "bootstrap", "Ruby"],
    image: 'image/View.png'

  }

]

  

// Loading the First cards dynamically
let FirstProject = document.createElement('div');
FirstProject.id ='project1';
FirstProject.innerHTML= `<img id="placeholder" src="${project1Card.image}" />
<div class="project1container">
        <h2 id="project1text">${project1Card.title}</h2>
        <p id="project1supporttext">${project1Card.text}
         </p>
        
        <ul id="project1language">
        ${project1Card.technology.map(iterate =>`<li class="languageitem">${iterate}</li>`).join('')}
        </ul>
        <button class="seeproject1" type="button" >See Project</button>
      </div>
      </div>
`
Popup.append(FirstProject);
let container = document.createElement('div');
container.className = "desktopitem";
mobileothercontent.forEach(mobile => {
  let mobilecontent = document.createElement('div');

  for (let key in mobile) {
   
    
mobilecontent.className = "otherproject";

mobilecontent.innerHTML =`
<h2 class="otherprojectheading">${mobile.title}</h2>
<p class="otherprojecttext">${mobile.text}
 </p>

<ul id="project2language">
${mobile.technology.map(items =>`<li class="language2item">${items}</li>`).join('')}
</ul>
<button class="seeproject2" type="button">See Project</button>

</div>
</div>`
mobilecontent.style.backgroundImage =`url(${mobile.image})`
 container.append(mobilecontent);
 

  }
 Popup.append(container);
 
})

//







//  Handiling Popup  

function popFunction(){
  const seeProjectbtn = document.querySelector('.seeproject2')
seeProjectbtn.addEventListener('click', () =>{

    const popWindow = document.createElement('div')

    popWindow.className = "popclass";

    popWindow.innerHTML = ` <h2 class ="popupHeader"> Multiple me </h2>
    <button id= "remove"> <img src="image/Icon - Cancel.png"/> </button>
    
    <ul  class = "popupLanguage">
    <li class="languageitem">html</li>
    <li class="languageitem">Bootstrap</li>
   
    <li class="languageitem">Ruby on the rails</li>
  </ul>
    
    <img id="placeholder" src="image/Img Placeholder.png" />
    <p class="popprojectsupporttext1">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
        </p>
        <div class="popButton">
        <button class=" img" type="button">See Live <img class = "popimg" src= "image/Icon.png"></button>
        <button class=" img" type="button">See Source <img class = "popimg" src= "image/Vector.png"> </button>
        </div>
        `

                 
    Popup.append(popWindow);
    const removeBtn = document.getElementById('remove')
    removeBtn.addEventListener('click', () =>{
    Popup.removeChild(popWindow);

})
    
})



}


