import contact from "./contact";
import home from "./home";
import menu from "./menu";





export default function nav(){
    const content = document.getElementById('content');

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')

    div1.setAttribute('id', 'home-btn')
    div2.setAttribute('id', 'menu-btn')
    div3.setAttribute('id', 'contact-btn')

    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')

    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Contact'


    div1.addEventListener('click', ()=>{
        clear();
        home()
    });

    div2.addEventListener('click', ()=>{
        clear();
        menu();
    });

    div3.addEventListener('click', ()=>{
        clear();
        contact()
    });

    //header
    const header = document.createElement('header')
    header.setAttribute('id', 'header');
    header.appendChild(div1);
    header.appendChild(div2);
    header.appendChild(div3);
    content.appendChild(header);



}

function clear(){
    const content = document.getElementById('content');
    const pageContent = document.querySelector('.page-content');

    if(pageContent){
        content.removeChild(pageContent)
    }

}