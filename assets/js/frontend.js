$('#filter-expand').on('click', function() {
  $('#filter-selection').toggle();
});

$('#donateBtn').on('click', function(event) {
  event.preventDefault();
  $('#donate').modal('hide');
  $('#checkout').modal('show');
});
