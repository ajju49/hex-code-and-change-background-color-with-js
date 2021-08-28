//selectors
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexbtn = document.querySelector('.hexbtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

//event listners
hexbtn.addEventListener('click',gethex);



//functions
function gethex (){
    let hexCol = '#';

    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*hexNumbers.length);

        hexCol=hexCol+hexNumbers[random];
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;


}