// console.log("test");

// global vars
var tauArray = [];
var outputText = '';
var i = 0;

$(document).ready(function(){
  var searchUrl = 'http://devjana.net/support/tau_students.json';
  // console.log("JQ test");
  // ajax call

  $.ajax({
    url: searchUrl,
    dataType: 'JSON',
    success: function ( data ){
      // console return data
      console.log( 'in ajax success, data:', data );
      // loop to push to tauArray
      for (var i = 0; i < data.tau.length; i++) {
      tauArray.push(data.tau[i]);
    } // end for loop
    showStudents( data.tau );
    } // end success
  }); // end ajax

// buttons
$(document).on('click', '#next', function(){
  i = i + 1;
  i = i % tauArray.length;
  showStudents();
}); // end next function

$(document).on('click', '#prev', function(){
  if(i === 0) {
    i = tauArray.length;
  }
  i = i - 1;
  showStudents();
}); //end prev function

// Display
var showStudents = function () {
  var outputText = '<img src="' + tauArray[i].picUrl + '" />';
  outputText += '<h2>' + tauArray[i].first_name + ' ' + tauArray[i].last_name + ' ' + '</h2>';
  outputText += '<p>' + tauArray[i].info + '</p>';
  outputText += '<p>' + (i + 1) + '/' + tauArray.length + '</p>';
  $( '#outputDiv' ).html( outputText );
};
  }); //end doc ready
