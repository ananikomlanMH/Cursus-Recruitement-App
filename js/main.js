$(document).ready(function(){

    // Activation du Sticky header au scrool
    $(window).scroll(function(){
        if(this.scrollY > 100)
        $("header").addClass("sticky");
        else
        $("header").removeClass("sticky");
    });
    
    // Menu Hamburger
    $(".menu-toggler").click(function(){
        $(this).toggleClass("active");
        $(".nav_links").toggleClass("active");
    });

    //Bouton Scroll-To-Top
    $("#topBtn").click(function(){
        $("html, body").animate({scrollTop : 0},800);
    });
    
    // categorie article dropdown
    $(".categorie_dropdown p").click(function(){
        $(".categorie_dropdown").toggleClass("active");
    });

    //Pagination des pages
    $(".prev").click(function(){
        $(".pagination-container").find(".pageNumber.active").prev().addClass("active");
        $(".pagination-container").find(".pageNumber.active").next().removeClass("active");
    });

    $(".next").click(function(){
        $(".pagination-container").find(".pageNumber.active").next().addClass("active");
        $(".pagination-container").find(".pageNumber.active").prev().removeClass("active");
    }); 
});
// post detail input search
$(".input-search input").keyup(function(){
    if (this.value.length > 0) {
        $(".input-search .icon.fi-rr-cross-small")[0].style.visibility = "visible";
        $(".input-search .icon.fi-rr-cross-small")[0].style.opacity = "1";
        
        $(".input-search .icon.fi-rr-search")[0].style.visibility = "hidden";
        $(".input-search .icon.fi-rr-search")[0].style.opacity = "0";
    }else{
        $(".input-search .icon.fi-rr-cross-small")[0].style.visibility = "hidden";
        $(".input-search .icon.fi-rr-cross-small")[0].style.opacity = "0";
        
        $(".input-search .icon.fi-rr-search")[0].style.visibility = "visible";
        $(".input-search .icon.fi-rr-search")[0].style.opacity = "1";
    }
 });
 $(".input-search .icon.fi-rr-cross-small").click(function() {
    $(".input-search input").value = "";
    alert('kkj');
 })

// theme switch
const themeCookieName = 'theme';
const themeDark = 'dark';
const themeLight = 'light';
const body = document.getElementsByTagName('body')[0];

function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 *60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname){
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1)
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length);
        }
    }
    return ""
}

loadTheme()
function loadTheme(){
    var theme = getCookie(themeCookieName);
    body.classList.add(theme === "" ? themeLight : theme);
}

function switchTheme() {
    if(body.classList.contains(themeLight)){
        body.classList.remove(themeLight);
        body.classList.add(themeDark);
        setCookie(themeCookieName, themeDark);
    }else{
        body.classList.remove(themeDark);
        body.classList.add(themeLight);
        setCookie(themeCookieName, themeLight);
    }
}

// dropdown close
$(window).click(function(event){
    if(!event.target.matches('.categorie_dropdown p')){
        close_categorie_blog_dropdown();
    }
});

function close_categorie_blog_dropdown(){
    var categorie_blog_dropdown = document.getElementsByClassName("categorie_dropdown")[0];
    if(categorie_blog_dropdown.classList.contains("active")){
        categorie_blog_dropdown.classList.remove('active')
    }
}
// Definition dynamique de la hauteur des images de CV
$(window).load(function(){
    const image = document.getElementsByClassName("doc_img");
    const image_box = document.getElementsByClassName("imgBox");
    for(nbr_doc = 0; nbr_doc < image_box.length; nbr_doc++){
        image_box[nbr_doc].style.height = image[nbr_doc].clientHeight +"px";
    }
})

// LightBox des images de CV
function cv_img_lightBox(){
    $(".lightBox").toggleClass('active');
}

// setTimeout(function(){
//     $('.loader_bg').fadeToggle();
// }, 2000);

//counterUp de la page d'acceuil
$(".number").counterUp({delay:10, time:2500});

