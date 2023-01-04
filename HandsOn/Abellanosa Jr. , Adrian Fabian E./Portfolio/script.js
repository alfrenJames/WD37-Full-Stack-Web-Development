//Cursor Effects
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click',() => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// Pre loader spinner
var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
    loader.style.display="none";
})

// Elements Reveal on Scroll
window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal');

for(var i = 0; i < reveals.length; i++){
    
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
  }
}

const li=document.querySelectorAll('.links');
const sec=document.querySelectorAll('section');

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 0 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");    
}
activeMenu();
window.addEventListener("scroll", activeMenu);

//ImageSlider
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
function closeFullImg(){
    fullImgBox.style.display = "none";
}


//skill modals
let popup1 = document.getElementById('popup1');

// 1st 
function openPopup1(){
    popup1.classList.add("open-popup");
}

function closePopup1(){
    popup1.classList.remove("open-popup");
}
// 2nd
let popup2 = document.getElementById('popup2');


function openPopup2(){
    popup2.classList.add("open-popup");
}

function closePopup2(){
    popup2.classList.remove("open-popup");
}
// 3rd 
let popup3 = document.getElementById('popup3');


function openPopup3(){
    popup3.classList.add("open-popup");
}

function closePopup3(){
    popup3.classList.remove("open-popup");
}
// 4th
let popup4 = document.getElementById('popup4');


function openPopup4(){
    popup4.classList.add("open-popup");
}

function closePopup4(){
    popup4.classList.remove("open-popup");
}
// 5th
let popup5 = document.getElementById('popup5');


function openPopup5(){
    popup5.classList.add("open-popup");
}

function closePopup5(){
    popup5.classList.remove("open-popup");
}
// 6th
let popup6 = document.getElementById('popup6');


function openPopup6(){
    popup6.classList.add("open-popup");
}

function closePopup6(){
    popup6.classList.remove("open-popup");
}
// 7th
let popup7 = document.getElementById('popup7');


function openPopup7(){
    popup7.classList.add("open-popup");
}

function closePopup7(){
    popup7.classList.remove("open-popup");
}
// 8th
let popup8 = document.getElementById('popup8');


function openPopup8(){
    popup8.classList.add("open-popup");
}

function closePopup8(){
    popup8.classList.remove("open-popup");
}
// 9th 
let popup9 = document.getElementById('popup9');


function openPopup9(){
    popup9.classList.add("open-popup");
}

function closePopup9(){
    popup9.classList.remove("open-popup");
}
//Cases 3d Rotation
var radius = 240;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120;
var imgHeight = 170;

setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
    for (var i = 0; i < aEle.length; i++){
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s" ;
    }
}
function applyTransform(obj){
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}
function playSpin(yes){
    ospin.style.animationPlayState = (yes?'running': 'paused');
}

var sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;

if (autoRotate){
    var animationName = (rotateSpeed > 0 ? "spin" : "spinRevert");
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear `;
}

document.onpointerdown = function (e){
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;

    this.onpointermove = function (e){
        e = e || window.event;
        var nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
    };
    
    this.onpointerup = function(e){
        odrag.timer = setInterval(function(){
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false);
            if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
                clearInterval(odrag.timer);
                playSpin(true);
            }
        },17);
        this.onpointermove = this.onpointerup = null;
    };
    return false
}

document.onmousewheel = function(e){
    e =e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
}
