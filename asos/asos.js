$(document).ready(function() {
    $('.person-icon').hover(function() {
      $('#customModal').modal('show');
    }, function() {
      $('#customModal').modal('hide');
    });
  });