// popUp Newletters
function popUp_newletter(){
    $(".popUp_section").toggleClass('active');
}

// Tabs navigation de la page d'acceuil
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const tit = document.getElementById('tags-title');
const btn = document.getElementById('btn-section');
var hauteur = tit.clientHeight  + btn.clientHeight + content1.clientHeight + 140;
$(".tags-search")[0].style.height = hauteur +"px";

btn1.addEventListener("click",function(){
    hauteur = tit.clientHeight  + btn.clientHeight + content1.clientHeight + 140;
    $(".tags-search")[0].style.height = hauteur +"px";

    content1.style.transform = "translateX(1%)";
    content2.style.transform = "translateX(102%)";
    content3.style.transform = "translateX(102%)";
    content4.style.transform = "translateX(102%)";

    btn1.style.color = "var(--primary-color)";
    btn1.style.borderBottom = "1px solid var(--primary-color)";
    
    btn2.style.color = "var(--body-font-color)";
    btn2.style.borderBottom = "none";
    
    btn3.style.color = "var(--body-font-color)";
    btn3.style.borderBottom = "none";
    
    btn4.style.color = "var(--body-font-color)";
    btn4.style.borderBottom = "none";
    
    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";
    content4.style.transitionDelay = "0s";
});

btn2.addEventListener("click",function(){
    hauteur = tit.clientHeight  + btn.clientHeight + content2.clientHeight + 140;
    $(".tags-search")[0].style.height = hauteur +"px";

    content1.style.transform = "translateX(102%)";
    content2.style.transform = "translateX(1%)";
    content3.style.transform = "translateX(102%)";
    content4.style.transform = "translateX(102%)";

    btn1.style.borderBottom = "none";
    btn1.style.color = "var(--body-font-color)";
    
    btn2.style.color = "var(--primary-color)";
    btn2.style.borderBottom = "1px solid var(--primary-color)";
    
    btn3.style.color = "var(--body-font-color)";
    btn3.style.borderBottom = "none";
    
    btn4.style.color = "var(--body-font-color)";
    btn4.style.borderBottom = "none";
    
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0.3s";
    content3.style.transitionDelay = "0s";
    content4.style.transitionDelay = "0s";
});

btn3.addEventListener("click",function(){
    hauteur = tit.clientHeight  + btn.clientHeight + content3.clientHeight + 140;
    $(".tags-search")[0].style.height = hauteur +"px";

    content1.style.transform = "translateX(102%)";
    content2.style.transform = "translateX(102%)";
    content3.style.transform = "translateX(1%)";
    content4.style.transform = "translateX(102%)";

    btn1.style.borderBottom = "none";
    btn1.style.color = "var(--body-font-color)";
    
    btn2.style.color = "var(--body-font-color)";
    btn2.style.borderBottom = "none";
    
    btn3.style.color = "var(--primary-color)";
    btn3.style.borderBottom = "1px solid var(--primary-color)";
    
    btn4.style.color = "var(--body-font-color)";
    btn4.style.borderBottom = "none";
    
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0.3s";
    content4.style.transitionDelay = "0s";
});

btn4.addEventListener("click",function(){
    hauteur = tit.clientHeight  + btn.clientHeight + content4.clientHeight + 140;
    $(".tags-search")[0].style.height = hauteur +"px";

    content1.style.transform = "translateX(102%)";
    content2.style.transform = "translateX(102%)";
    content3.style.transform = "translateX(102%)";
    content4.style.transform = "translateX(1%)";

    btn1.style.borderBottom = "none";
    btn1.style.color = "var(--body-font-color)";
    
    btn2.style.color = "var(--body-font-color)";
    btn2.style.borderBottom = "none";
    
    btn3.style.color = "var(--body-font-color)";
    btn3.style.borderBottom = "none";
    
    btn4.style.color = "var(--primary-color)";
    btn4.style.borderBottom = "1px solid var(--primary-color)";
    
    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";
    content4.style.transitionDelay = "0.3s";
});
