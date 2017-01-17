var signs = [];
var coping = [];
var symptoms = [];
$(document).ready(function() {
  $('#stress').submit(function(event) {
    event.preventDefault();
    // var signs = [];
    // var coping = [];
    // var symptoms = [];
    $("input:checkbox[name=signs]:checked").each(function() {
      signs.push($(this).val());
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      symptoms.push($(this).val());
    });

    $("input:checkbox[name=coping]:checked").each(function() {
      coping.push($(this).val());
    });

    test (signs, coping, symptoms)
    signs = [];
    coping = [];
    symptoms = [];
  })
})

var test = function(signs, coping, symptoms) {
  if (symptoms.length > 3 & signs.length > 3){
    alert('you gon die');
  } else if (signs.length > 3 & coping.length > 3){
    alert('you don good');
  } else if (signs.length === 0 & symptoms.length === 0 & coping.length === 4){
    alert('calm the fuck down');
  } else {
    alert('you fine');
  }
}
