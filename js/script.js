/*$('.btn-schedule-a-call').on('click', function (){

    let res = true;

    if($('#email-schedule').val() === '' || !email_check($('#email-schedule').val())){
        $('#email-schedule').css('border-color','red');
        $('.email-error').removeClass('hidden');
        res = false;
    } else {
        $('#email-schedule').css('border-color','#86b870');
        $('.email-error').addClass('hidden');


    }

    if($('#name-schedule').val() === ''  ){
        $('#name-schedule').css('border-color','red');
        $('.name-error').removeClass('hidden');
        res = false
    }else {
        $('#name-schedule').css('border-color','#86b870');
        $('.name-error').addClass('hidden');
    }

    if($('#tel-schedule').val() === '' || !tel_check($('#tel-schedule').val())){
        $('#tel-schedule').css('border-color','red');
        $('.tel-error').removeClass('hidden');
        res = false;
    }else {
        $('#tel-schedule').css('border-color','#86b870');
        $('.tel-error').addClass('hidden');
    }

    if(res){
        $('#form-schedule').submit();
    }
})


function email_check(email_str){
    let re = /\S+@\S+\.\S+/;
    return re.test(email_str);
}

function tel_check(tel_str){
    let re = /[0-9\-\(\)\s]+/;
    return re.test(tel_str);
}*/



      /*search-------------------*/


/*search 2-------------------*/

$(document).ready(function(){
    $('a[href="#search"]').on('click', function(event) {
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});


/*search 2 -------------------*/


$('.responsive').slick({

    slidesToShow:2,
    speed: 300,
    infinite:true,
    loop:true,
   /* slidesToScroll:1,*/
    variableWidth:true,
  /*  autoplay:true,*/
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,


            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },



    ]
});


/*popup-------------------------*/


let popup = document.querySelector(".popup"),
    button = document.querySelector(".button-popup");

button.addEventListener("click", openPop);

function openPop(){
    popup.style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e){
    if(e.target == popup) {
        popup.style.display = "none";
    }
}



let popup_sign_up = document.querySelector(".popup-sign-up"),
    button2 = document.querySelector(".button-popup-sign-up");

button2.addEventListener("click", openPop2);

function openPop2(){
    popup_sign_up.style.display = "Block";
}

window.addEventListener("click", closePop2);

function closePop2(e){
    if(e.target == popup_sign_up) {
        popup_sign_up.style.display = "none";
    }
}

/*------------------------------------------popup*/




/*vaidacia-----------------------------------*/
/*
$('.btn-schedule-a-call').on('click', function (){

    let res = true;

    if($('#email-schedule').val() === '' || !email_check($('#email-schedule').val())){
        $('#email-schedule').css('border-color','red');
        $('.email-error').removeClass('hidden');
        res = false;
    } else {
        $('#email-schedule').css('border-color','#86b870');
        $('.email-error').addClass('hidden');


    }

    if($('#name-schedule').val() === ''  ){
        $('#name-schedule').css('border-color','red');
        $('.name-error').removeClass('hidden');
        res = false
    }else {
        $('#name-schedule').css('border-color','#86b870');
        $('.name-error').addClass('hidden');
    }

    if($('#tel-schedule').val() === '' || !tel_check($('#tel-schedule').val())){
        $('#tel-schedule').css('border-color','red');
        $('.tel-error').removeClass('hidden');
        res = false;
    }else {
        $('#tel-schedule').css('border-color','#86b870');
        $('.tel-error').addClass('hidden');
    }

    if(res){
        $('#form-schedule').submit();
    }
})


function email_check(email_str){
    let re = /\S+@\S+\.\S+/;
    return re.test(email_str);
}

function tel_check(tel_str){
    let re = /[0-9\-\(\)\s]+/;
    return re.test(tel_str);
}*/





let signUpBtn = document.getElementById("btn-sing-up");

signUpBtn.addEventListener("click", signUp);


