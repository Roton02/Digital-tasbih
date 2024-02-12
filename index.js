const subohanAllahDisplay = document.getElementById('subohan-allah-display');
const subohanAllahIncrement = document.getElementById('subohan-allah-increment');
const subohanAllahDecrement = document.getElementById('subohan-allah-decrement');

const alhamdulillahDisplay = document.getElementById('alhamdulillah-display');
const alhamdulillahIncrement = document.getElementById('alhamdulillah-increment');
const alhamdullillahDecrement = document.getElementById('alhamdullillah-decrement');

const allahHuAkbarDisplay = document.getElementById('allah-hu-akbar-display');
const allahHuIncrement = document.getElementById('allah-hu-increment');
const allahHuDecrement = document.getElementById('allah-hu-decrement');

const reset = document.getElementById('reset');

let subohanAllahValue=0;
let alhamdulillahValue=0;
let allahHuAkbarValue=0;

subohanAllahIncrement.addEventListener('click', function(){
    
    if(subohanAllahValue === 33){
        document.getElementById('card1').style.backgroundColor="Coral";
        return alert('subohan allah complete. complete please another one ')
    }
    document.getElementById('card1').style.backgroundColor="white";
    subohanAllahValue+=1;
    subohanAllahDisplay.innerText = subohanAllahValue;
   
})

subohanAllahDecrement.addEventListener('click', function(){
    if(subohanAllahValue===0){
        document.getElementById('card1').style.backgroundColor="Orange";
        return alert('You cant assign the negetgive value')
    }
    document.getElementById('card1').style.backgroundColor="white";
    subohanAllahValue -=1;
    subohanAllahDisplay.innerText=subohanAllahValue;
})
// -------------------Alhamdulillah -----------------
alhamdulillahIncrement.addEventListener('click', function(){
    if(alhamdulillahValue === 33){
        document.getElementById('card2').style.backgroundColor="Coral";
        return alert('alhamdulillah complete. complete please another one ')
    }
    document.getElementById('card2').style.backgroundColor="white";
    alhamdulillahValue+=1;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
   
})

alhamdullillahDecrement.addEventListener('click', function(){
    if(alhamdulillahValue===0){
        document.getElementById('card2').style.backgroundColor="Orange";
        return alert('You cant assign the negetgive value')
    }
    document.getElementById('card2').style.backgroundColor="white";
    alhamdulillahValue -=1;
    alhamdulillahDisplay.innerText=alhamdulillahValue;
})

// --------------Allah hu akbar --------------------------
allahHuIncrement.addEventListener('click', function(){
    if(allahHuAkbarValue === 33){
        document.getElementById('card3').style.backgroundColor="Coral";
        return alert('Allah hu Akbar complete. complete please another one ')
    }
    document.getElementById('card3').style.backgroundColor="white";
    allahHuAkbarValue+=1;
    allahHuAkbarDisplay.innerText = allahHuAkbarValue;
   
})

allahHuDecrement.addEventListener('click', function(){
    if(allahHuAkbarValue===0){
        document.getElementById('card3').style.backgroundColor="Orange";
        return alert('You cant assign the negetgive value')
    }
    document.getElementById('card3').style.backgroundColor="white";
    allahHuAkbarValue -=1;
    allahHuAkbarDisplay.innerText=allahHuAkbarValue;
})
// ------------------------Reset------------------------------------------
const drubok = 0;
reset.addEventListener('click', function(){
    document.getElementById('card1').style.backgroundColor="white";
    document.getElementById('card2').style.backgroundColor="white";
    document.getElementById('card3').style.backgroundColor="white";

    subohanAllahDisplay.innerText=drubok;
    alhamdulillahDisplay.innerText=drubok;
    allahHuAkbarDisplay.innerText=drubok;

    subohanAllahValue=drubok;
    alhamdulillahValue=drubok;
    allahHuAkbarValue=drubok;
    
})