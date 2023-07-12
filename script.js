var pass=document.querySelector("#pass");
var con_pass=document.querySelector("#confirm-pass");
var button=document.querySelector(".button-85");
var result=document.querySelector(".result");
var bool=false;

function match(){
    if(pass.value == con_pass.value){
        result.innerText="";
        con_pass.setCustomValidity("");
        return true;
    }else{
        result.innerText="Dont match"
        bool=false;
        console.log("else ici"+bool);
        con_pass.setCustomValidity("Passwords dont match!");
        return false;

    }
    console.log("fonk ici"+bool);

}

button.addEventListener('onclick',(e) => {
    if(match()){
    e.preventDefault();
    }
  });

  pass.addEventListener('keyup' ,()=>{
    if (con_pass.value.length!=0){
        match();
    }
  });

  con_pass.addEventListener('keyup',()=>{
    if(pass.value.length!=0){
        match();
    }
  })