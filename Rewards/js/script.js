var btnSub = document.getElementById('btn-sub');
btnSub.addEventListener('click', function(){
      var starCode = document.getElementById('star-code');
      var errorCode = document.getElementById('error-code');
      errorCode.innerText = '';
      if (starCode.value.length < 8) {
        errorCode.innerText = 'X Please enter a Star code'
      }
});