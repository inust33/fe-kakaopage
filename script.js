import {dailyHeader} from "./dailyHeader/dailyHeader.js";
import {HomeHeader} from "./HomeHeader/HomeHeader.js";
import {comicItem} from "./comicsGrid/comicsGrid.js";
import {infographic} from "./infographic.js";
import {images} from "./images.js";
import {AdBanner} from "./AdBanner/AdBanner.js";
import {GrayCube} from "./GrayCube/GrayCube.js";
import {AddEvent} from "./utils.js";
import {menuNav} from "./menuNav/menuNav.js";
import {BannerBox} from "./BannerBox/BannerBox.js";

const main = document.querySelector('main.mainContent');
const nav = main.firstElementChild;
const section = nav.nextElementSibling;
const bannerBox = section.querySelector('.BannerBox');
const comicsBox = document.querySelector('.freeComics');
const grid =comicsBox.querySelector('.comicsGrid')

const renderGrid = ()=>{
    const grid=document.querySelector('.comicsGrid');
    for(let i=0; i<20; i++){
       comicItem(images.thumbnails, infographic, grid);
    }
}
const renderDaily = ()=> {
    let prev = grid.previousElementSibling;
    while(prev){ //grid 이전의 노드를 삭제
        grid.parentNode.removeChild(prev);
        prev = grid.previousElementSibling;
    }
    let parentPrev =grid.parentElement.previousElementSibling;
    while(parentPrev.className!=='catchphrase'){
        parentPrev.parentNode.removeChild(parentPrev);
        parentPrev = grid.parentElement.previousElementSibling;
    }

    dailyHeader(infographic, comicsBox, 'beforebegin');
    grid.style.paddingTop='';
    grid.innerHTML= '';
    renderGrid();
}

const renderHome = ()=>{
    let prev = comicsBox.previousElementSibling;
    while(prev.className !== 'catchphrase') {
        prev.parentNode.removeChild(prev);
        prev= comicsBox.previousElementSibling;
    }

    HomeHeader(comicsBox, 'afterbegin');
    GrayCube(comicsBox, 'beforebegin')
    AdBanner(comicsBox, 'beforebegin');
    grid.innerHTML ='';
    grid.style.paddingTop = '20px';
    renderGrid();
}

AddEvent(nav, 'click', 'li', e=>{
    const {target} = e
    nav.querySelector('.selected').classList.remove('selected')
    target.classList.add('selected');
    if(target.classList.contains('toon')){}
})

let template=''
nav.addEventListener('click', (e) => {
    const li =e.target.closest('li');
    nav.querySelector('.selected').classList.remove('selected')
    li.classList.add('selected');
    if (!li.classList.contains('toon')) {
        if(template)return;
       template = section.innerHTML;
       section.innerHTML= "<span>This is Dummy Page</span>";
    } else {
        if(!template)return;
        section.innerHTML = template;
        template = "";
    }
})
const topBanner = section.querySelector('.TopBanner');

topBanner.addEventListener('click', (e)=>{
    const span = e.target.closest('span');
    topBanner.querySelector('.selected').classList.remove('selected');
    span.classList.add('selected');
    if(span.classList.contains('daily')){
        renderDaily();
    }
})
topBanner.querySelector('.home').addEventListener('click', (e)=>{
    renderHome();
})
menuNav(nav, 'afterbegin');
BannerBox(bannerBox, 'afterbegin', images, infographic);
renderHome();


