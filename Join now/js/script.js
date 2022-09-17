// <!-- validate email -->
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }
    // ---------------------------------
    var btnSub = document.getElementById('btn-sub');
    btnSub.addEventListener('click', function(){
        var starCode = document.getElementById('star-code');
        var errorCode = document.getElementById('error-code');
        errorCode.innerText = '';
        if (starCode.value.length < 8) {
          errorCode.innerText = 'X Please enter your Name'
        }
        
       //Email
       var email = document.getElementById('email');
       var errorEmail = document.getElementById('error-email');
       errorEmail.innerText = '';
       if( validateEmail(email.value) == false){
       errorEmail.innerText = 'X Please enter your email';
       }
      });