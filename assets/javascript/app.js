$(document).ready(function() {
  $("#home").show();
  $("#portfolio").hide();
});

$("#hlink").ready(function(event) {
  event.preventDefault();
  $("#home").show();
  $("#portfolio").hide();
});

$("#plink").click(function(event) {
  event.preventDefault();
  $("#home").hide();
  $("#portfolio").show();
});
