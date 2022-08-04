// //Login formulaire validation
// $(".textBox input").focusout(function(){
//     if($(this).val() == ""){
//         $(this).siblings().removeClass("hidden");
//         $(this).css("background", "#e7e7e72e");
//     }else{
//         $(this).siblings().addClass("hidden");
//         $(this).css("background", "none");
//     }
// });
// $(".textBox input").keyup(function(){
//     var inputs = $(".textBox input");
//     if(inputs[0].value != "" && inputs[1].value){
//         $(".login-btn").attr("disabled",false);
//         $(".login-btn").addClass("active");
//     }else{
//         $(".login-btn").attr("disabled",true);
//         $(".login-btn").removeClass("active");
//     }
// });

// //SignIn formulaire validation
// $(".signIn__textBox input").focusout(function(){
//     if($(this).val() == ""){
//         $(this).siblings().removeClass("hidden");
//         $(this).css("background", "#e7e7e72e");
//     }else{
//         $(this).siblings().addClass("hidden");
//         $(this).css("background", "none");
//     }
// });
// $(".signIn__textBox input").keyup(function(){
//     var inputs = $(".signIn__textBox input");
//     var list = document.getElementById('type_compte');
//     var test = list.options[list.selectedIndex].value
//     var spans = $(".signIn__textBox span");
//     if(inputs[0].value != "" && inputs[1].value && test != 0 &&
//     /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(inputs[1].value)){
//         $(".signIn-btn").attr("disabled",false);
//         $(".signIn-btn").addClass("active");
//     }else if(inputs[0].value != "" && inputs[1].value && test != 0 && 
//         !/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(inputs[1].value)){
//         $(".signIn-btn").attr("disabled",true);
//         $(".signIn-btn").removeClass("active");
//     }else{
//         $(".signIn-btn").attr("disabled",true);
//         $(".signIn-btn").removeClass("active");
//     }
// });


// //Newletter formulaire validation
// $(".texBox input").focusout(function(){
//     if($(this).val() == ""){
//         $(this).siblings().removeClass("hidden");
//         $(this).css("background", "#e7e7e72e");
//     }else{
//         $(this).siblings().addClass("hidden");
//         $(this).css("background", "none");
//     }
// });

// $(".texBox input").keyup(function(){
//     var inputs = $(".texBox input");
//     if(inputs[0].value != "" && inputs[1].value && 
//     /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(inputs[1].value)){
//         $(".send-btn").attr("disabled",false);
//         $(".send-btn").addClass("active");
//     }else if(inputs[0].value != "" && inputs[1].value && 
//     !/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(inputs[1].value)){
//         $(".send-btn").attr("disabled",true);
//         $(".send-btn").removeClass("active");
//     }else{
//         $(".send-btn").attr("disabled",true);
//         $(".send-btn").removeClass("active");
//     }
// });

// // var email = prompt("Entrez votre adresse e-mail :",
// // "javascript@siteduzero.com");
// // if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
// // alert("Adresse e-mail valide !");
// // } else {
// // alert("Adresse e-mail invalide !");
// // }
