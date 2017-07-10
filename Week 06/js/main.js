$(document).ready(function() {

  // Exercise 6.2
  $("#hideBtn").click(function() {
    $("#exercise3 img").hide();
  });
  $("#showBtn").click(function() {
    $("#exercise3 img").show();
  });

  // Exercise 6.4
  $("#exercise4 h1").dblclick(function() {
    $("#exercise4 h1").toggleClass("styleSwitch");
  });

// Exercise 6.6
  $("#addBtn").click(function() {
    $("#exercise5 ul").append("<li>CONTENT!</li>");
  });
