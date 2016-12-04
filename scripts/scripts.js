// console.log("test");
var tauArray = [];

$(document).ready(function(){
  // console.log("JQ test");


  var getStudent = function() {
  var searchUrl = 'http://devjana.net/support/tau_students.json';
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
    } // end success
  }); // end ajax
  }; // end get student
  getStudent();

}); //end doc ready
