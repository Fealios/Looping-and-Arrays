$(document).ready(function(){
  $('#transportation_survey').submit(function(event){
    event.preventDefault();
    $('#work-responses, #fun-responses').show();
    $('input:checkbox[name=work-transportation]:checked').each(function(){
      var workTransportationMode = $(this).val();
      $('#work-output').append("<li>" + workTransportationMode + "</li>");
    })

    $('input:checkbox[name=fun-transportation]:checked').each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-output').append("<li>" + funTransportationMode + "</li>");
    })
  })
  // fun answers below

})
