let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let num = document.querySelector("#num");
let form = document.querySelector("form");
let err = document.querySelector(".err p");
let cnic = document.querySelector("#cnic");


let validate= false;

form.addEventListener("submit", (e)=>{
   
    let reName= /^[A-Za-z\s\'\-]{10,30}$/;
    let reNum= /^[0-9]{11}$/;
    let reCnic = /^[0-9]{5}\-[0-9]{7}\-[0-9]{1}$/;
    let remail = /^[A-Za-z0-9]+\@[A-Za-z0-9]+\.[a-z]{2,}$/;
    let repass =/^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()[\]{}]).{8,}$/;
    if(reName.test(userName.value.trim())){
        if(reNum.test(num.value.trim())){
            if(reCnic.test(cnic.value.trim())){
            if(remail.test(email.value.trim())){
                if(repass.test(pass.value.trim())){
                    validate = true;
                }
                else{
                    
                    err.textContent="Password must have uppercase, lowercase, number, and special character."
                }
            }
            else{
                 err.textContent="Email Not Correct!"
            }
        }else{
            err.textContent= "CNIC format not correct!";
        }
        }
        else{
            err.textContent="Phone number not correct!"
        }
    }
    else{
        err.textContent="User Name Not Correct!";
    }

    if(!validate){
        e.preventDefault();
      

    }
   

   
    

})
