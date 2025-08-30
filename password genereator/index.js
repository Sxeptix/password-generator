const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("prompt-1");
let passTwo = document.getElementById("prompt-2");

const btn = document.getElementById("generate-Btn");


btn.addEventListener('click', function(){
    console.log("generate-btn-clicked");
    
})



let len = characters.length

function generate(){
    let pass1 = " ";
    let pass2 = " ";   
    for(let i = 0; i<15 ; i++){
        let randomIndexOne = Math.floor(Math.random()*len);
        let randomIndexTwo = Math.floor(Math.random()*len);
        pass1 += characters[randomIndexOne];
        pass2 += characters[randomIndexTwo];
    }
    passOne.textContent = pass1;
    passTwo.textContent = pass2;
}


 