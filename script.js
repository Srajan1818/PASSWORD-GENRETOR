let  inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passBox =document.getElementById("passBox");
let lowerCase=document.getElementById("lowercase");
let upperCase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let generateBtn=document.getElementById("generateBtn");
let copyIcon=document.getElementById("copyIcon");

//showing input slider value

inputSlider.addEventListener('input', () => {
    sliderValue.textContent=inputSlider.value;
})

generateBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let lowerChars="abcdefghijklmnopqrstuvwxyz"
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let Allnumbers="0123456789"
let allSymbols="~@#$%^&*"

//function to generate password
function generatePassword()
{
    let genPassword = "";
    let allChars="";

    allChars +=lowerCase.checked ? lowerChars : "";
    allChars +=upperCase.checked ? upperChars : "";
    allChars +=numbers.checked ? Allnumbers : "";
    allChars +=symbols.checked ? allSymbols : "";

    if(allChars == ""||allChars.length==0){
        return genPassword;
    }

let i=1;
while(i<=inputSlider.value){
   genPassword +=allChars.charAt(Math.floor(Math.random()*allChars.length));
   i++;
}
   return genPassword;
}

copyIcon.addEventListener('click', () => {
    if(passBox.value!= "" || passBox.length.length>=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerHTML="check"
    copyIcon.title="Password Copied";
    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
    }, 3000)
    }
})