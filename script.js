let pass=document.querySelector("#pass");
let con_pass=document.querySelector("#confirm-pass");
let button=document.querySelector(".button-85");
let result=document.querySelector(".result");

function match(){
    if(pass.value == con_pass.value){
        result.innerText="";
    }else{
        result.innerText="Dont match"
    }
}

button.addEventListener('click',() => {
    match();
    //location.reload();
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