//Initiate Soundcloud Client id
// SC.initialize({
  // client_id: '340f063c670272fac27cfa67bffcafc4'
// });
//Create a jQuery Function to using .ready to run the upcoming functions in order
// $(document).ready(function() {
//Within that stream Soundcloud using this code.
   // SC.stream('/tracks/538515366',function(sound){

   //Within SC.stream Write jQuery Function to start Song
     // $('#start').click(function(e) {
     //            e.preventDefault();
     //            sound.start();
     //          });
  //Write jQuery Function to stop Song
//      $('#stop').click(function(e) {
//                 e.preventDefault();
//                 sound.stop();
//               });

//    });
// });






SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'

});

$(document).ready(function() {

  SC.stream('/tracks/354663899', function(sound) {
    $('#start').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/496210638', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/540186672', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/519152676', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/225519099', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



  SC.stream('/tracks/539772108', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



//  SC.stream('/tracks/340155138', function(sound) {
  //  $('#start6').click(function(e) {
  //    e.preventDefault();
  //    sound.start();
  //  });
  //  $('#stop6').click(function(e) {
  //    e.preventDefault();
  //   sound.stop();
//    });
//  });



  ////SC.stream('/tracks/557856666', function(sound) {
  //  $('#start7').click(function(e) {
    //  e.preventDefault();
    //  sound.start();
  //  });
  //  $('#stop7').click(function(e) {
  //    e.preventDefault();
  //    sound.stop();
  //  });
//  });



  //SC.stream('/tracks/541906656', function(sound) {
    //$('#start8').click(function(e) {
      //e.preventDefault();
//      sound.start();
  //  });
  //  $('#stop8').click(function(e) {
    //  e.preventDefault();
      //sound.stop();
//    });
//  });


  //SC.stream('/tracks/56927759', function(sound) {
    //$('#start9').click(function(e) {
      //e.preventDefault();
//      sound.start();
  //  });
    //$('#stop9').click(function(e) {
    //  e.preventDefault();
    //  sound.stop();
  //  });
  //});



  //SC.stream('/tracks/84237364', function(sound) {
//    $('#start10').click(function(e) {
//      e.preventDefault();
//      sound.start();
////    });
//    $('#stop10').click(function(e) {
//      e.preventDefault();
//      sound.stop();
//    });
//  });




//  SC.stream('/tracks/397422978', function(sound) {
//    $('#start11').click(function(e) {
//      e.preventDefault();
//      sound.start();
//    });
  //  $('#stop11').click(function(e) {
  //    e.preventDefault();
  //    sound.stop();
  //  });
//  });




});
