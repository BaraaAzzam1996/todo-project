console.log('Welcome To Dolist ');


let userName = prompt('Please Enter Your Name');
console.log(userName);

let Gender = prompt('please Enter Your Gender (female or male)');
let Age = prompt ('please Enter Your Age');
if (Age <=0){
    alert('Notice Age is incorrect');
}

 let text = confirm('Do You Want To Skip The welcoming Message?');
if ((text) == true) {
   prompt('You Skipped The Welcoming Message');
  
} else {
    if (Gender=='female') {
        alert('Welcome To Our Website Ms ' +userName);
        console.log(Gender);
      } else if (Gender=='male') { alert('Welcome To Our Website Mr ' +userName);
    
       console.log(Gender);
      } else {
        alert('Welcome To Our Website')
        console.log('undifiend');}
}

alert('first of All We want to ask you some to Make a Survey To Modify Our Website , So please answer by yes or no');
let questiOne =  prompt('Do You Like Our Website?');
let questiTwo = prompt("Do You feel the we have to change somthing in our website?");
let questiThree = prompt("In your opanion Do you find our Website useful?");
let array = [questiOne,questiTwo,questiThree];
function Invalid() {
    for (let i=0;i<array.length;i++){
        if (array[i]==="") {
            array[i]="invalid";
            
        }
    }
    
}
Invalid();

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    console.log (array [i]);
      
}




