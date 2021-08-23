const stringInput=document.querySelector("#take-input")
const checkButton=document.querySelector("#check-button")
const message=document.querySelector("#msg")
const inputBox=document.querySelector("#height")

checkButton.addEventListener("click", function(){
 message.style.display="none"

    let input=stringInput.value
    // if its not a number (isNaN)
       if(isNaN(input)){
    //    regular expression to match \W non-alphabetic like(,.?) g is global index 
    // to match every nonalphabetic in a senctence
       let regex=/[\W_]/g
    //    replace nonalphabetic with '' it will return string without space and only letters
       let actualString=input.replace(regex,'').toLowerCase()
       
       let splits=input.split('')
    //    we reverse given string to check the start from last of sentence/word
       let replacingNonAlpha=splits.reverse('').join('').replace(regex,'').toLowerCase()
        for(let i=0;i<input.length;i++){
           
            if(actualString.match(replacingNonAlpha)){
               showMessage("Its a palindrome!")
            }else{
                showMessage("Its not a palindrome")
            }
        }
       
    }else{
        error("Opps!!Your entry is invalid, please enter alphabetic sentence/string")
    }
})


function error(errorMsg){
    message.style.display="block"
    message.innerText=errorMsg
}



function showMessage(msg){
    message.style.display="block"
    message.innerText=msg
}