function signUp(){
    let result = true;

    let r_username = document.getElementById('r_username');
    let r_username_box = document.getElementById('r_username_box')
    let r_email = document.getElementById('r_email');
    let r_email_box = document.getElementById('r_email_box');
    let r_password = document.getElementById('r_password');
    let r_password_box = document.getElementById('r_password_box');
    let r_confirm_password = document.getElementById('r_confirm_password')
    let r_confirm_password_box = document.getElementById('r_confirm_password_box')

    let invalid_username_span = document.getElementById('inv_username');
    let invalid_email_span = document.getElementById('inv_email');
    let invalid_password_span = document.getElementById('inv_password');
    let invalid_password_confirm_span = document.getElementById('inv_password_confirm');





    if(r_username.value === '' || r_username.value.length < 3){
        result = false;
        r_username_box.classList.add("error-validate");
        invalid_username_span.style.display = 'block';


     /*   r_username.setCustomValidity('bbbbbb invalid Email');
        r_username.reportValidity()*/
    } else {
        r_username_box.classList.remove('error-validate');
        invalid_email_span.style.display = 'none';
    }


    if(r_email.value === '' || !email_check(r_email.value) ){
        result = false;
        r_email_box.classList.add("error-validate");
        invalid_email_span.style.display = 'block';


       /* r_email.setCustomValidity('invalid Email');
        r_email.reportValidity()*/
    }else {
        r_email_box.classList.remove('error-validate');
        invalid_email_span.style.display = 'none';
    }

    if(r_password.value === '' || r_password.value.length <= 4){
        result = false;
        r_password_box.classList.add('error-validate');

        invalid_password_span.style.display = 'block';
    }else{
        r_password_box.classList.remove('error-validate');

        invalid_password_span.style.display = 'none';

    }
    if(r_confirm_password.value === '' || r_confirm_password.value !== r_password.value){
        result = false;
        r_confirm_password_box.classList.add('error-validate');
        invalid_password_confirm_span.style.display = 'block';
    }else {
        r_confirm_password_box.classList.remove('error-validate');
        invalid_password_confirm_span.style.display = 'none';
    }


    if(result){
        document.getElementById("sign-up-form").submit();

    }


}
function email_check(email_str){
    let re = /\S+@\S+\.\S+/;
    return re.test(email_str);
}



/*logIn-------------------------------*/

let btn_login = document.getElementById('btn-login');


btn_login.addEventListener("click", logIn);

function logIn(){
    let res = true

    let login_username_box = document.getElementById('login_username_box');
    let login_username = document.getElementById('login_username');
    let inv_username_login = document.getElementById('inv_username_login');
    let login_pass_box = document.getElementById('login_pass_box');
    let login_pass = document.getElementById('login_pass');
    let inv_pass_login = document.getElementById('inv_pass_login')



    if(login_username.value === '' || login_username.value.length < 3){
        res = false;
        login_username_box .classList.add("error-validate");
        inv_username_login.style.display = 'block';

    } else {
        login_username_box.classList.remove('error-validate');
        inv_username_login.style.display = 'none';
    }

    if(login_pass.value === '' || login_pass.value.length <= 4 ){
        res = false;
        login_pass_box.classList.add("error-validate");
        inv_pass_login.style.display = 'block';

    }else {
        login_pass_box.classList.remove('error-validate');
        inv_pass_login.style.display = 'none';
    }


    if(res){
        document.getElementById("login-form").submit();

    }

}







/*login Mobail--------------------------------*/



let btn_login_mobile = document.getElementById('btn-login_mobile');


btn_login_mobile.addEventListener("click", logImobail);

function logImobail(){
    let res = true

    let login_username_box_mobile = document.getElementById('login_username_box_mobile');
    let login_username_mobile = document.getElementById('login_username_mobile');
    let inv_username_login_mobile = document.getElementById('inv_username_login_mobile');
    let login_pass_box_mobile = document.getElementById('login_pass_box_mobile');
    let login_pass_mobile = document.getElementById('login_pass_mobile');
    let inv_pass_login_mobile = document.getElementById('inv_pass_login_mobile')



    if(login_username_mobile.value === '' || login_username_mobile.value.length < 3){
        res = false;
        login_username_box_mobile .classList.add("error-validate");
        inv_username_login_mobile.style.display = 'block';

    } else {
        login_username_box_mobile.classList.remove('error-validate');
        inv_username_login_mobile.style.display = 'none';
    }

    if(login_pass_mobile.value === '' || login_pass_mobile.value.length <= 4 ){
        res = false;
        login_pass_box_mobile.classList.add("error-validate");
        inv_pass_login_mobile.style.display = 'block';

    }else {
        login_pass_box_mobile.classList.remove('error-validate');
        inv_pass_login_mobile.style.display = 'none';
    }


    if(res){
        document.getElementById("login_form_mobile").submit();

    }

}




