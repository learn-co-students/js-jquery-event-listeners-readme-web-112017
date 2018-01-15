//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    for (let i = 0; i<$('img').length; i++) {
      $('img')[i].className = "tasty"
    }
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(key) {
    if (key.which === 71) {
      alert("alert!")
    }
  })
}

function submitIt(){
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}

  // $('input#typing').val()


$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
