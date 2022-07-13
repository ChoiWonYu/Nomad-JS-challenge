const title=document.querySelector('#hello h1');
function handleClick(){
    title.style.color="blue";
}
title.addEventListener('click',handleClick);