/*SignUp Mobile*-------------/ */










let signUpBtnMobile = document.getElementById("btn-sing-up_mobile");

signUpBtnMobile.addEventListener("click", signUpMobile);


function signUpMobile(){
    let result = true;

    let r_username_mobile = document.getElementById('r_username_mobile');
    let r_username_box_mobile = document.getElementById('r_username_box_mobile')
    let r_email_mobile = document.getElementById('r_email_mobile');
    let r_email_box_mobile = document.getElementById('r_email_box_mobile');
    let r_password_mobile = document.getElementById('r_password_mobile');
    let r_password_box_mobile = document.getElementById('r_password_box_mobile');
    let r_confirm_password_mobile = document.getElementById('r_confirm_password_mobile')
    let r_confirm_password_box_mobile = document.getElementById('r_confirm_password_box_mobile')

    let inv_username_mobile = document.getElementById('inv_username_mobile');
    let inv_email_mobile = document.getElementById('inv_email_mobile');
    let inv_password_mobile_signup = document.getElementById('inv_password-mobile_signup');
    let inv_password_confirm_mobile = document.getElementById('inv_password_confirm_mobile');





    if(r_username_mobile.value === '' || r_username_mobile.value.length < 3){
        result = false;
        r_username_box_mobile.classList.add("error-validate");
        inv_username_mobile.style.display = 'block';

    } else {
        r_username_box_mobile.classList.remove('error-validate');
        inv_username_mobile.style.display = 'none';
    }


    if(r_email_mobile.value === '' || !email_check(r_email_mobile.value) ){
        result = false;
        r_email_box_mobile.classList.add("error-validate");
        inv_email_mobile.style.display = 'block';

    }else {
        r_email_box_mobile.classList.remove('error-validate');
        inv_email_mobile.style.display = 'none';
    }

    if(r_password_mobile.value === '' || r_password_mobile.value.length <= 4){
        result = false;
        r_password_box_mobile.classList.add('error-validate');
        inv_password_mobile_signup.style.display = 'block';
    }else{
        r_password_box_mobile.classList.remove('error-validate');
        inv_password_mobile_signup.style.display = 'none';

    }
    if(r_confirm_password_mobile.value === '' || r_confirm_password_mobile.value !== r_password_mobile.value){
        result = false;
        r_confirm_password_box_mobile.classList.add('error-validate');
        inv_password_confirm_mobile.style.display = 'block';
    }else {
        r_confirm_password_box_mobile.classList.remove('error-validate');
        inv_password_confirm_mobile.style.display = 'none';
    }


    if(result){
        document.getElementById("sign-up-form_mobile").submit();

    }


}



/*-----------------------------------vaidacia*/





// filter


let  filterbtn = document.getElementById("filter");
let filteritem = document.getElementById("btn-mobile");

filterbtn.addEventListener("click" , ()=>{

    if (filteritem .style.display === "none") {
        filteritem.style.display = "flex";
    } else {
        filteritem.style.display = "none";
    }

});






filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        filterremoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) filteraddClass(x[i], "show");
    }
}

function filteraddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function filterremoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn-btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}



// filter show more

let filbtn = document.getElementById("filtr-btn");


filbtn.addEventListener("click" , ()=>{
    let filteractive = document.getElementById("more");
    filteractive.classList.toggle("filter-active");



});
filbtn.addEventListener("click" , ()=>{
    let filterarrow = document.getElementById("filtr-btn-i");
    filterarrow.classList.toggle("filter-active-btn");

});





/*burger-menu*/


/*let overflow_hidden = document.getElementById('overflow_hidden');

overflow_hidden.addEventListener('click', overflowHidden );

function overflowHidden(){
    document.body.style.overflow = 'hidden';


}*/

let overflow_hidden = document.querySelectorAll('.overflow_hidden');
let body = document.body
let ov_initial = document.querySelectorAll('.ov_initial ');

for(let i = 0 ; i < ov_initial.length ; i++){
    ov_initial[i].addEventListener('click', initial);
}
for(let i = 0 ; i < overflow_hidden.length ; i++){
    overflow_hidden[i].addEventListener('click', hidden);


}
function initial() {
    body.style.overflow = 'initial';
}

function hidden(event){
    body.style.overflow = 'hidden';
}




let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', topFunction );

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}