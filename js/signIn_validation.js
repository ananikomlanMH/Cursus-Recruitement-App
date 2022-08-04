const form = document.querySelector("form");
uField = form.querySelector(".username"),
uInput = uField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input"),
cField = form.querySelector(".confirm-password"),
cInput = cField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 

  (uInput.value == "") ? uField.classList.add("shake", "error") : checkUsername();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (cInput.value == "") ? cField.classList.add("shake", "error") : checkPassConfirm();

  setTimeout(()=>{
    uField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cField.classList.remove("shake");
  }, 500);

  uInput.onkeyup = ()=>{checkUsername();}
  eInput.onkeyup = ()=>{checkEmail();}
  pInput.onkeyup = ()=>{checkPass();}
  cInput.onkeyup = ()=>{checkPassConfirm();}

  function checkUsername(){
    if(uInput.value == "" || uInput.value.length < 3){ 
      uField.classList.add("error");
      uField.classList.remove("valid");
    }else if(!uInput.value == "" && !uInput.value.length < 3){
      uField.classList.remove("error");
      uField.classList.add("valid");
    }
  }

  function checkEmail(){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");

      (eInput.value != "") ? errorTxt.innerText = "Entrer une adresse email correcte" : errorTxt.innerText = "Veuillez renseigner votre email";
    }else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ 
    if(pInput.value == "" || pInput.value.length < 4){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else if(!pInput.value == "" && !pInput.value.length < 4){ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkPassConfirm(){ 
    if(cInput.value != pInput.value){ 
      cField.classList.add("error");
      cField.classList.remove("valid");
      let errorTxt = cField.querySelector(".error-txt");
      (cInput.value != "" && cInput.value != pInput.value) ? errorTxt.innerText = "Mot de passe incorrect" : errorTxt.innerText = "Veuillez confirmer votre mot de passe";
    }else{ 
      cField.classList.remove("error");
      cField.classList.add("valid");
    }
  }

  if(!uField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error") && !cField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}