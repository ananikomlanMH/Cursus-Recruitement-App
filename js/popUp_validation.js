const nForm = document.querySelectorAll("form");
usernameField = nForm[1].querySelector(".username"),
usernameInput = usernameField.querySelector("input"),
emailField = nForm[1].querySelector(".email"),
emailInput = emailField.querySelector("input"),
sField = nForm[1].querySelector(".secteur"),
sSelect = sField.querySelector("#secteur-newsletter");

nForm[1].onsubmit = (e)=>{
  e.preventDefault();
  
  (usernameInput.value == "") ? usernameField.classList.add("shake", "error") : checkUsername();
  (emailInput.value == "") ? emailField.classList.add("shake", "error") : checkEmail();
  (sSelect.value == 0) ? sField.classList.add("shake", "error") : checkSelect();

  setTimeout(()=>{
    usernameField.classList.remove("shake");
    emailField.classList.remove("shake");
    sField.classList.remove("shake");
  }, 500);

  usernameInput.onkeyup = ()=>{checkUsername();}
  emailInput.onkeyup = ()=>{checkEmail();}
  sSelect.onchange = ()=>{checkSelect();}

  function checkUsername(){
    if(usernameInput.value == "" || usernameInput.value.length < 3){ 
      usernameField.classList.add("error");
      usernameField.classList.remove("valid");
    }else if(!usernameInput.value == "" && !usernameInput.value.length < 3){
      usernameField.classList.remove("error");
      usernameField.classList.add("valid");
    }
  }

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!emailInput.value.match(pattern)){ 
      emailField.classList.add("error");
      emailField.classList.remove("valid");
      let errorTxt = emailField.querySelector(".error-txt");
      (emailInput.value != "") ? errorTxt.innerText = "Entrer une adresse email correcte" : errorTxt.innerText = "Veuillez renseigner votre email";
    }else{
      emailField.classList.remove("error");
      emailField.classList.add("valid");
    }
  }

  function checkSelect(){ 
    if(sSelect.value == 0){
      sField.classList.add("error");
      sField.classList.remove("valid");
    }else{ 
      sField.classList.remove("error");
      sField.classList.add("valid");
    }
  }

  if(!usernameField.classList.contains("error") && !emailField.classList.contains("error") && !sField.classList.contains("error")){
    window.location.href = nForm[1].getAttribute("action");
  }
}