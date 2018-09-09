$(function() {

  $('#nav-marketplace a').click(function(e) {
    $('.page').removeClass('open');
    $('#marketplace-page').addClass('open');
    e.preventDefault();
  });

  $('#nav-browse a').click(function(e) {
    $('#marketplace-page').removeClass('open');
    $('#map-page').addClass('open');
    e.preventDefault();
  });

  $('#step-1 #category .option input').change(function() {
    if (this.checked) {
      $('#step-1 #category .option input').not(this).prop('checked', false);
      sessionStorage.setItem('category', $(this).value);
      $('#map-overlay .step').removeClass('open');
      $('#map-overlay #step-2').addClass('open');
    }
  });

  $('#step-2 #sub-category .option input').change(function() {
    if (this.checked) {
      $('#step-2 #sub-category .option input').not(this).prop('checked', false);
      sessionStorage.setItem('subCategory', $(this).value);
      $('#map-overlay .step').removeClass('open');
      $('#map-overlay #step-3').addClass('open');
    }
  });

  $('#step-3 #suggestions a').click(function(e) {
    $('.step').removeClass('open');
    $('#step-4').addClass('open');
    e.preventDefault();
  });

  $('.step a.selected-category').click(function(e) {
    $('.step').removeClass('open');
    $('#step-1').addClass('open');
    e.preventDefault();
  });

  $('.step a.selected-sub-category').click(function(e) {
    $('.step').removeClass('open');
    $('#step-2').addClass('open');
    e.preventDefault();
  });

  $('#step-4 .actions .back a').click(function(e) {
    $('.step').removeClass('open');
    $('#step-3').addClass('open');
    e.preventDefault();
  });
});
