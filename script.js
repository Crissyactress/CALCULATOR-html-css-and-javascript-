const btnNum =document.querySelectorAll('.num');
const screen =document.querySelector('.screen-content');
// Number buttons
btnNum.forEach(element => {
    element.addEventListener('click',()=>{
        screen.textContent += element.textContent;
    })    
})
// AC and C buttons
const cButton = document.querySelectorAll('.c');
cButton.forEach(el =>{
    el.addEventListener('click', ()=>{
        screen.textContent = "";
    })
})
// Delete button (b)
const del = document.querySelector('.b');
del.addEventListener('click', ()=>{
    screen.textContent = screen.textContent.slice(0,-1);
})
// Equal button
const equal = document.querySelector('.equal');
equal.addEventListener('click',()=>{
    let result =screen.textContent.replace('x', '*');
    result = result.replace('%','/100');
    try{
        screen.textContent = eval(result);
    }catch(err){
        screen.textContent ="syntaxError";
    }
})