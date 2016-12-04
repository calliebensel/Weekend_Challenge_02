// console.log("test");

// global vars
var tauArray = [];

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
    showTauArray(data.tau);
    } // end success
  }); // end ajax

  // display to DOM
  var showTauArray = function() {
    // console.log("show");
    var outputText = '';
    for (var i = 0; i < tauArray.length; i++) {
      outputText += '<img src="' + tauArray[i].picUrl + '" />';
      outputText += '<h2>' + tauArray[i].first_name + ' ' + tauArray[i].last_name + ' ' + '</h2>';
      outputText += '<p>' + tauArray[i].info + '</p>';
    } // for loop
    $( '#outputDiv' ).html( outputText );
  }; // end showTauArray function

  }); //end doc ready
